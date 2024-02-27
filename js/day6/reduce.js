{
  const arr = [1,2,3];
  // console.log(typeof arr);
  // console.log(Object.prototype.toString.call(arr));
  const result = arr.reduce((acc,ele,idx, self)=>{
    console.log(acc, ele, idx, self);
    return acc + ele;
  });
  console.log(result);
}
console.log('--------')
{
  const arr = [1, 2, 3];
  // console.log(typeof arr);
  // console.log(Object.prototype.toString.call(arr));
  const result = arr.reduce((acc, ele, idx, self) => {
    console.log(acc, ele, idx, self);
    return acc + ele;
  },10);
  console.log(result);
}

{
  const arr = ['a','b','c'];

  const result = arr.reduce((acc,ele)=> acc + ele);

  console.log(result);
}
{
  const people = [
    { name: 'John', age: 21 },
    { name: 'Jane', age: 24 },
    { name: 'Smith', age: 27 },
    { name: 'Doe', age: 30 },
  ];

  console.log(people.map(ele=>ele.age))  // [21,24,27,30]
  const sumOfage = people.map(ele=>ele.age).reduce((acc,ele)=>acc+ele);
  console.log(`나이총합은 ${sumOfage} 입니다.`);

}
{
  const people = [
    { name: 'John', age: 21 },
    { name: 'Jane', age: 24 },
    { name: 'Smith', age: 27 },
    { name: 'Doe', age: 30 },
  ];

  let sum = 0;
  for(let ele of people){
    sum += ele.age;
  }
  console.log(`나이총합은 ${sum} 입니다.`);
}