import axios from "axios";

const instanse = axios.create({
  baseURL: "https://tiktok-clone-back.vercel.app",
});

export default instanse;
