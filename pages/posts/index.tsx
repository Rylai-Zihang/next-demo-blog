import { NextPage } from "next";
import * as React from "react";
import {usePosts} from "../../hooks/usePost";
import {getPosts} from "../../lib/post";
import Link from "next/link";

type Props = {
    posts: Post[]
};

let PostsIndex: NextPage<Props>;
PostsIndex = (props: Props) => {
    // const { isLoading, isEmpty, posts } = usePosts();
    const { posts } = props;
    return (
        <div>
            <h1>文章列表</h1>
            {
                posts.map(p =>
                    <div key={p.id}>
                        {p.title}
                        <Link href={`/posts/${p.id}`}>
                            <a>{p.id}</a>
                        </Link>
                    </div>)
            }
            {/*{isLoading ? <div>加载中</div> :*/}
            {/*    isEmpty ? <div>么有文章</div>:*/}
            {/*        posts.map(p =>*/}
            {/*            <div key={p.id}>*/}
            {/*                {p.title}*/}
            {/*            </div>)*/}
            {/*}*/}
        </div>
    )
};

export default PostsIndex

export const getStaticProps = async () => {
    const posts = await getPosts();
    return {
        props: {
            posts: JSON.parse(JSON.stringify(posts))
        }
    }
};