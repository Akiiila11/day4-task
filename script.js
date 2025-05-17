// 1. PRINT ODD NUMBERS IN AN ARRAY  [1,2,3,4,5,6,7,8,9,10]
// NORMAL FUNCTION
var result = [];
function odd(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(odd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// ANONYMOUS FUNCTION
var result = [];
var a = function (arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(a([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// IIFE FUNCTION
var result = [];
(function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  console.log(result);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// ARROW FUNCTION
var result = [];
var a = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(a([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 2. convert all the strings to little caps in a string array
// ("CoNcaT sTriNg aRraY")
// ANNONYMOUS FUNCTION

var a = function (arr) {
  var b = arr.split(" ");
  for (i = 0; i < b.length; i++) {
    b[i] = b[i].charAt(0).toUpperCase() + b[i].slice(1).toLowerCase();
  }
  var result = b.join(" ");
  return result;
};
console.log(a("CoNcaT sTriNg aRraY"));

// IIFE FUNCTION
(function (arr) {
  var s = arr.split(" ");
  for (i = 0; i < s.length; i++) {
    s[i] = s[i].charAt(0).toUpperCase() + s[i].slice(1).toLowerCase();
  }
  var result = s.join(" ");
  console.log(result);
})("CoNcaT sTriNg aRraY");

// ARROW FUNCTION
var a = (arr) => {
  var b = arr.split(" ");
  for (i = 0; i < b.length; i++) {
    b[i] = b[i].charAt(0).toUpperCase() + b[i].slice(1).toLowerCase();
  }
  var result = b.join(" ");
  return result;
};
console.log(a("CoNcaT sTriNg aRraY"));

// 3. Some of all numbers in an array
// ANNONYMOUS FUNCTION
var a = function (arr) {
  var sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(a([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// IIFE FUNCTION
(function (arr) {
  var sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// ARROW FUNCTION
var a = (arr) => {
  var b = 0;
  for (i = 0; i < arr.length; i++) {
    b += arr[i];
  }
  return b;
};
console.log(a([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 4. Return all the prime numbers in an array
// ANNONYMOUS FUNCTION
var prime = function (num) {
  var result = [];
  for (i = 2; i <= num; i++) {
    var isprime = true;
    for (j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        var isprime = false;
        break;
      }
    }
    if (isprime) {
      result.push(i);
    }
  }
  return result;
};
console.log(prime([100]));

// IIFE FUNCTION
(function (num) {
  var result = [];
  for (i = 2; i <= num; i++) {
    var isprime = true;
    for (j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        var isprime = false;
        break;
      }
    }
    if (isprime) {
      result.push(i);
    }
  }
  console.log(result);
})([100]);

// ARROW FUNCTION
var prime = (num) => {
  var result = [];
  for (i = 2; i <= num; i++) {
    var isprime = true;
    for (j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        var isprime = false;
        break;
      }
    }
    if (isprime) {
      result.push(i);
    }
  }
  return result;
};
console.log(prime([100]));

// 5. Return all the palindromes in an array
// ANNONYMOUS FUNCTION
var palindrome = function (arr) {
  var palin = arr;
  var frwd = arr.toLowerCase();
  var init = frwd.split("").reverse().join("");
  if (frwd === init) {
    console.log(palin + " " + "is a palindrome");
  } else {
    console.log(palin + " " + "is not a palindrome");
  }
};
palindrome("Racecar");

// IIFE FUNCTION
(function (arr) {
  var org = arr;
  var frwd = arr.toLowerCase();
  var rev = frwd.split("").reverse().join("");
  if (frwd === rev) {
    console.log(org + " " + "is a palindrome");
  } else {
    console.log(org + " " + "is not a palindrome");
  }
})("Racecar");

// ARROW FUNCTION
var palindrome = (arr) => {
  var org = arr;
  var frwd = arr.toLowerCase();
  var rev = frwd.split("").reverse().join("");
  if (frwd === rev) {
    console.log(org + " " + "is a palindrome");
  } else {
    console.log(org + " " + "is not a palindrome");
  }
};
palindrome("Racecar");

// 6. Return two median of two sorted arrays of the same size
// ANNONYMOUS FUNCTION
var medianNumber = function (arr1, arr2) {
  var add = arr1.concat(arr2).sort(function (a, b) {
    return a - b;
  });
  var median = Math.floor(add.length / 2);
  if (add.length % 2 === 0) {
    return (add[median - 1] + add[median]) / 2;
  } else {
    return add[median];
  }
};
console.log(medianNumber([1, 4, 3, 9, 6, 8, 2], [7, 8, 9, 6, 4, 12]));

// IIFE FUNCTION
(function (arr1, arr2) {
  var add = arr1.concat(arr2).sort(function (a, b) {
    return a - b;
  });
  var median = Math.floor(add.length / 2);
  if (add.length % 2 === 0) {
    return add[median - 1] + add[median] / 2;
  } else {
    console.log(add[median]);
  }
})([1, 4, 3, 9, 6, 8, 2], [7, 8, 9, 6, 4, 12]);

// ARROW FUNCTION
var medianNumber = (arr1, arr2) => {
  var add = arr1.concat(arr2).sort(function (a, b) {
    return a - b;
  });
  var median = Math.floor(add.length / 2);
  if (add.length % 2 === 0) {
    return add[median - 1] + add[median] / 2;
  } else {
    return add[median];
  }
};
console.log(medianNumber([1, 4, 3, 9, 6, 8, 2], [7, 8, 9, 6, 4, 12]));

// 7. Remove duplicates from an array
// ANNONYMOUS FUNCTION
var numbers = function (arr) {
  var result = [];
  arr.forEach((ele) => {
    if (!result.includes(ele)) {
      result.push(ele);
    }
  });
  return result;
};
console.log(numbers(["1", "2", "3", "2", "5", "6"]));

// IIFE FUNCTION
(function (arr) {
  var result = [];
  arr.forEach((ele) => {
    if (!result.includes(ele)) {
      result.push(ele);
    }
  });
  console.log(result);
})(["apple", "orange", "kiwi", "grapes", "kiwi", "orange"]);

// ARROW FUNCTION
var fruits = (arr) => {
  var result = [];
  arr.forEach((ele) => {
    if (!result.includes(ele)) {
      result.push(ele);
    }
  });
  return result;
};
console.log(fruits(["apple", "orange", "kiwi", "grapes", "kiwi", "orange"]));

// 8. Rotate an array by K times
// ANNONYMOUS FUNCTION
var rotate = function (arr, k) {
  var n = arr.length;
  k = k % n;
  for (i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
};
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 7));

// IIFE FUNCTION
(function (arr, k) {
  var n = arr.length;
  k = k % n;
  for (i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  console.log(arr);
})([1, 2, 3, 4, 5, 6, 7], 7);

// ARROW FUNCTION
var rotate = (arr, k) => {
  var n = arr.length;
  k = k % n;
  for (i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
};
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 7));
