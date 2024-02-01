// 객체 리터럴에 속성을 동적으로 추가 제거 할 수 있다.
//1) 프로퍼티 추가
const obj = {};
obj.name = '홍길동';
console.log(obj);
obj.age = 30;
console.log(obj);
obj.smile = function(){
  console.log('웃다');
}
obj.eat = function(){
  console.log('먹다');
}
console.log(obj);
//2) 프로퍼티 제거
delete obj.name;
console.log(obj);