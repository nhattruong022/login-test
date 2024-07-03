export const checkUseClient = typeof window !== 'undefined' && window.localStorage;
export const getLocalStorage = (item: string, defaultValue: string = '') => {
    if (checkUseClient) {
        return localStorage.getItem(item) ?? defaultValue;
    }
    return defaultValue;
};
export const setLocalStorage = (item: string, value: string) => {
    if (checkUseClient) {
        localStorage.setItem(item, value);
    }
};
export const removeLocalStorage = (item: string) => {
    if (checkUseClient) {
        localStorage.removeItem(item);
    }
};
