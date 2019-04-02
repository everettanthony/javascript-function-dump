function incrementString(str) {
  // return incrementedString
  var letters = str.replace(/[0-9]/g, ''); 
  var len = str.length - letters.length; 
  var strNew = str.slice(letters.length) || '0';
  strNew = (parseInt(strNew) + 1).toString();
 
  while (strNew.length < len) {
    strNew = '0' + strNew;
  }
    
  return letters.concat(strNew);
}

console.log( incrementString('tony00009') ); 