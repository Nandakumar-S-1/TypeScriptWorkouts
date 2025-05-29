// export {}
// let names = "Ashika Sivan";
// console.log(names)

// let user ={name : 'Nandu', age:26}
// console.log(user.age)

import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question("enter a character ",(inputCharacter:string)=>{
//     console.log("entered character is "+inputCharacter);
//     rl.close()
    
// })
/////////////////////////////////////////////////
// let a: string | null = prompt("enter a character")
// if(a!=null){
//     console.log("entered character is "+a);
// }
//////////////////////////////

//   rl.question("Enter first number: ", (num1: string) => {
//     rl.question("Enter second number: ", (num2: string) => {
//       const number1: number = parseFloat(num1);
//       const number2: number = parseFloat(num2);
//       const sum: number = number1 + number2;
//       console.log(`Sum of ${number1} and ${number2} is ${sum}`);
//       rl.close();
//     });
//   });


// ===================

//  rl.question("Enter principal amount: ", (p: string) => {
//     rl.question("Enter interest rate: ", (r: string) => {
//       rl.question("Enter number of years: ", (n: string) => {
//         const principal: number = parseFloat(p);
//         const rate: number = parseFloat(r);
//         const years: number = parseFloat(n);
//         const simpleInterest: number = (principal * rate * years) / 100;
//         console.log(`Simple Interest: ${simpleInterest}`);
//         rl.close();
//       });
//     });
//   });




// ========================

//   rl.question("Enter your mark: ", (markInput: string) => {
//     const mark: number = parseFloat(markInput);
//     if (mark >= 50) {
//       console.log("Passed");
//     } else {
//       console.log("Failed");
//     }
//     rl.close();
//   });

// ====================
//  rl.question("Enter total mark percentage: ", (markInput: string) => {
//     const totalMark: number = parseFloat(markInput);
//     let grade: string;
    
//     if (totalMark > 90) {
//       grade = "A";
//     } else if (totalMark >= 80) {
//       grade = "B";
//     } else if (totalMark >= 70) {
//       grade = "C";
//     } else if (totalMark >= 60) {
//       grade = "D";
//     } else if (totalMark >= 50) {
//       grade = "E";
//     } else {
//       grade = "Failed";
//     }
    
//     console.log(`Grade: ${grade}`);
//     rl.close();
//   });

// ====================

//  rl.question("Enter a number (1-7): ", (input: string) => {
//     const dayNumber: number = parseInt(input);
//     let day: string;
    
//     switch (dayNumber) {
//       case 1:
//         day = "Sunday";
//         break;
//       case 2:
//         day = "Monday";
//         break;
//       case 3:
//         day = "Tuesday";
//         break;
//       case 4:
//         day = "Wednesday";
//         break;
//       case 5:
//         day = "Thursday";
//         break;
//       case 6:
//         day = "Friday";
//         break;
//       case 7:
//         day = "Saturday";
//         break;
//       default:
//         day = "Invalid Entry";
//     }
    
//     console.log(day);
//     rl.close();
//   });

//////////////////////

  // rl.question("Enter a number: ", (input: string) => {
  //   const number: number = parseInt(input);
  //   console.log(`Multiplication table of ${number}:`);
    
  //   for (let i = 1; i <= 10; i++) {
  //     console.log(`${i} x ${number} = ${i * number}`);
  //   }
  //   rl.close();
  // });

  ///////////////

  //  rl.question("Enter a limit: ", (input: string) => {
  //   const limit: number = parseInt(input);
  //   let sum: number = 0;
    
  //   for (let i = 1; i < limit; i += 2) {
  //     sum += i;
  //   }
    
  //   console.log(`Sum of odd numbers = ${sum}`);
  //   rl.close();
  // });
  
////////////////////////


  // console.log("Pattern:");
  // for (let i = 1; i <= 5; i++) {
  //   let row = "";
  //   for (let j = 1; j <= i; j++) {
  //     row += j + " ";
  //   }
  //   console.log(row.trim());
  // }
  // rl.close();

  //////////////////////

//  rl.question("Enter the size of arrays: ", (sizeInput: string) => {
//     const size: number = parseInt(sizeInput);
    
//     rl.question("Enter values of Array 1 (comma separated): ", (arr1Input: string) => {
//       rl.question("Enter values of Array 2 (comma separated): ", (arr2Input: string) => {
//         let array1: number[] = arr1Input.split(',').map(x => parseInt(x.trim()));
//         let array2: number[] = arr2Input.split(',').map(x => parseInt(x.trim()));

//         let temp = array1;
//         array1 = array2;
//         array2 = temp;
        
//         console.log("Arrays after swapping:");
//         console.log("Array1:", array1.join(', '));
//         console.log("Array2:", array2.join(', '));
//         rl.close();
//       });
//     });
//   });

/////////////////////////////////

//  rl.question("Enter the size of array: ", (sizeInput: string) => {
//     rl.question("Enter the values of array (comma separated): ", (arrInput: string) => {
//       const array: number[] = arrInput.split(',').map(x => parseInt(x.trim()));
//       let evenCount: number = 0;
      
//       for (let num of array) {
//         if (num % 2 === 0) {
//           evenCount++;
//         }
//       }
      
//       console.log(`Number of even numbers in the given array is ${evenCount}`);
//       rl.close();
//     });
//   });


/////////////////////////////////

  // rl.question("Enter the size of array: ", (sizeInput: string) => {
  //   rl.question("Enter the values of array (comma separated): ", (arrInput: string) => {
  //     const array: number[] = arrInput.split(',').map(x => parseInt(x.trim()));
  //     array.sort((a, b) => b - a);
      
  //     console.log("Sorted array:");
  //     console.log(array.join(', '));
  //     rl.close();
  //   });
  // });

/////////////////////////

//  rl.question("Enter a string: ", (inputString: string) => {
//     const str = inputString.toUpperCase();
//     const reversed = str.split('').reverse().join('');
    
//     if (str === reversed) {
//       console.log("Entered string is a palindrome");
//     } else {
//       console.log("Entered string is not a palindrome");
//     }
//     rl.close();
//   });

/////////////////////////////

//  let array: number[] = [];
  
//   function getArray() {
//     rl.question("Enter array size: ", (sizeInput: string) => {
//       const size = parseInt(sizeInput);
//       rl.question("Enter array values (comma separated): ", (arrInput: string) => {
//         array = arrInput.split(',').map(x => parseInt(x.trim()));
//         displayArray();
//       });
//     });
//   }
  
//   function displayArray() {
//     console.log("Array values:", array.join(', '));
//     rl.close();
//   }
  
//   function main() {
//     getArray();
//   }
  
//   main();

//////////////////////////

// rl.question("Enter a number: ", (input: string) => {
//     const number: number = parseInt(input);
//     let isPrime = true;
    
//     if (number <= 1) {
//       isPrime = false;
//     } else {
//       for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//           isPrime = false;
//           break;
//         }
//       }
//     }
    
//     if (isPrime) {
//       console.log("Entered number is a Prime number");
//     } else {
//       console.log("Entered number is not a Prime number");
//     }
//     rl.close();
//   });

/////////////////////////

// class Calculator {
//   addition(a: number, b: number): number {
//     return a + b;
//   }
  
//   subtraction(a: number, b: number): number {
//     return a - b;
//   }
  
//   multiplication(a: number, b: number): number {
//     return a * b;
//   }
  
//   division(a: number, b: number): number {
//     return a / b;
//   }
// }

// function ResultFun() {
//   const calc = new Calculator();
  
//   console.log("1. Addition");
//   console.log("2. Subtraction");
//   console.log("3. Multiplication");
//   console.log("4. Division");
  
//   rl.question("Enter your choice: ", (choice: string) => {
//     rl.question("Enter first number: ", (num1: string) => {
//       rl.question("Enter second number: ", (num2: string) => {
//         const a = parseFloat(num1);
//         const b = parseFloat(num2);
        
//         switch (parseInt(choice)) {
//           case 1:
//             console.log(`Result: ${calc.addition(a, b)}`);
//             break;
//           case 2:
//             console.log(`Result: ${calc.subtraction(a, b)}`);
//             break;
//           case 3:
//             console.log(`Result: ${calc.multiplication(a, b)}`);
//             break;
//           case 4:
//             console.log(`Result: ${calc.division(a, b)}`);
//             break;
//           default:
//             console.log("Invalid choice");
//         }
//         rl.close();
//       });
//     });
//   });
// }

////////////////////////

// rl.question("Enter written test score: ", (written: string) => {
//     rl.question("Enter lab exam score: ", (lab: string) => {
//       rl.question("Enter assignment score: ", (assignment: string) => {
//         const writtenTest: number = parseFloat(written);
//         const labExams: number = parseFloat(lab);
//         const assignments: number = parseFloat(assignment);
        
//         const grade: number = (writtenTest * 70) / 100 + (labExams * 20) / 100 + (assignments * 10) / 100;
//         console.log(`Grade of the student is ${grade}`);
//         rl.close();
//       });
//     });
//   });

//////////////////////

//  rl.question("Enter the annual income: ", (input: string) => {
//     const income: number = parseFloat(input);
//     let tax: number = 0;
    
//     if (income <= 250000) {
//       tax = 0;
//     } else if (income <= 500000) {
//       tax = (income - 250000) * 0.05;
//     } else if (income <= 1000000) {
//       tax = 250000 * 0.05 + (income - 500000) * 0.20;
//     } else {
//       tax = 250000 * 0.05 + 500000 * 0.20 + (income - 1000000) * 0.30;
//     }
    
//     console.log(`Income tax amount = ${tax.toFixed(2)}`);
//     rl.close();
//   });

//////////////////

//  let num = 1;
//   for (let i = 1; i <= 4; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += num + "\t";
//       num++;
//     }
//     console.log(row);
//   }
//   rl.close();


/////////////////////////














