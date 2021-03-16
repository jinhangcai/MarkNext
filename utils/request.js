import axios from 'axios';
import md5 from 'md5';
import { message } from 'antd';
import { getToken, toLogin, SSRGetToken } from "./util";
let diffTime = 0;

let fetcher = axios.create({
    withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'content-type': 'application/json',
    }
})

const codeMessage = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
}

function checkStatus(response) {
    console.log('config-response', response)
    return;
    const { status, data, data: { data: businessData, msg }, config, config: { headers: { referer, content } }, config: { url }, headers } = response;
    if (status >= 200 && status < 300) {
        const { code } = data;
        const numCode = Number(code);
        if (numCode !== 200) {
            // 输出错误信息，包括请求地址，错误码，错误提示
            console.error(
                `XHR request error, the request url is ${url},
                code is ${numCode},
                msg is ${msg}`
            );
            // 如果超时，则重新请求一次
            if (numCode === 2001109 || numCode === 117006) {
                const serverTime = headers && headers['server-timestamp'] || 0; // 上一次服务器时间
                const now = new Date().getTime(); // 本地当前时间，最新
                diffTime = now - serverTime; // 不同的时间
                return fetcher(url, config);
            } else if (numCode === 117001 || numCode === 2001106) {
                // toLogin(response?.config?.headers?.referer, response.config.headers.content); // 登录失效跳转登录
                toLogin(referer, content); // 登录失效跳转登录
            } else {
                message.error(msg);
            }
            return Promise.reject(data);
        }
        return businessData;
    }
    // 网络错误提示
    const errortext = codeMessage[response.status] || response.statusText;
    console.error(`请求错误 ${response.status}: ${response.config.url || null}`, errortext);
}

// 添加请求拦截器
fetcher.interceptors.request.use((config) => {
    const { headers = {}, params = {} } = config;
    // console.log('config', config)
    //添加时间戳，防止cache.
    const _ = Date.now();
    // const cookie = config.content ? cookies(config.content) : ''
    const content = config.content || (config.params && config.params.content) || ''
    const token = content ? SSRGetToken(content) : getToken() || '';
    // const token = '';
    const now = new Date().getTime() - diffTime;
    if (content) {
        headers.content = content.res;
        headers.referer = content?.req?.headers?.referer || config?.content?.req?.headers?.referer || '';
    }
    config.headers = {
        ...headers,
        token,
        timestamp: now,
        sign: md5(now + 'bdc739ff2dcf').toString().toLocaleUpperCase(),
    }
    config.params = {
        _,
        ...params,
    }
    delete config.content || (config.params && config.params.content);
    // console.log('是否服务端渲染', config)
    // 在发送请求之前做某事，比如说 设置loading动画显示
    return config
}, error => {
    // 请求错误时做些事
    console.log('请求失败', error)
    return Promise.reject(error);
})

// 拦截器,response之后
fetcher.interceptors.response.use(response => checkStatus(response), e => Promise.reject(e));

export default fetcher
export const post = fetcher.post
export const put = fetcher.put
export const get = fetcher.get
export const del = (url, params) => {
    return fetcher.delete(url, { params })
}
