const persons = [
  { name: '홍길동', age: 30, gender: '남' },
  { name: '홍길순', age: 20, gender: '여' },
  { name: '홍길순2', age: 30, gender: '여' },
  { name: '홍길남', age: 40, gender: '남' },
];

//문1) persons배열에서 남성 이름을 나이 내림차순으로 콘솔에 출력해 보이시오. // 홍길남, 홍길동

persons.filter(person=>person.gender === '남')
       .sort((first,second)=>second.age-first.age)
       .forEach(person=>console.log(person.name));