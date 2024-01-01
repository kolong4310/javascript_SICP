//1.2함수화 과정
//함수는 계산적 과정의 국소전개(local evolution : 지역적 전개)에 관한 패턴이다
//함수는 과정의 각 단계(stage)기 그 이전 단계를 기반으로 어떻게 구축되는지를 명시


//1.2.1선형 재귀와 반복

//재귀적과정
function factorial(n){
    return  n === 1 
            ? 1
            : n * factorial(n-1); 
}

//선형반복적과정
//임의의 n에 대해 해석기는 각 단계에서 그냥 product,counter,max_count 현재값만 기억하면 된다
function factorial_l(n){
    return fact_iter(1,1,n);
}
function fact_iter(product,counter,max_count){
    return counter > max_count
           ? product 
           : fact_iter(counter * product,
                       counter + 1,
                       max_count);
}
console.log(factorial_l(6));
//반복과 재귀는 비교할 때는 재귀적과정이라는 개념을 재귀함수라는 개념과 혼동하지 말아야한다
//함수가 재귀적이라는 것은 함수 선언에서 함수가 함수 자신을 참조한다는 구문상의 사실을 말하는것
//그러나 어떤 과정이 재귀적이라는 것은 그 과정이 어떤 식으로 전개되는가에 관한것이지, 함수가 어떤 구문으로 작성되었는가에 관한것이 아니다


//연습문제 1.9
// inc 1증가 하는 함수, dec 1감소하는 함수

//반복적
function  plus(a,b){
    return a === 0 ? b : inc(plus(dec(a),b));
}

//재귀적
function plus(a,b){
    return a === 0 ? b : plus(dec(a),inc(b));
}

//연습문제 1.10
function A(x,y){
    return y === 0
           ? 0
           : x === 0
           ? 2 * y
           : y === 1
           ? 2
           : A(x-1,A(x,y-1));
}
console.log(A(1,10));
console.log(A(2,4));
console.log(A(3,3));

//2n
function f(n){
    return A(0,n);
}
// 2^n
function g(n) {
    return A(1, n)
}
// 2^h(n-1)
function h(n) {
    return A(2, n)
}
// 5n^2
function k(n) {
    return 5 * n * n
}
console.log(k(3));


//1.2.2트리재귀
//피보나치 수열의 각 수는 그 이전 두수의 합니다.
//0,1,1,2,3,5,8,13,21.....
function fib(n){
    return n === 0 
           ? 0
           : n === 1 
           ? 1
           : fib(n-1) + fib(n-2);
}
console.log(fib(8));
//위 함수는 트리재귀를 설명하기에는 적합하지만 , 피보나치수를 계산하는데에는 아주 나쁜 방법임

function fib_e(n){
    return fib_iter(1,0,n);
}
function fib_iter(a,b,count){
    return count === 0 
            ? b
            : fib_iter(a+b,a,count-1)
}
console.log(fib_e(8));

