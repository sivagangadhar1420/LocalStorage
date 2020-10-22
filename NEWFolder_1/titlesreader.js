console.log("Done");
let dp1=document.getElementById('menu');
// const xhr = new XMLHttpRequest();
// let source='bbc-news';
// let apikey='d093053d72bc40248998159804e0e67d';



// // 'https://newsapi.rg/v2/top-headlines?source=bbc-news&apikey=d093053d7bc40248998159804e0e67d';
// let url=`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`;
//      xhr.open("GET", url, true);
//      xhr.onload = function () {
//         if(this.status === 200) {
//           let obj1= JSON.parse(this.responseText);
//           console.log(obj1);

//         //   let art=obj1.totalResults;
//         //   console.log(art);
          
//           let art1=obj1.articles;
//         //   console.log(art1);

//         // // console.log(this.readyState);
//       // // console.log(this.status);
//             let st1="";
//             for(var titl in art1){
//                 st1 += `<li>${art1[titl].title}</li>`;
//             }
//                 dp1.innerHTML += st1;
//         }
//     }
      
//     xhr.send();
//     console.log("We are done fetching employees....");
  

  


//     // Instantiate an xhr object

    // const xhr = new XMLHttpRequest();
    // xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);

    // What to do on progress (optional)

    // xhr.onprogress = function(){
    //     console.log('On progress');



    // xhr.onreadystatechange = function () {
    //     console.log('ready state is ', xhr.readyState);
        
    // }

    // What to do when response is ready

        // xhr.onload=function() {
        // if(this.status === 200){
        //         var obj1=JSON.parse(this.responseText);
        //         // console.log(obj1);
        //         let list=document.getElementById('menu');
        //         let emp1=obj1.data;
        //         console.log(emp1)
        //          menulist="";
        //         for(key in emp1){
        //             menulist += `<li>${emp1[key].employee_name}</li>`
        //         }
        //                 list.innerHTML += menulist;
        //     }

               
        // }  
        // xhr.send();
                                               













//Fetching The Data 

// let popBtn = document.getElementById('popBtn');
// popBtn.addEventListener('click', popHandler);

// function popHandler() {
//     console.log('You have clicked the pop handler');

//     // Instantiate an xhr object
//     const xhr = new XMLHttpRequest();

//     // Open the object
//     xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);


//     // What to do when response is ready
//     xhr.onload = function () {
//         if(this.status === 200 && this.readyState === 4){
//             let obj = JSON.parse(this.responseText);
//             console.log(obj);
//             let list = document.getElementById('list');
//             let str = "";
//             for (var key in obj)
//             {
//                 str += `<li>${obj[key].employee_name} </li>`;
//                }
               
            
//             list.innerHTML = str;
//         }
//         else{
//             console.log("Some error occured")
//         }
//     }

//     // send the request
//     xhr.send();
//     console.log("We are done fetching employees!");
    
// }

                        



                                                    // Fetching Data

    // var xhr = new XMLHttpRequest();
    // xhr.onload = function () {
    //     if (this.status === 200 && this.readyState === 4) {
    //         let obj = JSON.parse(this.responseText);
    //         console.log(obj);

    //         let md = document.getElementById("list");
    //         let str;
    //         var key = "";
    //         for (key in obj) {
    //             console.log(obj[key].employee_name)
    //             str += `<li> ${obj[key].employee_salary} </li>`;
    //             md.append(str);

    //         }
    //         md.innerHTML = str;
    //         console.log("Status Done");
    //     } else {
    //         console.log("Error Occured");
    //     }

    // }
    // xhr.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true);

    // xhr.send();

//                                             // Posting Data


//             // btn2.addEventListener('click', funn2);

//             // function funn2() {
//             //     var xhr = new XMLHttpRequest();
//             //     xhr.open("POST", "http://dummy.restapiexample.com/api/v1/employees", true);
//             //     xhr.getResponseHeader('Content-type', 'application/json');

//             //     xhr.onload = function () {
//             //         if (this.status === 200) {
//             //             let obj = this.responseText;
//             //             console.log(obj);
//             //             }
//             //     else{
//             //         console.log("Error Occured")
//             //     }
//             // }
               
//             //     var params= `{"employee_name":"Harshitha", "employee_salary":"300000"}`;
//             //     xhr.send(params);
//             // }
            
