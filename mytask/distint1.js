function distinct(data) {
    const uniqueSet = new Set();
    const result = [];
  
    for (const item of data) {
      if (!uniqueSet.has(item)) {
        uniqueSet.add(item);
        result.push(item);
      }
    }
  
    return result;
  }
  
  module.exports = distinct;