// Berilgan massivdan n-chi eng kichik elementni toping.
function nthSmallest(arr, n) {
  arr.sort((a, b) => a - b);
  return arr[n - 1];
}
// Test case
console.log(nthSmallest([7, 10, 4, 3, 20, 15], 3)); // Output: 7
console.log(nthSmallest([7, 10, 4, 3, 20, 15], 4)); // Output: 10

// Berilgan sonli massivda eng ko'p takrorlangan elementni toping.
function mostFrequent(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }
  let max = 0;
  let maxKey = "";
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      maxKey = key;
    }
  }
  return maxKey;
}

// Test case
console.log(mostFrequent([1, 3, 1, 3, 2, 1])); // Output: 1
console.log(mostFrequent([3, 3, 3, 2, 2, 1])); // Output: 3

// Berilgan harflar qatorida eng ko'p takrorlangan harfni toping.
function mostFrequentChar(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] === undefined) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }
  let max = 0;
  let maxKey = "";
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      maxKey = key;
    }
  }
  return maxKey;
}

// Test case
console.log(mostFrequentChar("aabbbcccc")); // Output: "c"
console.log(mostFrequentChar("abcdabcdabcd")); // Output: "a"

// Berilgan sonli massivdagi eng kichik musbat sonni toping.

function firstMissingPositive(nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      return nums[i];
    }
  }
}

// Test case
console.log(firstMissingPositive([3, 4, -1, 2, 1])); // Output: 1
console.log(firstMissingPositive([1, 2, 0])); // Output: 1

// Berilgan stringdagi barcha harflarni bir qatorga chop eting.
function printCharsInLine(s) {
  return s.split("").join(" ");
}

// Test case
console.log(printCharsInLine("hello")); // Output: "h e l l o"

// Berilgan stringlar massivida eng uzun o'xshash prefiksni toping.
function longestCommonPrefix(strs) {
  let prefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== strs[0][i]) {
        return prefix;
      }
    }
    prefix += strs[0][i];
  }
  return prefix;
}

// Test case
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""

// Berilgan qator ichidagi arrayda ichidagi sonlar yi’g’indisi yuqori bo’lgan array ni qaytaring
function maxSumSubmatrix(matrix, k) {
  let newArr = [];
  for (let i = 0; i < matrix.length; i++) {
    let res = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      res += matrix[i][j];
      if (res > k) {
        newArr.push(matrix[i]);
      }
    }
    newArr.push(res);
  }
  newArr.sort((a, b) => b - a);
  return newArr[0];
}

// Test case
console.log(
  maxSumSubmatrix([
    [10, 2, 3],
    [4, 11, 6],
    [7, 8, 9],
  ])
); // [7, 8, 9]

// Berilgan ikki massivdagi umumiy elementlarni toping.
function intersection(nums1, nums2) {
  let newArr = {};
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        newArr[nums1[i]] = nums1[i];
      }
    }
  }
  let result = Object.values(newArr);
  return result;
}

// Test case
console.log(intersection([1, 2, 2, 1], [2, 2])); // Output: [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // Output: [4, 9]

// Berilgan sonlar qatorida berilgan yig'indini topuvchi barcha ikkilik juftliklarni toping.
function twoSumPairs(nums, target) {
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        newArr.push([nums[i], nums[j]]);
      }
    }
  }
  return newArr;
}

// Test case
console.log(twoSumPairs([2, 7, 11, 15], 9)); // Output: [[2, 7]]
console.log(twoSumPairs([3, 2, 4], 6)); // Output: [[2, 4]]

// Berilgan stringda har bir belgini qanchalik ko'p uchraganini hisoblang.

function charFrequency(s) {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] === undefined) {
      obj[s[i]] = 1;
    } else {
      obj[s[i]]++;
    }
  }
  return obj;
}

// Test case
// console.log(charFrequency("aabbcc")); // Output: { a: 2, b: 2, c: 2 }
// console.log(charFrequency("hello")); // Output: { h: 1, e: 1, l: 2, o: 1 }

// Berilgan objectda eng chuqur joylashgan qiymatni toping.
function deepestValue(obj = {}) {
    let result;
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      return deepestValue(obj[key]);
    }
    result = obj[key];
  }
  return result;
}

// Test case
const obj = { a: 1, b: { c: 2, d: { e: 3, f: { g: 4 } } } };
console.log(deepestValue(obj)); // Output: 4
