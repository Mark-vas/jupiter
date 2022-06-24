import axios from "axios";

export const api = {
  async getImages() {
    try {
      const res = await axios.get(`https://rickandmortyapi.com/api/character`);
      return res.data;
    } catch (err) {
      return err.message;
    }
  },
  async loadImages(num) {
    try {
      const res = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${num}`
      );
      return res.data;
    } catch (err) {
      return err.message;
    }
  },
};
