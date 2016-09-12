function getFirstSelector(selector) {
  var oo = document.querySelector(selector)
  return oo
}

function nestedTarget(nested, target) {
  var oo = document.querySelector('#nested').querySelector('.target')
  return oo
}

function increaseRankBy(n) {
  var list = document.querySelectorAll('.ranked-list')
  for (var i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i]) + n
  }
}

function deepestChild() {
  let list = document.getElementById('grand-node').querySelectorAll('div');
  return list[list.length-1];
}
