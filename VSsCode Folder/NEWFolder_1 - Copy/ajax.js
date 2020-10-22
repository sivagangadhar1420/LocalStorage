// var ages=[1990,1980,1970,1986];
// var d=ages.forEach(funn1)
// function funn1(m,i,ar){
//     ar[i]=m + 10;
//    }
// console.log(ages)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++
// var a=[10,20,30,40];
// var sum=0;
// a.forEach(funn1);
// function funn1(m){
// sum += m;
// console.log(sum)
// }
// console.log(sum)
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//Map
// var min=0;
// var a=[10,20,30,40];
// var b=a.map(funn1);

// function funn1(m){
//     min -=  m 
// // arr[ind]=m * arr[ind];
// console.log(min)
//     // var g=  2020-m
//     // console.log(g+ " " + ind)
// }
// console.log(min);


//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


 //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  


// console.log("Print the Text in ajax style")
//                                                                 // var fd=document.getElementsByTagName("button")[0]
//                                                                 //     .addEventListener("click", ()=>{
//                                                                 //     console.log("you have clicked th button");

// let btn=document.getElementById("fb"); 
// btn.addEventListener("click", buttonclickhandler);

// function buttonclickhandler(){
// console.log("you have clicked the button");
// //Initiate an xhr object
//  const xhr=new XMLHttpRequest();
//  //console.log(aj);
//  xhr.open('GET', 'harry.html', true);   //open //abort

//  // What do on progress(optional)
//    xhr.onprogress=function(){
//     console.log('On progress')
//     }
//  //Onload
//     xhr.onload=function(){
//      console.log(this.responseText)
//     }
// //Send The request
//    xhr.send();         

// }
//    
// }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let btn=document.getElementById("fb"); 
// btn.addEventListener("click", buttonclickhandler);

// function buttonclickhandler(){

// var req=new XMLHttpRequest();
// req.open('GET' , 'harry.html', true);
// req.send();
// req.onreadystatechange= function(){
//     if(req.readyState == 4 && req.status == 200){
//         console.log(req.responseText);
//     }
// }
// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// var btn=document.getElementById("fb"); 
// btn.addEventListener("click", buttonclickhandler);

// function buttonclickhandler(){
// var req=new XMLHttpRequest();
// var url='harry.html'
// req.open('GET' , url, true);
// //req.header("Access-Control-Allow-Orgin", '*');
// req.send();
// req.onreadystatechange= function(){
//     if(req.readyState == 4 && req.status == 200){
//         document.write(this.responseText);
//     }
  
// }
// }
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//AJAX GET
// function loadDoc() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//         // document.getElementById("demo").innerHTML =
//         // this.responseText;
//         console.log(this.responseText + "<br>")
//       }
//     };
//     xhttp.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true);
//     xhttp.send();
//   }
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//   let btn=document.getElementById("fb"); 
// btn.addEventListener("click", buttonclickhandler);

// function buttonclickhandler(){
// console.log("you have clicked the button");
// //Initiate an xhr object
//  const xhr=new XMLHttpRequest();
//  console.log(aj);
//  xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);   //open //abort

//  //What do on progress(optional)

//    xhr.onprogress=function(){
//     console.log('On progress')
//     }


//  Onload

//     xhr.onload=function(){
//      if(xhr.readyState == 4 && xhr.status == 200){
//          console.log("Data Found")
//      }
//      else{
//          console.log("Error Occured")
//      }
//     }
// //Send The request
//    xhr.send();         

// }

   
//}
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxx

//PostData
// function fetchpost(){
//     var b=document.getElementById("fp");
//     console.log("Button was clicked");
//     var xm=new XMLHttpRequest();
//     xm.open('POST' , 'http://dummy.restapiexample.com/api/v1/create', true);
//     xm.getAllResponseHeaders('content-type', 'application/json');
//     xm.onprogress=function(){
//         console.log("On Progrss")
//     }
// xm.onload=function(){
//     if(this.readyState && this.status === 200){
// //if(this.readyState && this.status === 100){
//         document.getElementById("D1").innerHTML=this.responseText;
//     }
//     else{
//         console.log("someErrors Occured");
//     }
// }
// params=`{"name":"test" ,"salary":"123" , "age":"23"}`;
// xm.send(params)

// }
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//printing the particular Employee Details

// let btn=document.getElementById("fp"); 
// btn.addEventListener("click", buttonclickhandler);

// function buttonclickhandler(){
// console.log("you have clicked the button");
// //Initiate an xhr object
//  const xhr=new XMLHttpRequest();
//  //console.log(aj);
//  xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);   //open //abort

//  // What do on progress(optional)
// //    xhr.onprogress=function(){
// //     console.log('On progress')   
// //     }
//  //Onload
//     xhr.onload=function(){
//    //  console.log(this.responseText)
//    if(this.status == 200){
//     var obj=JSON.parse(this.responseText);
//    // console.log(this.responseText)
//     console.log(obj)
//      console.log("Status Done")
//      var ls=document.getElementById("list");
//      var str ="";
//    for(key in obj){
//       str += `<li>${obj[key].employee_name}</li>`;
         
//          ls.innerHTML=str;
//            }
     
//     }else{
//         console.log("Error Occured")
//     }
//     }
// //Send The request
//    xhr.send();  
//    console.log(" Sending the Information ")       

// }
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// //FETCH
// let btn=document.getElementById("fp"); 
// btn.addEventListener("click", buttonclickhandler);

// function buttonclickhandler(){
// console.log("you have clicked the button");
// //Initiate an xhr object

// //var url='https://www.metaweather.com/api/';
// // https://crossorigin.me  
//  // http://dummy.restapiexample.com/api/v1/employees 
//  //https://crossorigin.me/https://www.metaweather.com/api/location/2487956/

// fetch('https://dummy.restapiexample.com/api/v1/employees')
// .then(response=>{
// console.log(response)
// return response.json()
// }).then((data)=>{
//    console.log(data )
// }).catch(err =>{
//     console.log(err);
// })
// }

//Weather Report
// async function funn1(){
// var url='https://crossorigin.me/https://www.metaweather.com/api/location/2487956/'
//     var st=await fetch(url).then((vt)=>{
//         console.log(vt);
//     var d1=vt.json();
//     var d2=d1.consolidated_weather[0];
//     console.log(`temprature btw ${d1.title} and max temp ${d2.max_temp} & ${d2.min_temp}`)
//         return d1;
//     }).then((mt)=>{
//         console.log(mt)
//     })
// }
//  funn1();   