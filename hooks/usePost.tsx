import { useEffect, useState } from 'react';
import axios from 'axios';

type Post = {
    id: string,
    date: string,
    title: string
}

export const usePosts = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        setIsLoading(true);
        axios.get('/api/v1/posts').then(response => {
            const data = response.data;
            if(data.length === 0) {
                setIsEmpty(false)
            } else {
                setPosts(data);
            }
            setIsLoading(false);
        }, () => {
            setIsLoading(false);
        })
    }, []);
    return { isEmpty, isLoading, posts };
};