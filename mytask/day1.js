function parseDay(dayString) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
    for (let i = 0; i < days.length; i++) {
      if (dayString.toLowerCase().startsWith(days[i].toLowerCase())) {
        return i + 1; 
      }
    }
  
    return -1; 
  }
  
  module.exports = parseDay;
  