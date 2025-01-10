function getValueBetween(str, prefix, suffix) {
    const prefixPos = str.indexOf(prefix);
    if (prefixPos === -1) {
      return '';
    }
  
    const start = prefixPos + prefix.length;
    const part = str.substring(start);
  
    if (suffix) {
      const suffixPos = part.indexOf(suffix);
      if (suffixPos === -1) {
        return '';
      }
      return part.substring(0, suffixPos);
    }
  
    return part;
  }
  
  module.exports = getValueBetween;
  