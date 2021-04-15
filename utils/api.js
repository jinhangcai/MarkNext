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
    getTopBanner: {
        method: 'get',
        url: `/api/oms/banner/front/getBanner`,
        // url: 'http://yapi.235.mistong.com/mock/658/api/oms/banner/front/getBanner',
        mockMethod: 'get',
        mockUrl: '/658/api/oms/banner/front/getBanner',
    },
    getTopRankList: {
        method: 'get',
        url: '/api/studyprod/home/hotCourseAndUpdateLesson',
        // url: 'http://yapi.235.mistong.com/mock/1181/api/studyprod/home/hotCourseAndUpdateLesson',
        mockMethod: 'get',
        mockUrl: '/1181/api/studyprod/home/hotCourseAndUpdateLesson',
    },
    getLessonCount: {
        method: 'get',
        // url: 'http://yapi.235.mistong.com/mock/1181/api/studyprod/course/lesson/count',
        url: '/api/studyprod/course/lesson/count',
        mockMethod: 'get',
        mockUrl: '/1181/api/studyprod/course/lesson/count',
    },
    getSubjectList: {
        method: 'get',
        url: '/api/studyprod/web/subject/list',
        mockMethod: 'get',
        mockUrl: '/1181/api/studyprod/web/subject/list',
    },
    getHotKeywordList: {
        method: 'get',
        // url: 'http://yapi.235.mistong.com/mock/1181/api/studyprod/search/hot/words',
        url: '/api/studyprod/search/hot/words',
        mockMethod: 'get',
        mockUrl: '/1181/api/studyprod/search/hot/words',
    },
};
export default generator(URLS);
