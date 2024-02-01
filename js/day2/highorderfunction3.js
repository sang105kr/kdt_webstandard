const persons = [
  { name: '홍길동', age: 30, gender: '남' },
  { name: '홍길순', age: 20, gender: '여' },
  { name: '홍길남', age: 10, gender: '남' },
];
//1)나이 합을 구하시오. 
let sumOfage = 0;
persons.forEach( ele => sumOfage += ele.age);
console.log(sumOfage);

//2)남자는 몇명? 
const result = persons.filter((ele,idx,arr)=>ele.gender == '남');
console.log(result.length);

//3)최연소자의 이름은? 홍길동
const age = persons.map(ele=>ele.age).sort()[0];
console.log(age);
const name = persons.filter(ele=>ele.age == 10)[0].name;
console.log(name);
console.log('---')
//4)나이 오름차순으로 이름을 출력하시오. 홍길남,홍길순,홍길동
//오름차순
const result2 = persons.sort( (first,second) => first.age - second.age );
// console.log(result2);
result2.forEach(ele=>console.log(ele.name));
console.log('---')
//내림차순
const result3 = persons.sort((first, second) => second.age - first.age);
// console.log(result3);
result3.forEach(ele => console.log(ele.name));