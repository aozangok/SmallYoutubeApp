import axios from 'axios';

const KEY = 'AIzaSyDFJggM_39hwsVNOhNQ59Z_HPqHqqWSDc0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
