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
    getUserTimeRanking: { // 看课统计
        method: 'post',
        // url: '/api/studyprod/lessonCenter/getUserTimeRanking',
        url:'https://www.ewt360.com/HomeNew/GetTopFansArticle',
        mockMethod: 'get',
        mockUrl: 'http://yapi.235.mistong.com/mock/1181/api/studyprod/lessonCenter/getUserTimeRanking',
    },
    ajaxgetuser: { // 看课统计
        method: 'get',
        // url: '/api/studyprod/lessonCenter/getUserTimeRanking',
        url:'http://web.test.mistong.com/api/usercenter/account/password/rule',
        mockMethod: 'get',
        mockUrl: 'http://yapi.235.mistong.com/mock/1181/api/studyprod/lessonCenter/getUserTimeRanking',
    }
};
export default generator(URLS);
