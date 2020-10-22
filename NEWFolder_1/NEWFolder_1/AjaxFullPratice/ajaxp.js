
console.log("Ajax tutorial in one video");
let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
     console.log('You have clicked the fetchBtn');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

                                 // USE THIS FOR POST REQUEST
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json');


    // What to do on progress (optional)
    xhr.onprogress = function(){
        console.log('On progress');
    }


    // xhr.onreadystatechange = function () {
    //     console.log('ready state is ', xhr.readyState);
        
    // }

    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200 && this.readyState === 4){

            console.log(this.responseText)
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    params = `{"name":"test34sad545","salary":"123","age":"23"}`;
    xhr.send(params);

    console.log("We are done!");

}
                                                    //Fetching The Data 

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);


    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200 && this.readyState === 4){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            let str = "";
            for (var key in obj)
            {
                str += `<li>${obj[key].employee_name} </li>`;
               
            }
            
            list.innerHTML = str;
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    xhr.send();
    console.log("We are done fetching employees!");
    
}

                        



                                                    // Fetching Data
// var btn1 = document.getElementById("btn1");
// var btn2 = document.getElementById('btn2');
// btn1.addEventListener('click', funn1);
// btn2.addEventListener('click', funn2)

// // function funn1() {
// //     var xhr = new XMLHttpRequest();
// //     xhr.onload = function () {
// //         if (this.status === 200 && this.readyState === 4) {
// //             let obj = JSON.parse(this.responseText);
// //             console.log(obj);

// //             let md = document.getElementById("list");
// //             let str;
// //             var key = "";
// //             for (key in obj) {
// //                 console.log(obj[key].employee_name)
// //                 str += `<li> ${obj[key].employee_salary} </li>`;
// //                 md.append(str);

// //             }
// //             md.innerHTML = str;
// //             console.log("Status Done");
// //         } else {
// //             console.log("Error Occured");
// //         }

// //     }
// //     xhr.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true);

// //     xhr.send();
// // }

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
            
