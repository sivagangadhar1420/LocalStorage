

function Details(names, author, type,select) {
    this.names = names;
    this.author = author;
    this.type = type;
    this.select=select;
}
function DisplayBook(){

}

 DisplayBook.prototype.add=function(book){
 console.log("Adding To UI");
 var tblbody=document.getElementById('tblb');
 var data= `<tr> <td>${book.names}</td><td>${book.author}</td><td>${book.type}</td><td>${book.select}</td></tr>`;
 tblbody.innerHTML += data;
 }
 DisplayBook.prototype.clear=function(){
 var fd = document.getElementById('fm1');
 fd.reset();

 }
 DisplayBook.prototype.validate=function(book){
     if(book.names.length <=2 || book.author.length <=2){
         return false;
        }
     else{
         return true;
     }

 }
DisplayBook.prototype.alertmessage=function(type, message){
        var lt=document.getElementById('am');
        lt.innerHTML=`<div class="alert alert-${type} alert-dismissible fade-show">
                            <strong>Alert :</strong> ${message} 
                             <button type="button" class="close" data-dismiss="alert"><span>&times;</button> 
                    </div>`;

                    setTimeout(()=>{
                        lt.innerHTML=""
                    },2000);
                    
                }
var fd = document.getElementById('fm1');
fd.addEventListener('submit', (e) => {
    var tf1 = document.getElementById('name').value;
     var tf2= document.getElementById('email').value;
    var c1 = document.getElementById('r1');
    var c2 = document.getElementById('r2');
    var c3 = document.getElementById('r3');

     let ty;
    if (c1.checked) {
        ty = c1.value;
    }
    else if (c2.checked) {
        ty = c2.value;
    }
    else if (c3.checked) {
        ty = c3.value;
    }
    var sel=document.getElementById('s1').value;
    var d1 = new Details(tf1, tf2, ty, sel);
    console.log(d1);
                                                            // console.log(tf1, tf2, tv);
    
        var chek=new DisplayBook(); 
        if(chek.validate(d1)){
            chek.add(d1);
            chek.clear();
            chek.alertmessage('success', 'Successfully added to your book to u r list')
        }
       else{
           chek.alertmessage('danger', 'Soory.. You cannot Enter this book to Your List')

       }
        e.preventDefault();


});


        

                                                    // //ES6 Classes

                                                    // 
// class Book{
//              constructor(name, author, type, select){
//                  this.name=name;  
//                  this.author=author; 
//                  this.type=type;  
//                  this.select=select;
//              }   
//     }
//     class Display{
//         add(book){
//         console.log("Adding To UI");
//         let tblb=document.getElementById('tblb');
//         let str=`<tr> <td>${book.name}</td><td>${book.author}</td><td>${book.type}</td><td>${book.select}</td></tr>`;
//         tblb.innerHTML +=str;
//     }
//     clear(){
//         let fd = document.getElementById('fm1');
//         fd.reset();
//     }

// }