const fibonacci = function(length) {
  let a = 1;
  let b = 1;
  let arr = [1,1];
  let z = 1;
  for(let i = 0; i<length-2; i++){ // -2 because the first to variables 
    let c = a + b;                 // are already assigned to the array
    arr.push(c);                   // This also takes care of strings
    // console.log(a,b,c)
    if(z){
      a = c;
      z = 0;
      // console.log(a,b,c,"snd")
    }else{
      b = c;
      z = 1;
      // console.log(a,b,c,"trd")
    }
  }
  console.log(arr);
  return length>0 ? arr[length-1]: "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
