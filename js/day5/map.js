{
  const arr = [1,2,3];
  const result = arr.map((ele,idx,arr)=>ele*3);
  console.log(result);
}
{

  const persons = [
    { name: '홍길동', age: 30 },
    { name: '홍길순', age: 20 },
    { name: '홍길남', age: 40 }
  ];

  const ageOfPerson = persons.map(ele=>ele.age);
  console.log(ageOfPerson);
  const nameOfPerson = persons.map(ele=>ele.name);
  console.log(nameOfPerson);

}