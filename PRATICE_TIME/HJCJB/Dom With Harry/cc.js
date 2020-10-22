showData();
let inp1=document.getElementById('txt1');
let fm1=document.getElementById('fm');
fm1.addEventListener("submit", (e)=>{
  let inpVal=inp1.value;
  
  let webStorage=localStorage.getItem('localData');
  let notesObj;

  if(inpVal.length >=4){
  if(webStorage == null){
    notesObj=[];
  }
  
  else{
    notesObj=JSON.parse(webStorage);  
  }
}

  notesObj.push(inpVal);
  localStorage.setItem("localData", JSON.stringify(notesObj));

  inp1.value= "";
  showData();
  e.preventDefault();
})

function showData(){

  let webStorage=localStorage.getItem('localData');
  
  if(webStorage == null){
    notesObj=[];
  }
  else{
    notesObj=JSON.parse(webStorage);
  }
  let h="";
  notesObj.forEach((ele, ind)=>{
                        h += `<tr>
                          <td>${ind}</td>
                            <td>${ele}</td>
                            <td><button onClick="editTask(${ind})" type="button">Edit</button></td>
                            
                            <td><button onClick="deleteTask(${ind})" type="button">Delete</button></td>
                            </tr>`;
  })
  document.getElementById('res1').innerHTML = h;

  

}
function editTask(ind){
  let updateBtn1=document.getElementById('uBtn');
  let addBtn1=document.getElementById('aBtn');
  updateBtn1.style.display="block";
  addBtn1.style.display="none";


  // console.log(ind);
  
  let webStorage=localStorage.getItem('localData');
  let pData=JSON.parse(webStorage);

  let inp1=document.getElementById('txt1');
  let inp2=document.getElementById('txt2');
  //  inp2.value = pData[ind];
   inp2.value=ind; 
  // inp1.value=ind;
  inp1.value=pData[ind];
  

  
  // updatingData

let updateBtn2=document.getElementById('uBtn');

let addBtn2=document.getElementById('aBtn');


updateBtn2.addEventListener('click', ()=>{
  updateBtn2.style.display="none"
  addBtn2.style.display="block";

  let webStorage=localStorage.getItem('localData');
  let pData=JSON.parse(webStorage);

  let fld1=document.getElementById('txt1');
  let fld2=document.getElementById('txt2').value;
 

  pData[fld2] = fld1.value;
  localStorage.setItem('localData', JSON.stringify(pData));
  fld1.value = "";
  showData();
  

})
}

function deleteTask(ind){
  let webStorage=localStorage.getItem('localData');
  let pData=JSON.parse(webStorage);
  pData.splice(ind,1)
  localStorage.setItem('localData', JSON.stringify(pData));
  showData();
}


document.getElementById('dBtn').addEventListener('click', ()=>{
  let webStorage=localStorage.getItem('localData');
  let noteObj = JSON.parse(webStorage);
  
  if(webStorage != 0 ){
    noteObj=[];

  }
  else{
    noteObj = JSON.parse(webStorage);
    noteObj=[]; 
  }
  let addBtn=document.getElementById('aBtn').style.display = "block";
  
  let sBtn=document.getElementById('uBtn').style.display = "none";
  localStorage.setItem('localData', JSON.stringify(noteObj))
  showData();
})

// SearchBox here

let sb=document.getElementById('sBox');
sb.addEventListener("keypress", ()=>{
  var inp=document.getElementById('sBox').value.toUpperCase();
  var stble=document.getElementById('tble');
  let tr=stble.getElementsByTagName('tr');
  let td = "";
  for(var i=1; i<tr.length;i++){
     td= tr[i].getElementsByTagName('td')[1];
    if((td.textContent || td.innerHTML).toUpperCase().indexOf(inp) != -1){  
        tr[i].style.display = "show";
          } else{
          tr[i].style.display = "none";

        }
    }
      });
 
           
          










  
 





// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//     // var tp2=document.getElementById('res2');
//     // arr1.forEach((elmnt, ind) => {
   
//     //     tp2.innerHTML += `
//     //                <div class ="container">
//     //                <div>${ind}</div>
//     //               <div>${elmnt}</div>
//     //             </div> `;
//     // });

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++      

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                                                                        // Adding Data To table
// let tf1=document.getElementById('txt11');
// let tf2=document.getElementById('txt12');
// let otp=document.getElementById('res1');
// let sm=document.getElementById('fm').addEventListener('submit', (e)=>{
//    otp.innerHTML += `<tr><td>${tf1.value}</td><td>${tf2.value}</td></tr>`
//     e.preventDefault()
// })

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                                                                    // PR1
// let tf1=document.getElementById('txt11');
// let tf2=document.getElementById('txt12');
// let otp=document.getElementById('res1');

// var hc="";
// let fm1=document.getElementById('fm').addEventListener('submit', (e)=>{
// otp.innerHTML += tf1.value+ tf2.value;
// e.preventDefault();
// })
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 
                                                                            // Sample

// let tf1=document.getElementById('txt21');
// let tf2=document.getElementById('txt22');
// let db1=document.getElementById('res2');
// let txtfld1=document.getElementById('btn2').addEventListener('click', ()=>{
//     db1.innerHTML += tf1.value + tf2.value;
// })
        

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 
                                                                // PR2
// let tf1=document.getElementById('txt31');
// let tf2=document.getElementById('txt32');
// let db=document.getElementById('res3');
// let fm=document.getElementById('sm').addEventListener("submit", (e)=>{
//     db.innerHTML += tf1.value + tf2.value;
//     e.preventDefault();
// })






