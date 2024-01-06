import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { IPost } from '../../@types/IPost';
import { CardNew } from '../../components/CardNew';
import { api } from '../../services/api';

export const News = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await api.get(`/posts`);
      setPost(res.data);
    })();
  }, []);
  return (
    <>
      <Stack marginBottom={2} direction="row" spacing={2}>
        {posts.map((post: IPost) => (
          <CardNew id={post.id}  title={post.title} key={post.id} notionId={post.notionId} />
        ))}
      </Stack>
    </>
  );
};
