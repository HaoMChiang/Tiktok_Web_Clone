import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-web-clone-backend.herokuapp.com/",
});

export default instance;
