var fill=document.querySelector('.sp');
var empties=document.querySelectorAll('.whitebox')[0];

fill.addEventListener('dragstart' , funn1);
empties.addEventListener('dragend', funn2);
// empties.addEventListener('dragover' ,funn3);
//     empties.addEventListener('dragenter' ,funn4);
//     empties.addEventListener('dragleave' ,funn5);
//     empties.addEventListener('drop' ,funn6);

function funn1(f){
    f.className += 'hold';
    setTimeout(()=>{
        this.className = 'invisible';
    },0)
    console.log("Dragstart");
}
function funn2(){
    console.log("End");
}



                                                                                            // function funn3(f){
                                                                                            //     f.className += 'hold';
                                                                                            //     setTimeout(()=>{
                                                                                            //         this.className = 'invisible';
                                                                                            //     },0)
                                                                                            //     console.log("Dragstart");
                                                                                            // }
                                                                                            // function funn4(f){
                                                                                            //     f.className += 'hold';
                                                                                            //     setTimeout(()=>{
                                                                                            //         this.className = 'invisible';
                                                                                            //     },0)
                                                                                            //     console.log("DragEnter");
                                                                                            // }
                                                                                            // function funn5(f){
                                                                                            //     f.className += 'hold';
                                                                                            //     setTimeout(()=>{
                                                                                            //         this.className = 'invisible';
                                                                                            //     },0)
                                                                                            //     console.log("DragLeave");
                                                                                            // }
                                                                                            // function funn6(f){
                                                                                            //     f.className += 'hold';
                                                                                            //     setTimeout(()=>{
                                                                                            //         this.className = 'invisible';
                                                                                            //     },0)
                                                                                            //     console.log("Drop");
                                                                                            // }


// for(var i=0; i<empties.length; i++){
//     var cit=empties[i];
 for(var vide of empties){
     vide.addEventListener('dragover' ,funn3);
     vide.addEventListener('dragenter' ,funn4);
     vide.addEventListener('dragleave' ,funn5);
     vide.addEventListener('drop' ,funn6);
 
 
     function funn3(e){
         e.preventdefault();
         console.log("Over");
     
     }
     function funn4(){
         console.log("enter");
         
     }
     function funn5(){
         console.log("leave");
     }
     function funn6(){
         console.log("drop");   
     
     }}
    