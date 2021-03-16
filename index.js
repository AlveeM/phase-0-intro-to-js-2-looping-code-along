// Code your solutions in this file

function writeCards(names, occasion) {
  const res = [];
  for (let name of names) {
    res.push(`Thank you, ${name}, for the wonderful ${occasion} gift!`);
  }
  return res;
}

function countDown(num) {
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
}
