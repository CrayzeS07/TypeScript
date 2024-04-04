"use strict";
function findUserDetailsById(arr, id) {
    const user = arr.find((user) => user.id === id);
    return user ? { name: user.name, address: user.address } : undefined;
}
const users = [
    { id: 1, name: "Crayzes", address: "Jizzax" },
    { id: 2, name: "Azamat", address: "Samarqand" },
    { id: 3, name: "Islom", address: "Jizzax" },
];
const userId = 2;
const userDetails = findUserDetailsById(users, userId);
if (userDetails) {
    console.log(`User ID ${userId}'s name is ${userDetails.name} and address is ${userDetails.address}`);
}
else {
    console.log(`User with ID ${userId} not found`);
}
//masala 2
function combineUserInfo(arr) {
    const names = [];
    const ages = [];
    arr.forEach((user) => {
        names.push(user.name);
        ages.push(user.age);
    });
    return [names, ages];
}
const A = [
    { name: "Crayzes", age: 17 },
    { name: "Islom", age: 17 },
    { name: "Azamat", age: 18 },
];
const [names, ages] = combineUserInfo(A);
console.log("Names:", names);
console.log("Ages:", ages);
//masala 4
function getMaxNumbers(arr1, arr2) {
    const maxNumbers = [];
    const maxNumArr1 = Math.max(...arr1);
    if (maxNumArr1 !== -Infinity) {
        maxNumbers.push(maxNumArr1.toString());
    }
    const maxNumArr2 = Math.max(...arr2);
    if (maxNumArr2 !== -Infinity) {
        maxNumbers.push(maxNumArr2.toString());
    }
    return maxNumbers;
}
const Arr1 = [3, 7, 1, 9, 13, 43, 1, 3, 4, 65, 7654, 756, 3, 1];
const Arr2 = [5, 2, 8, 4, 6, 78, 4587, 232, 87, 2, 67];
const maxNumbers = getMaxNumbers(Arr1, Arr2);
console.log("Eng katta raqamlar:", maxNumbers);
