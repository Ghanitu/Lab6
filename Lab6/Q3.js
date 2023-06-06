function printNumbers(from, to) {
    let currentNumber = from;
  
    const timerId = setInterval(function() {
      console.log(currentNumber);
  
      if (currentNumber === to) {
        clearInterval(timerId);
      }
  
      currentNumber++;
    }, 1000);
  }
  
  // Example usage:
  printNumbers(1, 5);