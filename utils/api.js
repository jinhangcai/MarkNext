import { generator } from './apiGenerator'
// let hostname = 'web.test.mistong.com';
// if (location.host.indexOf('ewt360.com') > -1) {
//     hostname = 'web.mistong.com'
// }
// let print = 'pst.test.mistong.com'
// if (location.host.indexOf('ewt360.com') > -1) {
//     print = 'pst.ewt360.com'
// }
const URLS = {
    getHomeLiveBanner: {
        method: 'get',
        url: '/api/studyprod/home/hotLive',
        // url: 'http://yapi.235.mistong.com/mock/1181/api/studyprod/home/hotLive',
        mockMethod: 'get',
        mockUrl: '/1181/api/studyprod/home/hotLive',
    },
    getHomeBannerModuleList: {
        method: 'get',
        url: '/api/studyprod/home/weekAndLiteracy',
        // url: 'http://yapi.235.mistong.com/mock/1181/api/studyprod/home/weekAndLiteracy',
        mockMethod: 'get',
        mockUrl: '/1181/api/studyprod/home/weekAndLiteracy',
    },
    getHomeTeacherBanner: {
        method: 'get',
        url: '/api/studyprod/home/famousTeacher',
        // url: 'http://yapi.235.mistong.com/mock/1181/api/studyprod/home/famousTeacher',
        mockMethod: 'get',
        mockUrl: '/1181/api/studyprod/home/famousTeacher',
    },
};
export default generator(URLS);
