import { Box, Stack } from '@mui/material';
import styles from './styles.module.scss';

type Props = {
  notionId: string;
  title: string;
  views: number;
  id: string;
  cover: string;
};
export const AdminPost = ({ notionId, title, views, id, cover }: Props) => {
  return (
    <>
      <a href={`/post/${id}`}>
        <Box marginTop={1}>
          <Stack direction="row" spacing={2}>
            <img width={'110px'} height={'90px'} src={`data:image/png;base64,${cover}`} />
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
