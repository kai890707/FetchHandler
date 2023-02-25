
/**
 * base url
 * @type {string}
 * */
export let baseURL = "https://jsonplaceholder.typicode.com/";

/**
 * allow http method
 * @type {Array<string>}
 * */
export const allowMethod = ["GET", "POST", "PUT", "DELETE"]

/**
 * 設定base url
 * @param {string} income_baseURL 
 */
export const setBaseURL = (income_baseURL) =>{
    baseURL = income_baseURL;
}

/**
 * 回傳base url
 * @returns {string}
 */
export const getBaseURL = () => {
    return baseURL;
}