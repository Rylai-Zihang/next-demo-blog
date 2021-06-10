import { promises as fsPromise } from "fs"
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import marked from "marked";

const markdownDir = path.join(process.cwd(), 'markdown');

const getPosts = async() => {
    const fileNames  = await fsPromise.readdir(markdownDir);
    return fileNames.map((fileName) => {
        const fullPath = path.join(markdownDir, fileName);
        const id = fileName.replace(/\.md$/g, "");
        const text = fs.readFileSync(fullPath,  'utf-8');
        const { data: { title, date }, content } = matter(text);
        return {
            id,
            date,
            title,
            content
        }
    });
};

const getPost = async(id:string) => {
    const fileName = id + '.md';
    const fullPath = path.join(markdownDir, fileName);
    const text = fs.readFileSync(fullPath,  'utf-8');
    const { data: { title, date }, content } = matter(text);
    const htmlContent = marked(content);
    return JSON.stringify({
        id,
        date,
        title,
        content,
        htmlContent
    })
};

const getPostIds = async() => {
    const fileNames  = await fsPromise.readdir(markdownDir);
    return fileNames.map((fileName) => {
        const fullPath = path.join(markdownDir, fileName);
        const id = fileName.replace(/\.md$/g, "");
        return id;
    })
};



export {
    getPosts,
    getPost,
    getPostIds
}