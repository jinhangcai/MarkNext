import Head from 'next/head'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import api  from '../../utils/api';
import styles from '../../styles/Home.module.css'
import Link from "next/link";
// 静态生成 getStaticProps =》
// getStaticProps 方法的作用是获取组件静态生成需要的数据。并通过 props 的方式将数据传递给组件。
// 该方法是一个异步函数，需要在组件内部进行导出。
// 在开发模式下， getStaticProps 每次进入页面都会触发
// 在生产模式下， getStaticProps 只会在构建的时候执行。
// 您应在以下情况下使用getStaticProps：
// 呈现页面所需的数据可在构建时在用户请求之前获得。
// 数据来自无头CMS。
// 数据可以被公共缓存（不是特定于用户的）。
// 该页面必须预渲染（对于SEO）并且必须非常快-getStaticProps生成HTML和JSON文件，CDN可以将它们都缓存以提高性能。

// 服务器端渲染 getServerSideProps =》
// 如果采用服务器端渲染，需要在组件中导出 getServerSideProps 方法
// 其中 getServerSideProps 还有个参数为 context.
// 开发模式与生产模式 每次进入页面 都会执行 getServerSideProps
export default function About(data) {
    const { data: name } = data;
    return (
        <div className={styles.container}>
            {name}
            <Link href="/">
                <a>Index Page</a>
            </Link>
        </div>
    )
}

// export const getServerSideProps: GetServerSideProps = async context => {
//     // ...
//     let data = '123'
//     console.log('getServerSideProps',data)
//     return {
//         props: {
//             data
//         }
//     }
// }
export const getStaticProps = async context => {
    // ...
    let data = '456'
    // const data1 = await api.getUserTimeRanking();
    return {
        props: {
            // data
        }
    }
}
// export const getStaticPaths: () => Promise<{ fallback: boolean }> = async () => {
//
//     // 调用外部 API 获取博文列表
//     let data = 'getStaticPaths'
//     // const res = await fetch('https://w.baidu.com/')
//     // console.log('res', res)
//     // const posts = await res.json()
//
//     // 根据博文列表生成所有需要预渲染的路径
//     // const paths = posts.map((post) => `/posts/${post.id}`)
//     // console.log('posts', posts)
//     // Promise.reject({})
//     // We'll pre-render only these paths at build time.
//     // { fallback: false } means other routes should 404.
//     return { paths: [], fallback: true }
//     // return {GetStaticPathsResult: false}
// }
