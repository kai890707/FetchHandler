import { request } from "./baseHandler.js";

/**
 * 基礎宣告的http config
 */
const defaultHttpConfig = {
    "GET": {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        responseType: 'JSON',
        cache: 'no-cache'
    },
    "POST": {
        method: 'POST',
        body: null,
        headers: {
            'Content-Type': 'application/json',
        },
        responseType: 'JSON',
        cache: 'no-cache'
    },
    "PUT": {
        method: 'PUT',
        body: null,
        headers: {
            'Content-Type': 'application/json',
        },
        responseType: 'JSON',
        cache: 'no-cache'
    },
    "DELETE": {
        method: 'DELETE',
        body: null,
        headers: {
            'Content-Type': 'application/json',
        },
        responseType: 'JSON',
        cache: 'no-cache'
    }
}

/**
 * 判斷 httpConfig 是否為空值，如不是空值則 assign 原有與傳入的http config物件，回傳新的config
 * @param {string} method 
 * @param {object} httpConfig 
 * @returns {object}
 */
function verifyConfig(method,httpConfig = null) {
    if (httpConfig == null) {
        return defaultHttpConfig[method];
    } else {
        return Object.assign({}, defaultHttpConfig[method], httpConfig);
    }
}

/**
 * RESTful Get 方法
 * @param {string} path 
 * @param {object|null} httpConfig 
 * @returns {Promise}
 */
export const GET = (path = "/", httpConfig= null) => {
    let dataPromise;
    if (httpConfig == null) {
        httpConfig = defaultHttpConfig.GET;
    }

    dataPromise = request(path, httpConfig);

    return dataPromise;
}

/**
 * RESTful POST 方法
 * @param {string} path 
 * @param {object|null} httpConfig 
 * @returns {Promise}
 */
export const POST = (path = "/", httpConfig = null) => {
    let dataPromise;
    let realConfig;
    realConfig = verifyConfig("POST", httpConfig);
    dataPromise = request(path, realConfig);

    return dataPromise;
}

/**
 * RESTful PUT 方法
 * @param {string} path 
 * @param {object|null} httpConfig 
 * @returns {Promise}
 */
export const PUT = (path = "/", httpConfig = null) =>{
    let dataPromise;
    let realConfig;

    realConfig = verifyConfig("PUT", httpConfig);
    dataPromise = request(path, realConfig);

    return dataPromise;
}

/**
 * RESTful DELETE 方法
 * @param {string} path 
 * @param {object|null} httpConfig 
 * @returns {Promise}
 */
export const DELETE = (path = "/" , httpConfig = null) =>{
    let dataPromise;
    let realConfig;

    realConfig = verifyConfig("DELETE", httpConfig);
    
    dataPromise = request(path, realConfig);

    return dataPromise;
}

