import Head from 'next/head'
import Link from 'next/link'
import { getCookies, removeCookies } from 'cookies-next';
import api  from '../utils/api';
import styles from '../styles/Home.module.css'
import { getCookie, removeCookie } from '@ewt/eutils';
// "dev": "next dev",
// 静态生成 getStaticProps =》
// getStaticProps 方法的作用是获取组件静态生成需要的数据。并通过 props 的方式将数据传递给组件。
// 该方法是一个异步函数，需要在组件内部进行导出。
// 在开发模式下， getStaticProps 改为在每个请求上运行。
// 在生产模式下， getStaticProps 只会在构建的时候执行，而每次访问 /list 页面时不会再执行 getStaticProps 方法。
export default function Home(data) {
  const { data: name } = data;
  const test = async () => {
    console.log(123);
    const data1 = await api.ajaxgetuser({type: 1});
    console.log(data1);
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0,minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link   href={{
          pathname: '/About/About',
          query: { name: 'test' },
        }} >
          <a>About Page</a>
        </Link>
        <Link   href={{
          pathname: '/List/List',
          query: { name: 'test' },
        }} >
          <a>About List</a>
        </Link>
        <h1 className={styles.title} onClick={ () => { test(); }}>
          Welcome to Next.js! {name}
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
export async function getServerSideProps (content) {
  let data = 'abc123'
  // 规则
  // 1：服务端渲染 请求接口 第一个入参必须是content  第二个入参是需要的对象入参 就算不需要入参 也要传一个空对象 以保证是服务端渲染接口
  // 2: 客户端渲染 入参是一个对象  是否需要入参都可
  // const { res } =  content;
  // removeCookies(content, 'token', { 'Domain': '.mistong.com' })
  // console.log('content', content.req.cookies, typeof window !== 'undefined', getCookies(content,'token'))
  // const data1 = await api.getUserTimeRanking(content, {test: 1});
  // console.log('content', data1)
  return {
    props: {
      data
    }
  }
}
