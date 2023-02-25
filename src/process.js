import { baseURL } from "./baseConfig.js";
import { Exception } from "./exception.js";

/**
 * 驗證是否為可發出請求之網址
 * @param {string} URLString 
 * @returns {boolean}
 */
const isValidURL = (URLString) => {
    try {
        new URL(URLString);
        return true;
    } catch (err) {
        return false;
    }
};

/**
 * 拼接網址
 * @param {string} path 
 * @returns 
 */
export const prettyURL = (path) => {

    let methodBaseURL = baseURL;
    let URL = "";

    if (path.slice(0, 1) == "/") {
        path = path.slice(1);
    }

    if (baseURL.slice(-1) !== "/") {
        methodBaseURL += "/";
    }

    URL = methodBaseURL + path;

    if (isValidURL(URL)) {
        return URL;
    } else {
        throw Exception("URL_Verify_Exception");
    }
}
