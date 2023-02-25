# FetchHandler
基於 Javascript ES6 所實現的 Request發送套件。

## 安裝
可直接使用 zip 下載 或 git clone 指令

## 設定
將檔案下載至本地後，您會看到目錄檔案為:

    |--FetchHandler
        |-- index.html
        |-- src
            |-- baseConfig.js
            |-- baseHandler.js
            |-- exception.js
            |-- fetchHandler.js
            |-- process.js

此時，您須至 `src/baseConfig.js`設置您的baseURL，接下來您須對檔案內的baseURL進行覆寫，改成後續發Request的host。

```javascript
/**
 * base url
 * @type {string}
 * */
export let baseURL = "http://localhost:8080/";
```
如此一來基本設定就完成了。

## 使用

1. 僅需在您的html中的script標籤內`import fetchHandler.js`後，即可開始開發。

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>FetchHandler</title>
    </head>
    <body>
        <script type="module">
            import { GET, POST, PUT, DELETE } from "./src/fetchHandler.js";
        </script>
    </body>
    </html>
    ```

2. 在Http method上，FetchHandler提供 GET, POST, PUT, DELETE 方法，若須自訂方法可至`fetchHandler.js`中新增您的自訂義方法。

## 範例
以<https://jsonplaceholder.typicode.com/>所提供的fake api進行範例

### 基本用法

```javascript
GET("/posts")
.then((result) => {
    console.log(result);
})
.catch((err) => {
    console.log(err);
});
```
僅需於方法中傳入所要請求的子路徑即可，方法回傳均以```Promise()``` 作為回傳類型。

### 添加 Http Config

只需在方法中的第二個參數內以物件形式傳入所需設定即可。
```javascript
PUT("posts/1", {
    body: JSON.stringify({
        id: 1,
        title: "foo",
        body: "bar",
        userId: 1,
    }),
})
```

如無傳入物件，FetchHandler則會啟用預設config。

```javascript
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
```

### Response格式定義
FetchHandler預設以JSON形式進行回傳，如需更改可參考以下寫法。
```javascript
PUT("posts/1", {
    responseType: TEXT, // {TEXT|JSON|BLOB|ARRAYBUFFER}
})
```

### 其他設定
可參考 [Fetch Request](https://developer.mozilla.org/en-US/docs/Web/API/Request)
