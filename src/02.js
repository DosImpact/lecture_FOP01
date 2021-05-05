// _map
// _filter
// _each

var users = [
  { id: 1, name: "DO", age: 23 },
  { id: 2, name: "EG", age: 21 },
  { id: 3, name: "GEO", age: 53 },
  { id: 4, name: "QFO", age: 13 },
  { id: 5, name: "QO", age: 28 },
];

// for 문 -> FOP 추상화 가능

// eg) 절차 지향 filter & map & each 을 함수형으로 추상화 하시오
// - 추상화의 단위 : 함수
// - 내부 추상화 : predi, iter, mapper

var tmp_user = []; // filter result
for (let i = 0; i < users.length; i++) {
  // for문 -> each로 추상화
  if (users[i].age >= 25) {
    // if 안의 판단 부분 -> pred 함수로 추상황
    tmp_user.push(users[i]);
  }
}
// console.log(tmp_user);

var tmp_user_name = [];
for (let i = 0; i < users.length; i++) {
  // for문 -> each로 추상화
  tmp_user_name.push(users[i].name); // mapper 함수 추상화
}
// console.log(tmp_user_name);

// ------------------------
// list를 받아서, 각 원소에 원하는 함수를 eval 한다.
const _each = (list, iter) => {
  for (let i = 0; i < list.length; i++) {
    iter(list[i]);
  }
  return list;
};
// list를 받아서, 원하는 시점에 pred 평가하여 새로운 값들로 리턴
const _filter = (list, pred) => {
  var res = [];
  _each(list, function (user) {
    if (pred(user)) res.push(user);
  });
  //   for (let i = 0; i < list.length; i++) {
  //     if (pred(list[i])) res.push(list[i]);
  //   }
  return res;
};
// list를 받아서, 원하는 데이터를 매핑하여 리턴
const _map = (list, mapper) => {
  var res = [];
  _each(list, function (user) {
    res.push(mapper(user));
  });
  //   for (let i = 0; i < list.length; i++) {
  //     res.push(mapper(list[i]));
  //   }
  return res;
};

// filter 안에 each가 돈다. 즉, filter는 고차함수 이다.
console.log(_filter(users, (user) => user.age > 25));
// 다형성 -  map 함수는 객체리스트, number리스트를 받을 수 있다.
console.log(_map(users, (user) => `${user.name}[${user.age}]`));
console.log(_map([1, 2, 3, 4], (n) => n * 2));
