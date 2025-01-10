function sum(arr) {
    let total = 0;
    for (const element of arr) {
      if (typeof element === 'number') {
        total += element;
      }
    }
    return total;
  }
  
  module.exports = sum;