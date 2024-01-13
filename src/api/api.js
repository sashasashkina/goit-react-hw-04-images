import axios from 'axios';

export const getAllImages = () => {
  return instance.get('/');
};
const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '40873711-279b17552f71bebdec6439352',
  },
});
