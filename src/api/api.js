import axios from 'axios';

export const getAllImages = () => {
  return instance.get('/');
};
const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '40873711-279b17552f71bebdec6439352',
    image_type: 'photo',
    orientation: 'horizontal',
  },
});

export const searchImages = (q, page = 1, per_page = 12) => {
  return instance.get('/', {
    params: {
      page,
      q: q,
      per_page,
    },
  });
};
