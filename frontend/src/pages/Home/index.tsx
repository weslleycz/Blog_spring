import 'react-notion/src/styles.css';
// import 'prismjs/themes/prism-tomorrow.css';
import { Stack } from '@mui/material';
import { CardNew } from '../../components/CardNew';
import { Hero } from '../../components/Hero';

export const Home = () => {
  // const [blockMap, setBlockMap] = useState<BlockMapType>('');
  // useEffect(() => {
  //   (async () => {
  //     const { data } = await axios.get(
  //       `https://notion-api.splitbee.io/v1/page/Valida-o-de-dados-bbf8a49868d54affb4d483da52f18d06`,
  //     );
  //     console.log(data);

  //     setBlockMap(data);
  //   })();
  // }, []);
  return (
    <>
      {/* <NotionRenderer blockMap={blockMap} /> */}
      <Hero />
      <Stack marginBottom={2} direction="row" spacing={2}>
        <CardNew notionId="D-D-b45de061e3ec4d2b8e5e31a257a4ef2c"  />
      </Stack>
    </>
  );
};
