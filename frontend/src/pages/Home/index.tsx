import 'react-notion/src/styles.css';
// import 'prismjs/themes/prism-tomorrow.css';
import { Stack } from '@mui/material';
import { CardNew } from '../../components/CardNew';
import { Hero } from '../../components/Hero';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useQuery } from 'react-query';

export const Home = () => {
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
      {/* <NotionRenderer blockMap={blockMap} /> */}
      <Hero />
      <Stack marginBottom={2} direction="row" spacing={2}>
        <CardNew notionId="D-D-b45de061e3ec4d2b8e5e31a257a4ef2c" />
      </Stack>
    </>
  );
};
