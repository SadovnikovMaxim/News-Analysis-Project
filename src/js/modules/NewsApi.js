import { newsApiUrl } from "../constants/url-api-news";

export class NewsApi {
  getNews(request) {
    return fetch(newsApiUrl(request)).then((res) => {
      if (res.ok) return res.json();
      return Promise.reject(`Не удалось получить ${newsApiUrl(request)}, получили ошибку ${res.status}`);
    });
  }
}
