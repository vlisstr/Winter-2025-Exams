function compareObjects(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length || !keys1.every(key => keys2.includes(key))) {
      return false;
    }
    return keys1.every(key => obj1[key] === obj2[key]);
  }
  
  module.exports = compareObjects;
  