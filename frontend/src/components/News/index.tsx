import { Stack } from '@mui/material';
import { CardNew } from '../../components/CardNew';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { api } from '../../services/api';
import { IPost } from '../../@types/IPost';

export const News = () => {
  const [posts, setPost] = useState([]);
  const { data, isLoading, error, refetch } = useQuery(
    'getPost',
    async () => {
      try {
        const res = await api.get(`/posts`);
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
    {
      refetchOnWindowFocus: false,
      enabled: false,
    },
  );

  useEffect(() => {
    if (!data) {
      refetch();
    } else {
      setPost(data);
    }
  }, []);
  return (
    <>
      <Stack marginBottom={2} direction="row" spacing={2}>
        {posts.map((post: IPost) => (
          <CardNew key={post.id} notionId={post.notionId} />
        ))}
      </Stack>
    </>
  );
};
