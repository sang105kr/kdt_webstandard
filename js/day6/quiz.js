//Array.prototype.reduce() 활용하기

const numbers = [3, 2, 3, 6, 1, 5];
//문1) 배열 요소의 평균을 구하시오
{
  const result = numbers.reduce(
    (acc,curr,idx,arr)=>(idx != arr.length-1) ? acc + curr : (acc + curr)/arr.length      
    ,0);
  console.log(result);

}
//문2) 배열 요소중 최대값 구하기
{
  const result = numbers.reduce((acc,curr)=>(acc > curr) ? acc : curr, 0);
  console.log(result);
}

const fruits = ['banana','apple','orange','orange','apple'];
//문3) 과일의 갯수를 객체 리터럴로 출력하세요 ex) {banana:1,apple:2,orange:2}
{
  const obj = {};
  fruits.forEach(ele=>{
    if(ele in obj){
      obj[ele]++;
    }else{
      obj[ele] = 1;
    }
  });
  console.log(obj);
}
{
  const result = fruits.reduce(
    (acc,curr)=>{
      if( curr in acc ){
        acc[curr]++;
      }else{
        acc[curr] = 1;
      }
      return acc;
    },
    {}
  );
  console.log(result);
}
{
  const result = fruits.reduce((acc, curr) => {
    acc[curr] = ( acc[curr] || 0 ) + 1;
    return acc;
  }, {});
  console.log(result);
}