// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
  let largest=array[0];
  let secondLarg=array[1];
  for(let i=1;i<array.length;i++){
    if(array[i]>=largest){
      secondLarg=largest;
      largest = array[i];
    }
    else if(array[i]>secondLarg && array[i]!=largest){
      secondLarg=array[i];
    }
  }
  // console.log(secondLarg);
  return secondLarg;
}

// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
  // Write your code here
  // let array=string.split('');
  const map={};
  for(let i=0;i<string.length;i++){
    const charac=string[i];
    if(charac.charCodeAt(0)>= 97 && charac.charCodeAt(0) <=122){
    if(map[charac]){
      map[charac]++;
    }
    else{
      map[charac] = 1;
    }
  }
  }
  // console.log(map);
   return map;  
}

// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflatObject) {
  // Write your code here
  let reslt={};
  for(const i in unflatObject){
    if(typeof unflatObject[i] === "object" && !Array.isArray(unflatObject[i])){
     const temp=flatten(unflatObject[i]);
      for(const j in temp){
        reslt[i+"."+j]=temp[j];
      }
    }
        else if (Array.isArray(unflatObject[i])) {
      for (let k = 0; k < unflatObject[i].length; k++) {
        const temp = flatten({ [k]: unflatObject[i][k]});
        for (const l in temp) {
          reslt[i + "." + l] = temp[l];
        }
      }
    }
    else{
      reslt[i]=unflatObject[i];
    }
   }
  // console.log(reslt);
  return reslt;
}

// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(flatObject) {
  // Write your code here
    "use strict";
    if (Object(flatObject) !== flatObject || Array.isArray(flatObject))
        return flatObject;
    var result = {}, cur, prop, idx, last, temp;
    for(var p in flatObject) {
        cur = result, prop = "", last = 0;
        do {
            idx = p.indexOf(".", last);
            temp = p.substring(last, idx !== -1 ? idx : undefined);
            cur = cur[prop] || (cur[prop] = (!isNaN(parseInt(temp)) ? [] : {}));
            prop = temp;
            last = idx + 1;
        } while(idx >= 0);
        cur[prop] = flatObject[p];
    }
    return result[""];
}
