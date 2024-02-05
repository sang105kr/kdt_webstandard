{
  //유니코드 확인하기 
  const ch = ['0','9','a','z','A','Z','가','ㅎ'];
  ch.forEach(ele=>console.log(ele.charCodeAt(0)));

  const arr = [3,13,1,11,2];
  //정렬방법을 제공하지 않으면 기본적으로 유니코드 크기로 정렬함
  console.log(arr.sort());

  //오름차순
  console.log(arr.sort((first,second)=>{return first - second}));
  //내림차순
  console.log(arr.sort((first, second) => {return second - first}),
  );
}
{
  const persons = [
    { name: '홍길동', age: 30, gender: '남' },
    { name: '홍길순', age: 20, gender: '여' },
    { name: '홍길순2', age: 30, gender: '여' },
    { name: '홍길남', age: 40, gender: '남' },
  ];
  //정렬전
  console.log(persons);

  //나이 오름차순으로 배열 요소를 정렬
  persons.sort((first,second)=>first.age - second.age); //오름차순
  console.log(persons);

  //나이 내림차순으로 배열 요소를 정렬
  persons.sort((first,second)=>second.age - first.age); //내림차순
  console.log(persons);  
}


