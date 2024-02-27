const url = `https://openapi.naver.com/v1/search/news.json?query=LG화학&display=10&start=1`;
const options = {
  method: 'GET',
  headers: {
    'X-Naver-Client-Id': 'rU1BGqPDYCKpVAtW30FM',
    'X-Naver-Client-Secret': 'cOAsPt0pi2',
  },
};
const result = fetch(url, options);
result.then(res => console.log(res));
