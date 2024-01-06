import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import { BlockMapType, NotionRenderer } from 'react-notion';

export const Post = () => {
  const params = useParams();
  const [post, setPost] = useState();
  const [blockMap, setBlockMap] = useState<BlockMapType>('');

  useEffect(() => {
    (async () => {
      await api.get(`/posts/read/${params['*']}`);
      try {
        const res = await api.get(`/posts/${params['*']}`);
        console.log(res.data);
        setPost(res.data);
        const data = await fetch(`https://notion-api.splitbee.io/v1/page/${res.data.notionId}`);
        setBlockMap(await data.json());
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <Container sx={{marginTop:2}} maxWidth="md">
        <NotionRenderer blockMap={blockMap} />
      </Container>
    </>
  );
};
