console.log("Done");
let dp1 = document.getElementById('dp1');
const xhr = new XMLHttpRequest();
let source = 'bbc-news';
let apikey = 'd093053d72bc40248998159804e0e67d';


// // const url='http://dummy.restapiexample.com/api/v1/employees';

// // 'https://newsapi.rg/v2/top-headlines?source=bbc-news&apikey=d093053d7bc40248998159804e0e67d';
let url = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`;

xhr.open("GET", url, true);
xhr.onload = function () {
  if (this.status === 200) {
    let obj1 = JSON.parse(this.responseText);
    console.log(obj1);
    // let art=obj1.totalResults;

    let art = obj1.articles;
    console.log(art);
    // let brt=obj1.

    let menu = document.getElementById('menu');
    let artp = "";
    for(var news in art){ 
        artp +=`<div class="accrodian">
      <div class="card">
      <div class="card-body">
      <div class="card-header">
       <div class="badge bg-primary">${art[news].title}</div>
      <button class="btn btn-link" data-toggle="collapse"  data-target="#txt1">TouchMe</button>
      </div>
      <div class="card-text" >
     <p id="txt1" class="collapse">${art[news].content},,,,<a href="${art[news].url}"  >ReadMore</a>
      </p></div>

    </div></div>`;



    artp += `<li>${art[news].title}</li>`;

    console.log(art[news].title);

    artp += `${art[news].title}`;
    artp = art[news];
    }

    // ForEach 
    // art.forEach((element, index) => {
    //   artp += `
    // <div class="card">
    // <div class="card-body">
    // <div class="card-header">
    //   <div class="badge bg-primary">${index + 1} - ${element['title']}</div>
    // <button class="btn btn-link collapsed" type="button" data-toggle="collapse"  data-target="#txt1${index}">TouchMe</button>
    // </div>
    // <div class="card-text" >
    // <p id="txt1${index}" class="collapse"  data-parent="#dp1">${element['content']},,,,<a href="${element['url']}" target="_blank" >ReadMore</a>
    // </p></div>
    // </div>`;
    // });
    // dp1.innerHTML += artp;

    //        // menu.innerHTML=artp;

    //           // console.log(artp);


    //           // console.log(this.readyState);
    //           // console.log(this.status);

  }
  else {
    console.log("Some Coonetins Problms")
  }
}
xhr.send();
console.log("We are done fetching employees!");



// var mc=document.getElementById( 'txt3');
// mc.style.backgroundColor="red";
// mc.setAttribute('class', 'cl1'); 

//  let m=`<div class="accrodian">
/* <div class="card">
<div class="card-body">
<div class="card-header">
 <div class="badge bg-primary">BreakingNews..!!</div>
<button class="btn btn-link" data-toggle="collapse" arai-expanded="true" arai-controls="txt4" data-target="#txt1">TouchMe</button>
</div>
<div class="card-text" >

<p id="txt1" class="collapse" >The News readers,,,,<a href="#" target="blank" >ReadMore</a>
</p></div>

</div></div>
<div class="card">
<div class="card-body">
<div class="card-header">
<div class="badge bg-primary">BreakingNews..</div>
<button class="btn btn-link" data-toggle="collapse" arai-expanded="true" arai-controls="txt4" data-target="#txt2">TouchMe</button>
</div>
<div class="card-text">

<p id="txt2" class="collapse">The News readers  <a href="#">ReadMore</a>
</p></div>

</div></div>
<div class="card">
<div class="card-body">
<div class="card-header">
<div class="badge bg-primary">BreakingNews,,,</div>
<button class="btn btn-link" data-toggle="collapse" arai-expanded="true" arai-controls="txt4" data-target="#txt3">TouchMe</button>
</div>
<div class="card-text" >

<p id="txt3"  class="collapse"  > The News readers <a href="#" target="blank" >ReadMore</a> </p></div>
</div></div>
<div class="card">
<div class="card-body">
<div class="card-header">
<div class="badge bg-primary">BreakingNews</div>
<button class="btn btn-link" data-toggle="collapse"  arai-expanded="true" arai-controls="txt4" data-target="#txt4">TouchMe</button>
</div>
<div class="card-text">
<p id="txt4" class="collapse">The News readers#####  <a href="#" target="blank" >ReadMore</a></p></div>

</div></div>

</div>  */
























