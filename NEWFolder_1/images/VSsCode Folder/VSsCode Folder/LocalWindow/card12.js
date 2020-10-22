
// console.log("Welcome to notes app. This is app.js");



// // // If user adds a note, add it to the localStorage
let addBtn = document.getElementById("btn");
let tt=document.getElementById('title');
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notesObj;
  let notes = localStorage.getItem("NoteBook");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let obj11={
    title: tt.value,
    text:addTxt.value
  }
  notesObj.push(obj11);
  // notrsObj.push(addTxt.value);
  // //   localStorage.clear();
  localStorage.setItem("NoteBook", JSON.stringify(notesObj));
  addTxt.value = " ";
  // will clear the text after submit
  tt.value=" ";
  // console.log(notesObj);
  // e.preventDefault();
  showData();
});


function showData() {
  let notes = localStorage.getItem("NoteBook");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let h = "";
  notesObj.forEach(function (element, index) {

    h += `<div class="noteCard" id="note" style="width:18rem ; margin:5px">         
                   <div class="card-body" >
                <h4 class="card-header" id="hd1">Header-${index + 1}</h4>
                <h5 class="card-title" > ${index +1 } . ${element.title}</h5>
                <p class="card-text" id="test1">${element.text}</p>
                <button class="btn btn-primary" id="${index}" onclick="delNotes(this.id)" >DeleteNotes</button>
                <div class="card-footer">Footer</div>
               </div>
          
            </div>`;

  });
  let elm = document.getElementById("cc");

  if (notesObj.length != 0) {

    elm.innerHTML = h;

    //  localStorage.clear();
  }
  else {
    elm.innerHTML = `Nothing notes U have Written`;
  }
} 

function delNotes(index) {
  // console.log("Iam Deleting", index);
  let notesObj;
  let notes = localStorage.getItem("NoteBook");
  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);

  localStorage.ssetItem("NoteBook", JSON.stringify(notesObj));
  showData();

}

// Search function
  let inp=document.getElementById("name1");
  let btn=document.getElementById("btn1");
  var d=document.getElementById('f');
                      //Given event to Button  btn.addEventListener('click', function(e){
                
    inp.addEventListener('input', function(e){
    let inp1=inp.value.toLowerCase();
    // console.log("Input fired", inp.value);
    let noteCard=document.getElementsByClassName("noteCard");
    Array.from(noteCard).forEach(function(element){
      let cardTxt=element.getElementsByTagName('p')[0].innerText;
      if(cardTxt.includes(inp1)){
        element.style.display= "block";
        // d.style.display="none";

      }
      else{
        // d.style.display= "Sory Nothing we Have Found......!!!!!";
        element.style.display= "none";
      
      }

            // console.log(cardTxt);
    });
 e.preventDefault();
 
  })


function getstorage() {
  var m = document.getElementById('demo');
  m.innerHTML = localStorage.getItem("NoteBook")
  // console.log(localStorage.getItem("NoteBook"));
  // document.write(localStorage.getItem("NoteBook"));
}


function clearstorage() {
  var m = document.getElementById('demo');
  m.innerHTML = localStorage.clear();
  m.innerHTML = "You Have Cleareed the U r  local Storage Data";
  // console.log(localStorage.clear());
}





// // /*
// // Further Features:
// // 1. Add Title
// // 2. Mark a note as Important
// // 3. Separate notes by user
// // 4. Sync and host to web server 
// // */ 

 
// console.log("Welcome to notes app. This is app.js");
// showNotes();

// // If user adds a note, add it to the localStorage
// let addBtn = document.getElementById("addBtn");
// addBtn.addEventListener("click", function(e) {
//   let addTxt = document.getElementById("addTxt");
//   let notes = localStorage.getItem("notes");
//   if (notes == null) {
//     notesObj = [];
//   } else {
//     notesObj = JSON.parse(notes);
//   }
//   notesObj.push(addTxt.value);
//   localStorage.setItem("notes", JSON.stringify(notesObj));
//   addTxt.value = "";
// //   console.log(notesObj);
//   showNotes();
// });

// // Function to show elements from localStorage
// function showNotes() {
//   let notes = localStorage.getItem("notes");
//   if (notes == null) {
//     notesObj = [];
//   } else {
//     notesObj = JSON.parse(notes);
//   }
//   let html = "";
//   notesObj.forEach(function(element, index) {
//     html += `
//             <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
//                     <div class="card-body">
//                         <h5 class="card-title">Note ${index + 1}</h5>
//                         <p class="card-text"> ${element}</p>
//                         <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
//                     </div>
//                 </div>`;
//   });
//   let notesElm = document.getElementById("notes");
//   if (notesObj.length != 0) {
//     notesElm.innerHTML = html;
//   } else {
//     notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
//   }
// }

// // Function to delete a note
// function deleteNote(index) {
// //   console.log("I am deleting", index);

//   let notes = localStorage.getItem("notes");
//   if (notes == null) {
//     notesObj = [];
//   } else {
//     notesObj = JSON.parse(notes);
//   }

//   notesObj.splice(index, 1);
//   localStorage.setItem("notes", JSON.stringify(notesObj));
//   showNotes();
// }


// let search = document.getElementById('searchTxt');
// search.addEventListener("input", function(){

//     let inputVal = search.value.toLowerCase();
//     // console.log('Input event fired!', inputVal);
//     let noteCards = document.getElementsByClassName('noteCard');
//     Array.from(noteCards).forEach(function(element){
//         let cardTxt = element.getElementsByTagName("p")[0].innerText;
//         if(cardTxt.includes(inputVal)){
//             element.style.display = "block";
//         }
//         else{
//             element.style.display = "none";
//         }
//         // console.log(cardTxt);
//     })
// })

/*
Further Features:
1. Add Title
2. Mark a note as Important
3. Separate notes by user
4. Sync and host to web server 
*/ 