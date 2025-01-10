function intersection(obj1, obj2) {
    const result = {};
    const keys1 = Object.keys(obj1);
  
    for (const key of keys1) {
      if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
        result[key] = obj1[key];
      }
    }
  
    return result;
  }
  
  module.exports = intersection;
  