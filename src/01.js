// 순수 함수
// 일급 함수
// 클로저

// eg) add maker

// 클로저를 사용해서, 인자값 하나가 결정되어 리턴되는 덧셈함수
// ? bind 로도 가능 하다.!

function add_maker(a) {
  return function (b) {
    return a + b;
  };
}

var onePlus = add_maker(1);
var twoPlus = add_maker(2);
console.log(onePlus(100));
console.log(twoPlus(100));

var tenPlusBind = add_maker.bind(null, 10)();
console.log(tenPlusBind(100));

// eg) a op b  계산기

// f1,f2 평가 후 , 리턴 인자를 각각
//  f3 평가에 사용 후 결과 리턴
function A_OP_B(f1, f2, f3) {
  return f3(f1(), f2());
}

console.log(
  A_OP_B(
    () => {
      return 20;
    },
    () => {
      return 100;
    },
    (a, b) => {
      return a * b;
    }
  )
);
