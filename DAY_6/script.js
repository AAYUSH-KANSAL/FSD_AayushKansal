// // // // // let arr= [1,2,3,34,33,45];
// // // // // // let newar=arr.map((x)=>x*2);
// // // // // // console.log(newar)
// // // // // let newar=arr.filter((x)=>x%2==0);
// // // // // console.log(newar)

// // // let arr = [1, 2, 3, 34, 33, 45];
// // // // let newar = arr.filter((x) => x % 2 === 0).map((x) => x * 3);
// // // // console.log(newar);


// // //  let newar= arr.reduce ((x,y)=>x+y,0);
// // //  console.log(newar);



// // let arr = [1, 2, 3, 34, 33, 45];

// // let newar = arr
// //   .filter((x) => x % 2 === 0)  
// //   .map((x) => x * 4)           
// //   .reduce((sum, x) => sum + x, 0);   

// // console.log(newar);






 
 
// const students = [
//     { name: 'Alice', score: 50 },
//     { name: 'Bob', score: 65 },
//     { name: 'Charlie', score: 85 },
//     { name: 'David', score: 45 }
//   ];
  
//   const totalScore = students
//     .filter(student => student.score > 60)   
//     .map(student => student.score * 2)       
//     .reduce((sum, score) => sum + score, 0); 
  
//   console.log(totalScore);
  




// sayhello =()=>{
//     console.log("helo world")
// };
// console.log("start")
// setTimeout(sayhello, 4000);
// console.log("End")

console.log("start");

// setTimeout(() => {
//     console.log("first task complete");  // Will run after 3 seconds (3000 ms)
    
//     setTimeout(() => {
//         console.log("second task completed");  // Will run 6 seconds after first task
        
//         setTimeout(() => {
//             console.log("third task complete");  // Will run 3 seconds after second task
//         }, 3000);
        
//     }, 6000);

// }, 3000);

// const myPromise = new Promise((resolve, reject) => {
  
//     let success = true; 
  
//     if (success) {
//       resolve("Data sent successfully");
//     } else {
//       reject("Data failed");
//     }
//   });
  
  
//   myPromise
//     .then((message) => {
//       console.log(message); 
//     })
//     .catch((error) => {
//       console.log(error); 
//     });



// function task(message, delay) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log(message);
//         resolve();
//       }, delay);
//     });
//   }
  
//   task("First task completed", 1000)
//     .then(() => task("Second task completed", 2000))
//     .then(() => task("Third task completed", 3000));
  

 

  const students = [
    { name: 'Alice', score: 50 },
    { name: 'Bob', score: 65 },
    { name: 'Charlie', score: 85 },
    { name: 'David', score: 45 }
  ];
  
  function getStudents() {
    return new Promise((resolve) => {
      resolve(students);
    });
  }
  
  getStudents()
    .then((data) => {
      console.log(data);
    });
  