import { Box, Stack } from '@mui/material';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

type Props = {
  notionId: string;
  title: string;
  views: number;
  id: string;
};
export const AdminPost = ({ notionId, title, views,id }: Props) => {
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
    <Box marginTop={1}>
        <Stack direction="row" spacing={2}>
          <img width={'110px'} height={'90px'} src={img} />
          <Box>
            <p className={styles.title}>{title}</p>
            <p className={styles['subtitle']}>{views} visualizações</p>
          </Box>
        </Stack>
      </Box>
    </a>
    </>
  );
};
