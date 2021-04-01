import { getCookie, removeCookie, getUrlParam } from '@ewt/eutils';
import cookies from 'next-cookies';
// 获取时长为X分X秒
export function getDurationText(sec) {
    sec = parseInt(sec);
    return `${window.parseInt(sec / 60)}分${window.parseInt(sec % 60)}秒`;
}

// 跳转登录
export function toLogin(url, content) {
    let domain = 'web.ewt360.com';
    // const pat = new RegExp('web.ewt360.com')
    if (url) {
        // ssr
        // if (!pat.test(url)) {
        //     domain = 'web.test.mistong.com';
        // }
        if (url.indexOf('ewt360') <= -1) {
            domain = 'web.test.mistong.com';
        }
    } else if (url.indexOf('ewt360') <= -1){
        domain = 'web.test.mistong.com';
        removeCookie('token'); // 清除token
    }
    const loginUrl = `//${domain}/register/#/login?sid=3&fromurl=${encodeURIComponent(url || window.location.href)}`;
    if (url) {
        content.writeHead(301, { location: loginUrl } );
        content.end();
        return
    }
    window.location.href = loginUrl;
}

// 数字转换为X万，精确度到小数点1位
export function parseIntToWan(num) {
    num = window.parseInt(num) || 0;
    return num >= 10000 ? `${(num / 10000).toFixed(1)}万` : num;
}

// 获取token信息。默认key为token
export function getToken(tokenKey = 'token') {
    const token = getCookie(tokenKey);
    return token;
}

export function SSRGetToken(content, tokenKey =  'token') {
    // let cookieValue = '';
    let tokenname = '';
    const { token, user, ewt_user } = cookies(content);
    const dataquery = {
        token,
        user,
        ewt_user
    }
    const query = ['token', 'ewt_user', 'user'];
    for (const value of query) {
        if (dataquery[value]) {
            tokenname = dataquery[value];
            break;
        }
    }
    if (tokenname.match('tk=')) {
        tokenname = getUrlParam('tk', tokenname);
    }
    return tokenname;
}

// 根据当前环境获取要跳转的mystudy的herf
export function getPaperStudyHerf() {
    if(window.location.host !== 'web.ewt360.com'){
        return "http://study.test.mistong.com/mystudy/#/";
    }

    return "https://study.ewt360.com/mystudy/#/";
}

export function getCookieUser() {
    let userId = '';
    let token = '';
    // userId 读取cookie标识位，准确性按数组顺序执行
    const query = ['token', 'ewt_user', 'user'];
    const cookie = getCookie();
    // 优先从cookie读取token信息
    for (const value of query) {
        if (cookie[value]) {
            token = cookie[value];
            break;
        }
    }
    // userId取值
    if (token.match('tk=')) {
        token = getUrlParam('tk', token);
    }
    userId = token.split('-')[0];
    if (!token) {
        // toLogin();
    }
    return {
        userId,
        token
    };
}


export const loadjs = (src, attr) => {
    if (!window.__loaded) {
        window.__loaded = {};
    }
    if (window.__loaded[src]) {
        return window.__loaded[src];
    }
    window.__loaded[src] = new Promise((resolve, reject) => {
        const element = document.createElement('script');
        document.body.appendChild(element);
        element.src = src;
        element.onload = () => {
            resolve(attr && window[attr]);
        };
        element.onerror = (e) => {
            reject(e);
        };
    });
    return window.__loaded[src];
};
