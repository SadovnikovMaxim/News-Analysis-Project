const API_URL = 'https://newsapi.org/v2/everything?';
const API_KEY = 'd6c0658268ae4ecd9c413914139bbfc7';
const TIME_FROM = 1000*60*60*24*7;
const DATE_TO = new Date().toISOString();
const DATE_FROM = new Date(Date.now() - TIME_FROM).toISOString();
const PAGE_SIZE = 100;

export const newsApiUrl = q => `${API_URL}q=${q}&apiKey=${API_KEY}&from=${DATE_FROM}&to=${DATE_TO}&pageSize=${PAGE_SIZE}`