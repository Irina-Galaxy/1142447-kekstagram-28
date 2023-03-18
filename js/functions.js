const lengthString = (str, maxLength) => {
  if(str.length < maxLength){
    return true;
  } else{
    return false;
  }
};
lengthString('наша строка',7);
