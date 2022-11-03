function checkObj(obj, checkProp) {
    // Only change code below this line
    //use if else to check if it has the property values
    if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
    } else {
      return "Not Found";
    }
    // Only change code above this line
  }