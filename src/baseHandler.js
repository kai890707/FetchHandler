import { prettyURL } from "./process.js";

/**
 * 承接 fetch promise then 結果 依照字典轉換回傳格式
 * @param {Promise} response 
 * @param {string} responseType 
 * @returns {Promise}
 */
function responseTypeHandler(response, responseType) {
    responseType = responseType.toUpperCase();
    let result;
    switch (responseType) {
        case "TEXT":
            result = response.text();
            break;
        case "JSON":
            result = response.json();
            break;
        case "BLOB":
            result = response.blob();
            break;
        case "ARRAYBUFFER":
            result = response.arrayBuffer();
            break;
    }

    return result;
}

/**
 * 實際發出 request 的函式
 * @param {string} path 
 * @param {object} httpConfig 
 * @returns {Promise} 
 */
export async function request(path = null, httpConfig) {
    let URL = prettyURL(path);
    let { method, param, body, header, responseType, cache } = httpConfig;

    const response = await fetch(URL, {
        method: method,
        params: param,
        body: body,
        headers: header,
        responseType: responseType,
        cache: cache,
    });

    var data = await responseTypeHandler(response, responseType);
    return data;
}
