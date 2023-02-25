/**
 * 依照傳入索引，搜尋定義字典，回傳錯誤訊息
 * @param {string} errorIndex 
 * @returns {string}
 */
export const Exception = (errorIndex) => {
    const error = {
        "URL_Verify_Exception": "Error : BaseURL設定錯誤或子路徑設定有誤!",
    }
    return error[errorIndex];
}