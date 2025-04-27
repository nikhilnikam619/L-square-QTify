
import axios from 'axios'

const config="https://qtify-backend-labs.crio.do"


export const fetchTopAlbums = async () => {
  try {
    const response = await axios.get(`${config}/albums/top`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const fetchNewAlbums = async () => {
  try {
    const response = await axios.get(`${config}/albums/new`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const fetchSongs = async () => {
  try {
    const response = await axios.get(`${config}/songs`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const fetchFilters = async () => {
  try {
    const response = await axios.get(`${config}/genres`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};