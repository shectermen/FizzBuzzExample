const FizzBuzz = num => {
  for (let i = 0; i < num; i++) {
    switch (true) {
      case i % 5 === 0 && i % 3 === 0:
        console.log("fizzbuzz");
        break;
      case i % 3 === 0:
        console.log("fizz");
        break;
      case i % 5 === 0:
        console.log("buzz");
        break;

      default:
        console.log(i);
    }
  }
};

FizzBuzz(100);
