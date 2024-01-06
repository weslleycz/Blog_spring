import { Box, CardContent, CardMedia } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

type Props = {
  notionId: string;
  title: string;
  id: string;
};

export const CardNew = ({ notionId,title,id }: Props) => {
  const [img, setImg] = useState('');
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`https://notion-api.splitbee.io/v1/page/${notionId}`);
      setImg(Object.values(data)[0]?.value?.format.page_cover);
    })();
  }, []);
  return (
    <>
    <a href={`/post/${id}`}>
    <Box className={styles.container}>
        <CardMedia
          className={styles['image-container']}
          component="img"
          style={{ width: '270px', height: '150px' }}
          image={img}
          alt="News Image"
        />
        <CardContent>
          <a className={styles.link}>{title}</a>
        </CardContent>
      </Box>
    </a>
    </>
  );
};
