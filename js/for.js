
// for (let D = 0; D < 10; D++) {
//     console.log(D)   
// }

// for (let G = -3 ; G < 100; G+=5){
//     console.log(G)   
   
// }

// let listOfNumbers = [2, 3, 5, 7, 11];
// console.log(listOfNumbers[2]);
// // → 5
// console.log(listOfNumbers[0]);
// // → 2
// console.log(listOfNumbers[2 - 1]);
// // → 3
// let sequence = [1, 2, 3];
// sequence.push(1);
// sequence.push(5);
// console.log(sequence);


// let object1 = {value: 10};
// let object2 = object1;
// let object3 = {value: 10};

// console.log(object1 == object2);
// // → true
// console.log(object1 === object3);
// // → true

// object1.value = 13;
// console.log(object1.value);
// // → 15
// console.log(object3);
// // → 10



let array = [1,2,3,4,5,6,7,8,9,10]

//almacenar el resultado del modulo
let newAarray = [];

for (let i = 0; i < array.length; i= i+1) {
    //let array2 = array/2;
    //array2 %= 0
    if (array[i]%2 == 0) {
        newAarray.push(array[i]);
    }  
 //console.log(i);
}
console.log(newAarray);
