
const url = 'http://apis.data.go.kr/B551011/KorService1/searchFestival1';
const MobileOS = 'ETC';
const MobileApp = 'AppTest';
const _type = 'json';
const eventStartDate = '20240101'; 
const servicekey =
  'CryKKi6HaVVnP0WXU4sIp8dcrZgn2wui0UPEU%2BeivronhsULZ8SFW3qxmqgGmyqgpj59gqzMmd8H%2BhWEzjcvBw%3D%3D';

const url2 =
  'https://apis.data.go.kr/B551011/KorService1/searchFestival1?serviceKey=CryKKi6HaVVnP0WXU4sIp8dcrZgn2wui0UPEU%2BeivronhsULZ8SFW3qxmqgGmyqgpj59gqzMmd8H%2BhWEzjcvBw%3D%3D&MobileOS=ETC&MobileApp=AppTest&_type=json&eventStartDate=20240101&numOfRows=100&pageNo=1';
fetch(url2)
  .then(res => res.json())  // json포맷의 문자열을 js객체로 변환
  .then(json =>json.response.body.items.item)
  .then(item=>{
    item.forEach(ele=>console.log(ele.eventstartdate,ele.title));
  });