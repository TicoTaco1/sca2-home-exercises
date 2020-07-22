// complete the function such that it returns true if an object or any of its
// subobjects have any falsy values and false otherwise
// HINT: recursion may help here

const hasFalsyValue = obj => {
  if (obj == false || obj == null || obj == 0 || obj == '' || obj == NaN || obj == undefined){
    return true;
  }
  else{
    return false
  }
};
console.log(hasFalsyValue(null))