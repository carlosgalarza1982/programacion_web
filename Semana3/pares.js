const nums = [1,2,3,4,5,6,7,8,9];
undefined
const pares =[];
undefined
const impares = [];
undefined
for (let i = 0; i < nums.length; i++){
    if (nums[i]%2 === 0) {
        pares.push(nums[i]);
    } else {
        impares.push(nums[i]);
    }
}

console.log(pares);

console.log(impares);
VM69:15 (4) [2, 4, 6, 8]
VM69:17 (5) [1, 3, 5, 7, 9]
undefined
