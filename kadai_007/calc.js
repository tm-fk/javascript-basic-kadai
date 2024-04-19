const num = 987;

console.log(num);

if (num % 3 === 0 && num % 5 === 0) {
  console.log('変数numは3の倍数なおかつ5の倍数です');
}

else if (num % 3 === 0) { 
  console.log('3の倍数です');
}

else if (num % 5 === 0) { 
  console.log('5の倍数です');
}

else {
  console.log(num);
}



