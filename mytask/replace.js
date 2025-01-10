function Replace(str, substr, newstr) {
    if (substr === '') {
      return str;
    }
  
    const result = [];
    const remaining = str;
  
    while (true) {
      const index = remaining.indexOf(substr);
  
      if (index === -1) {
        result.push(remaining);
        break;
      }
  
      result.push(remaining.substring(0, index), newstr);
      remaining = remaining.substring(index + substr.length);
    }
  
    return result.join('');
  }
  
  module.exports = Replace;
  