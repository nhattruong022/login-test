export enum AUTH_KEYS {
    ACCESS_TOKEN = 'access_token',
    REFRESH_TOKEN = 'refresh_token',
    USER_COOKIE = 'currentUser',
    HEADER_PATHNAME = 'x-pathname',
    HEADER_ACCESS_TOKEN = 'x-access_token',
    HEADER_USER_ID = 'x-user_id',
    LANGUAGE_CODE = 'lang-code',
}

export const REACT_APP_API_URL = process.env.REACT_APP_API_URL ?? 'http://jhn-api.savvycom.site';
