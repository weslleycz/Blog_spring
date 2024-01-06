import { Box, CardContent, CardMedia } from '@mui/material';
import styles from './styles.module.scss';

type Props = {
  notionId: string;
  title: string;
  id: string;
  cover: string;
};

export const CardNew = ({ notionId,title,id,cover }: Props) => {
  const limitedTitle = title.length > 25
  ? title.substr(0, 25) + '...'
  : title;

  return (
    <>
    <a href={`/post/${id}`}>
    <Box className={styles.container}>
        <CardMedia
          className={styles['image-container']}
          component="img"
          style={{ width: '270px', height: '150px' }}
          image={`data:image/png;base64,${cover}`}
          alt="News Image"
        />
        <CardContent>
          <a className={styles.link}>{limitedTitle}</a>
        </CardContent>
      </Box>
    </a>
    </>
  );
};
