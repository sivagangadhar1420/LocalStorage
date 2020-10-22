
 var inp1=document.getElementById('num');
 var inp2=document.getElementById('uname');
 var inp3=document.getElementById('umail');
 var d2=document.getElementById('tab')
 var btn=document.getElementById("btn1");
 var opd=document.getElementById("op");
 btn.addEventListener('click', funn1);

 function funn1(){
   const key=inp1.value;
   const val1=inp2.value;
   const val2=inp3.value;
if( key && val1 && val2){
    localStorage.setItem(key, val1, val2);
    
    location.reload();
    // localStorage.clear();
}


}
 for(var i=0; i<localStorage.length; i++){
     const key=localStorage.key(i);
     const val1=localStorage.getItem(key);
     const val2=localStorage.getItem(key);
 
     opd.innerHTML += `${key} : ${val1} - ${val2}<br>`
    //  localStorage.clear()
    }

    
  
    

// var mn=document.getElementsByTagName('h1')[0];
// let a={name:"john", gender:"Male", age:30};
// var dm= JSON.stringify(a);
// localStorage.setItem("dataEntites",dm);
// let yobj=localStorage.getItem(a);
// console.log(yobj);



// var d=JSON.stringify(a);
// localStorage.setItem("Data1",d);
// console.log(localStorage.getItem('key(0)'));
// console.log(md)




// var h=document.getElementsByTagName('h1')[0];
// localStorage.setItem('Name', 'Johnnnys');
// console.log(localStorage.getItem('Name'));
// console.log(localStorage);

// let a={name:"john" , nickname:"Jo", gender:"Male"}
// var d=JSON.stringify(a);
// localStorage.setItem("Data", d);

// console.log(localStorage.getItem('key(1)'))
// let m=JSON.parse(localStorage.getItem(a));
// console.log(m)


// Get & Set Items
// localStorage.setItem("Sports", 'cricket');
// console.log(localStorage.getItem('Sports'));

// SessionStorage  
// sessionStorage.setItem('name:', "Shows");
// console.log(sessionStorage.getItem('name:'));
// console.log(sessionStorage.key(0))
// localStorage.clear();
// localStorage.removeItem('name')
