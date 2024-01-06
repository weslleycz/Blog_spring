import { useEffect, useState } from 'react';
import { AdminPost } from '../AdminPost';
import { api } from '../../services/api';
import { IPost } from '../../@types/IPost';

type Props = {
  reloader: number;
};

export const Posts = ({ reloader }: Props) => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await api.get(`/posts`);
      setPost(res.data);
    })();
  }, [reloader]);
  return (
    <>
      {posts.map((post: IPost) => (
        <AdminPost id={post.id} views={post.views} title={post.title} key={post.id} notionId={post.notionId} />
      ))}
    </>
  );
};
