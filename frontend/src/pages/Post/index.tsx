import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';

export const Post = () => {
  const params = useParams();
  const [post, setPost] = useState();
  useEffect(() => {
    (async () => {
      await api.get(`/posts/read/${params['*']}`);
      try {
        const res = await api.get(`/posts/${params['*']}`);
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return <>
  <Container maxWidth="lg">
    jkkjjkk
  </Container>
  </>;
};
