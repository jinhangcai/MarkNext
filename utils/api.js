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
        url:'/api/HomeNew/GetTopFansArticle',
        mockMethod: 'get',
        mockUrl: 'http://yapi.235.mistong.com/mock/1181/api/studyprod/lessonCenter/getUserTimeRanking',
    },
    ajaxgetuser: { // 看课统计
        method: 'get',
        // url: '/api/studyprod/lessonCenter/getUserTimeRanking',
        url:'/api/usercenter/account/password/rule',
        mockMethod: 'get',
        mockUrl: 'http://yapi.235.mistong.com/mock/1181/api/studyprod/lessonCenter/getUserTimeRanking',
    },
    pageClassWarning: { // 查询班级测评报告
        method: 'post',
        // url: 'api/studyprod/lessonCenter/getYesterdayWatchData',
        url: '/api/psychology/mentalHealthReport/pageClassWarning',
        mockMethod: 'post',
        mockUrl: 'http://yapi.235.mistong.com/mock/1199/mentalHealthReport/pageClassWarning',
    },
    getEvaluationQuestion: { // 获取测评题目
        method: 'get',
        // url: 'api/studyprod/lessonCenter/getYesterdayWatchData',
        url:'/api/psychology/evaluationAnswer/getEvaluationQuestion',
        mockMethod: 'get',
        mockUrl: 'http://yapi.235.mistong.com/mock/1199/evaluationAnswer/getEvaluationQuestion',
    },
    UserInfo: { // 获取测评题目
        method: 'get',
        // url: 'api/studyprod/lessonCenter/getYesterdayWatchData',
        url:'/api/usercenter/user/info',
        mockMethod: 'get',
        mockUrl: 'http://yapi.235.mistong.com/mock/1199/evaluationAnswer/getEvaluationQuestion',
    },
};
export default generator(URLS);
