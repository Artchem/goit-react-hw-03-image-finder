import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.headers.common['key'] = '38837496-e09cca1b216ed759136fb60be';
const API_KEY = '38837496-e09cca1b216ed759136fb60be';
const params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 12,
};
export async function fetchPixabay(searchText, page = 1) {
  const resp = await axios.get(`?q=${searchText}&page=${page}`, { params });
  const data = await resp.data;
  console.log(data);
  return data;
}
