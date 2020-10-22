 
console.log("Welcome to notes app. This is app.js");



// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("btn");
addBtn.addEventListener("click", function(e) {
  let addTxt = document.getElementById("addTxt");
  let notesObj;
  let notes = localStorage.getItem("NoteBook");
   if (notes == null) {
            notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
//   localStorage.clear();
  localStorage.setItem("NoteBook", JSON.stringify(notesObj));
  addTxt.value = "";
  console.log(notesObj);
  // e.preventDefault();
 showData();
});


function showData(){
  let notes = localStorage.getItem("NoteBook");
  if (notes == null) {
           notesObj = [];
 } else {
   notesObj = JSON.parse(notes);
 }
 let h = "";
 notesObj.forEach(function(element, index){

h +=`<div class="card" style="width:18rem ; margin:5px">         
                   <div class="card-body" >
                <div class="card-header">Header-${index + 1}</div>
                <div class="card-title">Title ${index + 1}</div>
                <div class="card-text">${element}</div>
                <button class="btn btn-primary" id="${index}" onclick="delNotes(this.id)" >DeleteNotes</button>
                <div class="card-footer">Footer</div>
               </div>
          
            </div>`;

 });
 let elm=document.getElementById("cc");
 
 if(notesObj.length != 0){
  
  elm.innerHTML = h;
  
//  localStorage.clear();
 }
 else{
  elm.innerHTML= `Nothing notes U have Written`;
 }
 }
 
function delNotes(index){
  console.log("Iam Deleting", index);
  let notesObj;
  let notes = localStorage.getItem("NoteBook");
   if (notes == null) {
        notesObj = [];
  } 
  else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  
  localStorage.setItem("NoteBook", JSON.stringify(notesObj));
  showData();

}

 

 function getstorage(){
  var m=document.getElementById('demo');
  m.innerHTML=localStorage.getItem("NoteBook")
  console.log(localStorage.getItem("NoteBook"));
  // document.write(localStorage.getItem("NoteBook"));
}


function clearstorage(){
  var m=document.getElementById('demo');
  m.innerHTML=localStorage.clear();
  m.innerHTML="You Have Cleareed the U local Data";
  console.log(localStorage.clear());
}





// /*
// Further Features:
// 1. Add Title
// 2. Mark a note as Important
// 3. Separate notes by user
// 4. Sync and host to web server 
// */ 