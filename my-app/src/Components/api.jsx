import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api';
const apiKey = '19476609-7641264ac12d7db32f779afed';

const fetchImagesWithQuery = (searchQuery, page = 1) => {
  return axios(
    `/?q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => response.data.hits);
};

export default { fetchImagesWithQuery };
