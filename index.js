function printNumber(n) {
if(n <= 0){
  return
} else {
  n - 1;
  console.log(n);
  printNumber(n - 1);
}

}

printNumber(10);