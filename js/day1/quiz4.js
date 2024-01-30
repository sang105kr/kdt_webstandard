// 아래 문제를 함수 선언문, 함수 표현식, 화살표 함수로 정의하고 호출되어 실행되는 코드를 작성해 보이시오.
// 문제 4)
// 팩토리얼 구하는 함수 만들기 factorial이라는 이름의 함수를 정의하되, 
// 내부에서 재귀적으로 자신을 호출하는 로직을 표현식으로 정의해보세요. 
// 이 함수는 하나의 숫자를 매개변수로 받아 그 숫자의 팩토리얼 값을 반환해야 합니다.
// 함수선언문
{
  function factorial(n){
    if( n== 0 || n ==1 ){
      return 1;
    }else{
      return n * factorial(n-1);
    }
  }
  console.log(factorial(4));
}
// 함수표현식
{
  const factorial = function(n) {
    if (n == 0 || n == 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  console.log(factorial(4));
}
// 화살표함수 : 매개변수가 1개인경우 소괄호()생략가능
{
  const factorial = n => {
    if (n == 0 || n == 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  };
  console.log(factorial(4));
}
