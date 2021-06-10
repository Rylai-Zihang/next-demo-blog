import React from 'react';
import {getPost, getPostIds} from "../../lib/post";
import {NextPage, NextPageContext} from "next";

type Props = {
    post: Post
}

const postShow: NextPage<Props> = (props) => {
    const { post } = props;
    console.log({post});
    return (
        <div>
            <h1>{post.title}</h1>
            <article dangerouslySetInnerHTML={ { __html: post.htmlContent } }>
            </article>
        </div>
    );
};

export const getStaticPaths = async() => {
    const idList =  await getPostIds();
    const paths = idList.map(id => ({ params: { id } }));
    return {
        paths,
        fallback: false
    }
};

export const getStaticProps = async (x: any) => {
    const id = x.params.id;
    const post = await getPost(id);
    return {
        props: {
            post: JSON.parse(post)
        }
    }
};

export default postShow