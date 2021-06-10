// 全局配置
import Head from "next/dist/next-server/lib/head"
import "styles/global.scss"

export default function App({ Component, pageProps }) {
    return <div className="aaa">
        <Head>
            <title>我的博客</title>
            <link rel="icon" href="/favicon.ico"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,minimum-scale=1.0,user-scalable=0" />
        </Head>
        <Component {...pageProps}/>
    </div>
}