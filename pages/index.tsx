import Link from "next/link";
import {GetServerSideProps, NextPage, NextPageContext} from "next";
import { UAParser } from "ua-parser-js"

type Props = {
    browser: {
        name: string
    }
}
const Index:NextPage<Props> = (props) => {
    const { browser } = props;
    console.log(browser);
    return (
        <div>
            {/*<h1>标题</h1>*/}
            {/*<p>段落</p>*/}
            {/*<Link href="/posts">*/}
            {/*    <a>posts</a>*/}
            {/*</Link>*/}
            <h1>欢迎访问</h1>
            <p>你使用的浏览器: { browser.name }</p>
        </div>
    )
}

export default Index

export const getServerSideProps = async (context: NextPageContext) => {
    // @ts-ignore
    const ua = context.req.headers["user-agent"];
    const result = new UAParser(ua).getResult();
    return {
        props: {
            browser: result.browser
        }
    }
};
