import React from "react"
import Link from "next/link"
import Head from "next/head"
import styles from "styles/first-post.module.css"
import {s} from "styles/styles.js"
import image from "assets/images/API.png"
console.log({ image })

export default function FirstPost() {
    return (
        <React.Fragment>
            <Head>
                <title>第一篇文章</title>
            </Head>
            <div>
                <p className="title">First post</p>
                <Link href="/"><a >回到首页</a></Link>
            </div>
            <div className={styles.wrapper}>
                文章内容
            </div>
            {s}
            <img src={image} alt=""/>
        </React.Fragment>
    )
}