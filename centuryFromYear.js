function centuryFromYear(year) {
  const yearLength = year.toString().length;
  let century = '';
  
  if (yearLength === 4){
    century = year.toString().substring(0, 2);
    
    if (year % 100 !== 0) { 
      return (parseInt(century)+1);
    } 
    else {
      return parseInt(century);  
    }
  } 
  else if (yearLength === 3) {
    century = year.toString().substring(0,1);
    
    if (year % 100 !== 0) { 
      return (parseInt(century)+1);
    } 
    else {
      return parseInt(century);  
    }
  } 
  else if (yearLength < 3){
    return 1;
  }
}

console.log(centuryFromYear(1975));