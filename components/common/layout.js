import Link from 'next/link';
import Head from 'next/head';

export default ({ children, title = 'Next.js / Express App' }) => (
    <div>
        <Head>
            <title>{ title }</title>
            <meta charSet='utf-8' />
            <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name="description" content="你的页面描述内容" />
            <meta name='defaultLanguage' content='fr' />
            <meta name='availableLanguages' content='fr, en' />
            <link rel="stylesheet" href="//web.ewt360.com/common/antd/prod/3.26.18/antd.min.css" />
            <script src="//web.ewt360.com/common/classnames.min.js"></script>
            <script src="//web.ewt360.com/common/moment/prod/2.27.0/moment.min.js"></script>
            <script src="//web.ewt360.com/common/antd/prod/3.26.18/antd.min.js"></script>
        </Head>

        { children }
        <div className='container'>
            <footer className='footer'>
                &copy; 2021-mst - mluberry
            </footer>
        </div>
    </div>
);

