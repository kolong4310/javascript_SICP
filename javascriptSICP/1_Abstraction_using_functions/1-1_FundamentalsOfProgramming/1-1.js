'use strict';
//1.1.2 이름 붙이기와 환경
const size = 2;

const pi = 3.14159;
const radius = 10;

console.log(pi * radius  * radius);

const circumference = 2 * pi * radius;
console.log(circumference);


//1.1.3 연산자 조합의 평가
//const x = 3; 은 조합이 아니고 키워드이다
//키워드를 포함한 문장을 구문형(syntactic form)이라고 부르는데, 각각의 구문형마다 고유한 규칙이 있다
//다양한 종류의 문장들과 표현식들은 프로그래밍 언어의 구문론(syntax)을 형성한다


//1.1.4 복합함수
//복합연산(compound operation)에 이름을 붙여서 그 연산을 하나의 단위로 지칭하게 하는 함수선언은 상수 선언보다 훨씬 강력한 추상화 기법
function square(x){
    return x * x;
}
//function 이름(매개변수들){return 표현식;}
console.log(square(21));
console.log(square(2+5));
console.log(square(square(3)));

function sum_of_squares(x,y){
    return square(x) + square(y);
}
console.log(sum_of_squares(3,4));

function f(a){
    return sum_of_squares(a+1, a*2);
}

console.log(f(5));

//1.1.5 함수 적용의 치환 모형
//치환모형(substitution model: 또는 대입모형)

//1.1.6 조건부 표현식과 술어
//사례분석(case analysis : 또는 경우분석) 이라고 하는데, javascript 에서는 조건부 표현식을 이용해서 표현가능, 다음은 조건부 푠현식을 이용하여 젎대값을 구하는 함수
function abs(x){
    return x > 0 
    ? x
    : x === 0 
    ? 0
    : -x;
}
//술어 ? 귀결-표현식 : 대안-표현식

function greater_or_equal(x,y){
    return x > y || x === y;
    //return !(x<y);
}



//연습문제 1.1

//연습문제 1.2
const a12 = (5+4+(2-(3-(6+(5/4)))))/(3*(6-2)*(2-7));
console.log(a12);

//연습문제 1.3
function a13(a,b,c){
    return square(a) + square(b) + square(c) - Math.min(a,b,c);
}

console.log(a13(1,2,4));

//연습문제 1.4
function plus(a,b){return a+b;}
function minus(a,b){return a-b;}
function a_plus_abs_b(a,b){
    return (b >=0 ? plus : minus)(a,b);
}

//연습문제 1.5
function p(){return p();}
function test(x,y){
    return x ===0 ? 0 :y;
}

//연습문제 1.6 뉴턴방법으로 제곱근 구하기
function sqrt_iter(guess,x){
    return is_good_enough(guess,x)
    ? guess
    : sqrt_iter(improve(guess,x),x);
}

function improve(guess,x){
    return average(guess,x/guess);
}
//평균
function average(x,y){
    return (x+y)/2;
}

//현재 추측값이 충분히 좋은지 판정하는 함수
function is_good_enough(guess,x){
    return abs(square(guess) - x) < 0.001;
}
//전체 반복 과정을 시작하는 수단
function sqrt(x){
    return sqrt_iter(1,x);
}

console.log(sqrt(9));


//연습문제 1.6 
function conditional(predicate,then_clause,ele_clause){
    return predicate ? then_clause : ele_clause;
}
console.log(conditional(2 === 3,9,5));
console.log(conditional(1 === 1,0,5));

//
function sqrt_iter2(guess,x){
    return conditional(is_good_enough(guess,x),
                       guess,
                       sqrt_iter2(improve(guess,x),
                                x));
}

//연습문제 1.7

console.log('--------------');

//지역이름
///함수의 매개변수는 그 이름이 중요하지 않다는 점에서 함수선언에서 아주 특별한 역활은 한다. 그런 이름을 일컬어 함수 선언에 바인딩되었다 또는 묶였다(bound)라고 말한다


//내부선언과 블록구조
//위에 제곱근 함수들을 선언함에 있어 문제는 사용자에게 꼭필요함수는 sqrt 뿐인데 다른 함수들은 혼란을 가중시킨다
//그러므로 내부선언을 하는것이 좋다는 내용
function sqrt3(x){

    function abs(x){
        return x > 0 
        ? x
        : x === 0 
        ? 0
        : -x;
    }

    function square(x){
        return x * x;
    }    

    function is_good_enough(guess,x){
        return abs(square(guess) - x) < 0.001;
    }


    function average(x,y){
        return (x+y)/2;
    }


    function improve(guess,x){
        return average(guess,x/guess);
    }

    function sqrt_iter(guess,x){
        is_good_enough(guess,x)
        ? guess
        : sqrt_iter(improve(guess,x),x);
    }

    return sqrt_iter(1,x);
}

console.log(sqrt3(1));