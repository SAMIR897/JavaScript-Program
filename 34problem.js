
function Kth_greatest_in_array(arr, k) {

    for (var i = 0; i < k; i++) {
      var max_index = i,
        tmp = arr[i];
  
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[j] > arr[max_index]) {
          max_index = j;
        }
      }
  
      arr[i] = arr[max_index];
      arr[max_index] = tmp;
    }
  
    return arr[k - 1];
  }
  
  console.log(Kth_greatest_in_array([1,5,8], 11))
  console.log(Kth_greatest_in_array([-11,-36,-47,-66,0], 1))

// program to reverse a string

function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// take input from the user
const string = prompt('Enter the string');

const result = reverseString(string);
console.log(result);
