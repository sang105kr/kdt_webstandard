// Array.prototype.splice()
{
  const arr = [1,2,3,4,5];
  console.log(arr.splice(2));  //시작인덱스부터 끝까지요소를 반환하고 원래배열의 요소를 제거
  console.log(arr);
}
console.log('---');
{
  const arr = [1, 2, 3, 4, 5];
  console.log(arr.splice(2,2));   //시작인텍스부터, 2개 제거
  console.log(arr);
}
console.log('---');
{
  const arr = [1, 2, 3, 4, 5];
  console.log(arr.splice(2, 2, 10)); //시작인텍스부터, 2개 제거하고 제거된 위치에 10 삽입
  console.log(arr);
}
console.log('---');
{
  const arr = [1, 2, 3, 4, 5];
  console.log(arr.splice(2, 2, 10, 11)); //시작인텍스부터, 2개 제거하고 제거된 위치에 10,11 삽입
  console.log(arr);
}