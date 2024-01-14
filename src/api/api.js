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

export const searchImages = (q, page = 1, per_page = 10) => {
  console.log(page);
  return instance.get('/', {
    params: {
      page,
      q: q,
      per_page,
    },
  });
};
// export const searchImages = (q, page = 1) => {
//   // return instance.get(`/?q=${q}&_limit=6&_page=${_page}`)
//   return instance.get('/', {
//     params: {
//       q,
//       limit: 6,
//       page,
//     },
//   });
// };
