import UrlPattern from 'url-pattern';

const API_URL = process.env.REACT_APP_API_BASE_URL;

const url = {
    "API_LOGIN" : `/api/v1/login`,
    "API_VERSION" : `/api/v1/version/get-version`,

    "API_USER_DETAIL" : `/api/v1/user`,

    "API_LIST_NOTIFY" : `/api/v1/notice`,
    "API_NOTIFY_DETAIL" : `/api/v1/notice/detail`

}

export const getUrl = (name, params = {}) =>  {
    const pattern = new UrlPattern(url[name]);
    return API_URL + pattern.stringify(params);
}

export default url;