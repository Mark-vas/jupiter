import axios from "axios";

export const api = {
  async loadImages(num) {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${num}`
    );
    return res.data;
  },
  async getImages() {
    const res = await axios.get(`https://rickandmortyapi.com/api/character`);
    return res.data;
  },
};
