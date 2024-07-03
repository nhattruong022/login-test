import axios, { type AxiosInstance } from 'axios';
import jwt_decode from 'jwt-decode';
import { includes } from 'lodash';

import { AUTH_KEYS, REACT_APP_API_URL } from '@/constants/auth';
import { Language } from '@/types/common/Item';
import type User from '@/types/User';
import { getLocalStorage, removeLocalStorage, setLocalStorage } from '@/utils/localStorage';

class Http {
    instance: AxiosInstance;
    private refreshTokenRes: string;
    private accessToken: string;
    constructor() {
        this.accessToken = ''; //getLocalStorage(AUTH_KEYS.ACCESS_TOKEN);
        this.refreshTokenRes = ''; // getLocalStorage(AUTH_KEYS.REFRESH_TOKEN);
        this.instance = axios.create({
            baseURL: REACT_APP_API_URL,
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        this.instance.interceptors.request.use(
            async (config) => {
                if (config.headers) {
                    if (this.accessToken) {
                        config.headers.Authorization = `Bearer ${this.accessToken}`;
                    }
                    config.headers['lang-code'] = getLocalStorage(AUTH_KEYS.LANGUAGE_CODE, Language.EN);
                }
                if (
                    !includes(
                        [
                            '/auth/login',
                            '/auth/logout',
                            '/auth/register',
                            '/auth/forgotPassword',
                            '/auth/changePassword',
                        ],
                        config.url
                    )
                ) {
                    if (this.accessToken) {
                        try {
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            const { exp } = jwt_decode(this.accessToken);
                            if (exp && Date.now() > exp * 1000) {
                                await this.getToken((act: string) => {
                                    if (act) {
                                        this.accessToken = act;
                                    }
                                });
                            }
                        } catch (_err) {
                            await this.getToken((act: string) => {
                                if (act) {
                                    this.accessToken = act;
                                }
                            });
                        }
                    } else {
                        await this.getToken((act: string) => {
                            if (act) {
                                this.accessToken = act;
                            }
                        });
                    }
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        this.instance.interceptors.response.use(
            async (response) => {
                const { url } = response.config;
                if (url === '/auth/login') {
                    const dataLogin = response.data.data as User;
                    this.accessToken = dataLogin.token.access_token;
                    this.refreshTokenRes = dataLogin.token.refresh_token;
                    setLocalStorage(AUTH_KEYS.ACCESS_TOKEN, this.accessToken);
                    setLocalStorage(AUTH_KEYS.REFRESH_TOKEN, this.refreshTokenRes);
                } else if (url === '/auth/logout') {
                    this.accessToken = '';
                    this.refreshTokenRes = '';
                    removeLocalStorage(AUTH_KEYS.ACCESS_TOKEN);
                    removeLocalStorage(AUTH_KEYS.REFRESH_TOKEN);
                }

                if (response.data.status === 401) {
                    await this.getToken(() => {
                        location.reload();
                    });
                }

                return response;
            },
            function (error) {
                return Promise.reject(error);
            }
        );
    }

    getToken = async (fnSuccess: (newToken: string) => void) => {
        const res = await axios.post(
            REACT_APP_API_URL + '/auth/refresh',
            { refresh_token: this.refreshTokenRes },
            {
                headers: {
                    'Content-type': 'application/json',
                },
            }
        );
        let isSuccess = false;
        if (res.status === 200) {
            if (res.data.data.accessToken && res.data.data.refreshToken) {
                isSuccess = true;
                //TODO:
                const { accessToken: newAccessToken, refreshToken: newRefreshToken } = res.data.data;
                this.accessToken = newAccessToken;
                this.refreshTokenRes = newRefreshToken;
                setLocalStorage(AUTH_KEYS.ACCESS_TOKEN, newAccessToken);
                setLocalStorage(AUTH_KEYS.REFRESH_TOKEN, newRefreshToken);
                fnSuccess(newAccessToken);
            }
        }
        if (!isSuccess) {
            window.location.href = '/';
            this.accessToken = '';
            this.refreshTokenRes = '';
            removeLocalStorage(AUTH_KEYS.ACCESS_TOKEN);
            removeLocalStorage(AUTH_KEYS.REFRESH_TOKEN);
        }
    };
}

const http = new Http().instance;
export default http;
