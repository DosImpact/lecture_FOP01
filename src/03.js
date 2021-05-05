// _curry, _curryr
// - 함수의 인자를 하나씩 받다가, 조건이 만족되면 평가한다.

// eg 두개의 인자를 받는 커리 함수
function _curry(fn) {
  return function (a) {
    return function (b) {
      return fn(a, b);
    };
  };
}

// 결국 커리함수가 2개의 인자를 줄꺼래
var adder = _curry(function (a, b) {
  return a + b;
});
var twoPlus = adder(2); // 인자 1개 만족

console.log(twoPlus(10)); //  인자 2개 만족 -> 평가
console.log(adder(15)(2)); // 바로 2개 인자 만족
console.log(_curry((a, b) => a * b)(23)(10)); // 추상화 가능
