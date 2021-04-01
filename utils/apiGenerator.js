import request from './request'
import ApiUrl from './baseUrl';
const api= {};
export const generator = (URLS) => {
    const generalUrl = (key) => {
        const { method, url, mockUrl, mockMethod } = URLS[key];
        return {
            method: process.env.PROXY_ENV === 'mock' ? mockMethod || 'get' : method,
            url: `${ApiUrl}${process.env.PROXY_ENV === 'mock' ? mockUrl : url}`,
        };
    };
    const ApiFilter = (args, URLSItem, item) => {
        const methods = URLSItem.method.toUpperCase();
        const method = URLSItem.method.toLowerCase();
        // const protocol = `${location.protocol}/${location.host}/${generalUrl(item).url}`
        //     `${location.protocol}//${location.host}${generalUrl(item).url}
        // console.log('args', args)
        if (args.length >= 2) {
            const params = args[1];
            const req = args[0];
            return methods === 'GET' || methods === 'DELETE' ?
                request[method](generalUrl(item).url, {params, content: req}) :
                request[method](generalUrl(item).url, params, { content: req });
        } else {
            const params = args[0];
            return methods === 'GET' || methods === 'DELETE' ?
                request[method](generalUrl(item).url, { params }) :
                request[method](generalUrl(item).url, params);
        }
    }
    api.getUrl = key => generalUrl(key).url;

    Object.keys(URLS)
        .forEach((item) => {
            api[item] = (...args) => {
                return ApiFilter(args, URLS[item], item)
            }
        });
    return api
}
export default api;
