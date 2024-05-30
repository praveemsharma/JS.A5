
// 1.
let arr0=[1,2,3,4] 
result = Array.isArray(arr0);
console.log(result)
// 2.

let  arr = [1,2,3,4,5,6];
for(i = 0; i<arr.length; i++){
    console.log(arr[i])
}

// 3.

let arr1 = [1,0,2,3,4];
let arr2 = [3,5,6,7,8,13];
let arr3 = [];
for (let i = 0; i < arr1.length; i++) {
    arr3[i] = arr1[i] + arr2[i];
}
console.log(arr3);

// 4.
  let mycolor =["red","green","white","black"];
  let arr4 = mycolor.toString();
  console.log(arr4)
  let arr5 = mycolor.join("+")
  console.log(arr5)

// 5.
var arr6 = [ -4,-3, 8, 7, 6, 5, 3, 2, 1 ];
var arr7 =arr6.sort();
console.log(arr7)
