import axios from "axios";

export const api = axios.create({
    baseURL: "https://api-rocket-movies-6w4s.onrender.com"
    // baseURL: "http://localhost:3333"
})