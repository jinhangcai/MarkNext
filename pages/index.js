import Head from 'next/head'
import Link from 'next/link'
import Image  from 'next/image'
import api  from '../utils/api';
import Layout from '../components/common/layout';
import React, { Component, useState, useEffect, createContext, useContext, useReducer } from 'react';
import ModuleHeader from '../components/EwtSite/ModuleHeader'
import BannerModule from '../components/EwtSite/BannerModule'
import LiveItem from '../components/EwtSite/LiveItem'
import TeacherBanner from '../components/EwtSite/TeacherBanner'
import styles from './index.module.scss'
import { getCookie, removeCookie } from '@ewt/eutils';
// "dev": "next dev",
// 静态生成 getStaticProps =》
// getStaticProps 方法的作用是获取组件静态生成需要的数据。并通过 props 的方式将数据传递给组件。
// 该方法是一个异步函数，需要在组件内部进行导出。
// 在开发模式下， getStaticProps 改为在每个请求上运行。
// 在生产模式下， getStaticProps 只会在构建的时候执行，而每次访问 /list 页面时不会再执行 getStaticProps 方法。
// getServerSideProps:服务端渲染 每次页面加载都会触发 仅在服务器端运行，而从不在浏览器上运行。 结果不能由CDN缓存。
// ps: getStaticProps与getServerSideProps 不能同时存在
const DataList1 = () => {
    console.log(1)
}
const Home = (data) => {
    // const [liveBanner, setliveBanner] = useState({});
    // setliveBanner(data)
    // const { liveBanner } = this.state;
    const { liveList = [], title: liveTitle, icon: liveIcon, titleJumpUrl: liveUrl } = data.data;
    const bannerModuleList = data.ModuleList;
    const { teacherList = [], title: teacherTitle, icon: teacherIcon, titleJumpUrl: teacherUrl } = data.TeacherBanner;
    const DataList = async () => {
        data = await api.getHomeLiveBanner({});
        console.log('data', data)
    }

    return (
        <Layout title={ 'Next.js + Express' }>
            <div className={styles.home_page}>
                <div className={styles.W1200}>
                    <a onClick={() => { DataList() }}>123</a>
                    <div>
                        <ModuleHeader icon={liveIcon}
                                      hasMore={!!liveUrl}
                                      hasMoreUrl={liveUrl}>
                            {liveTitle}
                        </ModuleHeader>
                        <div className={styles.live_list}>
                            {liveList && liveList.length > 0 && liveList.map(liveItem => {
                                const { liveId, bgImg, presentPrice, originalPrice, entries, startTime, signUp: isSignUp, liveStatus, url } = liveItem;
                                return <LiveItem key={liveId}
                                                 cover={bgImg}
                                                 price={presentPrice}
                                                 originalPrice={originalPrice}
                                                 signUpCount={entries}
                                                 startTime={startTime}
                                                 url={url}
                                                 isSignUp={isSignUp}
                                                 liveStatus={liveStatus}
                                                 className={styles.home_page_live_item}
                                />
                            })}
                        </div>
                    </div>
                    {bannerModuleList && bannerModuleList.length > 0 && bannerModuleList.map((moduleData, moduleIndex) => (
                        <BannerModule data={moduleData} key={moduleIndex}/>
                    ))}
                    <div>
                        <ModuleHeader icon={teacherIcon}
                                      hasMore={!!teacherUrl}
                                      hasMoreUrl={teacherUrl}>
                            {teacherTitle}
                        </ModuleHeader>
                        <TeacherBanner teacherList={teacherList || []}/>
                    </div>
                </div>
            </div>
        </Layout>
        )
}
// 服务端渲染 每次页面加载都会触发 仅在服务器端运行，而从不在浏览器上运行。 结果不能由CDN缓存。
export async function getServerSideProps (content) {
  let data = '';
  let ModuleList = '';
  let TeacherBanner = '';
  // console.log('context.query', content)
  // const name = cookies(content)
  // 规则
  // 1：服务端渲染 请求接口 第一个入参必须是content  第二个入参是需要的对象入参 就算不需要入参 也要传一个空对象 以保证是服务端渲染接口
  // 2: 客户端渲染 入参是一个对象  是否需要入参都可
  // const { res } =  content;
  // removeCookies(content, 'token', { 'Domain': '.mistong.com' })
  // console.log('content', content.req.cookies, typeof window !== 'undefined', getCookies(content,'token'))
  try {
      data = await api.getHomeLiveBanner(content, {});
      ModuleList = await api.getHomeBannerModuleList(content, {});
      TeacherBanner = await api.getHomeTeacherBanner(content, {});
      console.log('this', DataList1())
    // const data1 = await api.UserInfo(content, {});
    // const data1 = await api.pageClassWarning(content, { classId: "1000198",
    //   evaluationTaskId: "1364450829645512705",
    //   gradeId: "2023",
    //   pageIndex: 1,
    //   pageSize: 10,
    //   sort: 1,
    //   type: 1,
    //   userName: ""});
    // console.log('data11', data1)
  } catch (e) {
    console.log(e)
  }
    return {
        props: {
            data,
            ModuleList,
            TeacherBanner
        }
    }
}
// 在构建时调用  在用户请求之前预先渲染此页面   可以cdn缓存
// export async function getStaticProps({ params }) {
//   // params 包含此片博文的 `id` 信息。
//   // 如果路由是 /posts/1，那么 params.id 就是 1
//   // const res = await fetch(`https://.../posts/${params.id}`)
//   // const post = await res.json()
//   console.log('在构建时也会被调用', process.env.PROXY_ENV)
//   // 通过 props 参数向页面传递博文的数据
//   return { props: { name:'abc'  } }
// }
// export async function getStaticPaths({ params }) {
//   console.log('params', params)
//   return {
//     paths: [
//       { params: {  } } // See the "paths" section below
//     ],
//     fallback: true // See the "fallback" section below
//   };
// }
export default Home;
