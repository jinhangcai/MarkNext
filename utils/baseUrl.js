function baseUrl() {
    const envUrl = process.env.BASE_ENV;
    let url = 'http://gateway.ewt360.com';
    if (envUrl === 'mock') {
        url = 'http://yapi.235.mistong.com/mock'
    } else if ( envUrl === 'dev') {
        url = 'http://gateway.test.mistong.com'
    } else if (envUrl === 'prod') {
        url = 'http://gateway.ewt360.com'
    }
    return url;
}

export default baseUrl();
