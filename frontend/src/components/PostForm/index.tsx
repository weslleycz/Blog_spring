import { Box, Button, Divider, Modal, TextField } from '@mui/material';
import { useState } from 'react';
import { api } from '../../services/api';

type Props = {
  setReloader: any;
  reloader: number;
};

export const PostForm = ({ setReloader, reloader }: Props) => {
  const [open, setOpen] = useState(false);
  const [imageBase64, setImageBase64] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    url: '',
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      await api.post('/posts', {
        notionId: formData.url.replace('https://www.notion.so/', ''),
        date: String(Date.now()),
        title: formData.title,
        cover: imageBase64,
      });
      setFormData({
        title: '',
        url: '',
      });
      setImageBase64('');
    } catch (error) {
      console.log(error);
    }
    const reloaderData = reloader + 1;
    setReloader(reloaderData);
    handleClose();
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader() as any;

    reader.onload = () => {
      setImageBase64(reader.result.split(',')[1]);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const styles = {
    modalContainer: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      padding: '1.5%',
      borderRadius: '8px',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
      maxWidth: '400px',
      width: '100%',
    },
  };

  return (
    <>
      <Box>
        <Button onClick={handleOpen} variant="text">
          Adicionar postagem
        </Button>
      </Box>

      <Modal open={open} onClose={handleClose}>
        <div style={styles.modalContainer}>
          <Box p={2}>
            <h2>Criar Nova Postagem</h2>
          </Box>
          <Divider />
          <form>
            <TextField
              label="Titulo"
              name="title"
              value={formData.title}
              onChange={handleChange}
              sx={{ marginBottom: 1.5 }}
              required
              fullWidth
            />
            <TextField
              label="URL"
              required
              name="url"
              value={formData.url}
              onChange={handleChange}
              sx={{ marginBottom: 1.5 }}
              fullWidth
            />
            <input type="file" onChange={handleImageChange} />
            <Button sx={{ marginTop: 2 }} fullWidth variant="contained" color="primary" onClick={handleSubmit}>
              Criar
            </Button>
          </form>
        </div>
      </Modal>
    </>
  );
};
