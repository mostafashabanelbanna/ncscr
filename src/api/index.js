import axios from "axios";

const API = axios.create({
  baseURL: "http://41.128.217.181:10083/api/api",
  // baseURL: "http://41.128.217.181:10089/api", //41.128.217.182:10086/api",
  //41.128.217.182:10086/api",
  headers: {
    "Content-type": "application/json",
  },
});

export const fetchNews = (pageNumber, keywords, pageSize) =>
  API.post(`/NewsAPI/Search/${pageNumber}/${pageSize}`, keywords);

export const resultCount = (keywords) =>
  API.post(`/NewsAPI/GetResultCount`, keywords);

export const fetchNewsItem = (id) => API.get(`/NewsAPI/GetById?id=${id}`);
