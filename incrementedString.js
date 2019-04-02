function incrementString(strng) {
  // return incrementedString
  var letters = strng.replace(/[0-9]/g, ''); 
  var len = strng.length - letters.length; 
  var strNew = strng.slice(letters.length) || '0';
  strNew = (parseInt(strNew) + 1).toString();
 
  while (strNew.length < len) {
    strNew = '0' + strNew;
  }
    
  return letters.concat(strNew);
}


console.log( incrementString('tony00009') );