function firstNonRepeatedChar(str) {
  
  let lower = str.toLowerCase();
  
  
  let frequency = {};

  
  for (let i = 0; i < lower.length; i++) {
    let currentChar = lower[i];
    frequency[currentChar] = (frequency[currentChar] || 0) + 1;
  }

  for (let i = 0; i < lower.length; i++) {
    if (frequency[lower[i]] === 1) {
      return lower[i];  
    }
  }

  
  return "null";
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
