// console.log("OK working")
// var btn=document.getElementById('btn');
// // var ut=document.getElementById('ut');
// // var pt=document.getElementsByTagName('p')[0];
// btn.addEventListener('click', function(e){
//     // ut.innerHTML = txta.value;
    
//     var txta=document.getElementById('txt1').value;
//     var ls=localStorage.getItem("notes");
//     var objdata;
//     if( ls == null){
//      objdata = [];
//     }
//     else{
//         objdata= JSON.parse(ls);
//     }
//      objdata.push(txta);
//      localStorage.setItem("notes", JSON.stringify(ls));
//      txta.value= '';
//      console.log(ls)

//     })
// console.log("Welcome To Note app");
// var addBtn=document.getElementById('btn').addEventListener("click", function(e){
//             let addTxt = document.getElementById('txt1');
//             let notes= localStorage.getItem("notes");
//             var notesObj;
//             if(notes == null){  
//                 notesObj = [];
//             }
//             else{
//                 notesObj = JSON.parse(notes);
//             }
//             notesObj.push(addTxt.value);
//             localStorage.setItem('notes',JSON.stringify(notes));
//             addTxt.value="";
//             console.log(notesObj)
// })