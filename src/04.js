// _curry, _curryr
// - 함수의 인자를 하나씩 받다가, 조건이 만족되면 평가한다.

// eg 두개의 인자를 받는 커리 함수
// + 리팩터링 : 1개 인자만 받는경우 바로 평가 되도록
function _curry(fn) {
  return function (a, b) {
    // 두개의 인자가 들어온 경우 eg adder(10,20)
    if (arguments.length === 2) {
      return fn(a, b); // 바로 평가
    }
    // 인자를 하나 더 받아야 하는 경우 eg adder(1)(20)
    return function (b) {
      return fn(a, b);
    };
  };
}
// 2개 인자가 들어와서 바로 평가 된다.
console.log(_curry((a, b) => a * b)(10, 20));
// 1개 인자가 들어와서 함수를 리턴해서 추가적인 인자를 요구
console.log(_curry((a, b) => a * b)(10)(100));
