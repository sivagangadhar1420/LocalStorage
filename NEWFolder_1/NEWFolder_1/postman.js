console.log("Done");
let addedparamsCount = 0;
function getElementFromString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}

var gr1 = document.getElementById('grid1');
document.getElementById('custom').style.display= 'none';
gr1.addEventListener('click', () => {
    document.getElementById('custom').style.display = "none";
    document.getElementById('js').style.display = "block";

})

var gr2 = document.getElementById('grid2');
gr2.addEventListener('click', () => {
    
    document.getElementById('js').style.display = "none";
    document.getElementById('custom').style.display = "block";
    document.getElementById("js").style.marginTop = "-2rem";


})
let trbtn = document.getElementById('tarbtn');
trbtn.addEventListener('click', () => {
    let opt = document.getElementById('otpt');
    let vals = ` <div class="form-group row" >
    <label for="btntxt" class="label-control col-sm-2">Parameter: ${addedparamsCount + 1}</label>
    <div class="col-sm-4">
    <input type="text" name="nn" id="parameterKey${addedparamsCount + 1}" placeholder="Enter parameter ${addedparamsCount + 1} key " class="form-control" ${addedparamsCount + 1}> 
    </div>
   <div class="col-sm-4">
      <input type="text" name="nn" id="parameterValue${addedparamsCount +1}" placeholder="Enter parameter ${addedparamsCount + 1 } value " class="form-control" ${addedparamsCount + 1}>
      </div>
      <button class="btn btn-primary deleteParam" id="deletebtn">--</button>
      </div>`;
    let prmElement = getElementFromString(vals);
    opt.appendChild(prmElement);
    //   console.log(prmElement);
    var del = document.getElementsByClassName('deleteParam');
    for (var itm of del) {
     itm.addEventListener('click', (e) => {
                e.target.parentElement.remove();
        })
    }
    addedparamsCount++;
})

let submit = document.getElementById('sub').addEventListener('click', () => {
    // document.getElementById('wt').innerHTML = " Plz Wait....";
    document.getElementById('wt').value = " Plz Wait.... Fetching Response";
    let url1 = document.getElementById('url').value;

    // let rt=document.getElementById('gridRadios1');
    // let ct=document.getElementById('gridRadios2');
    // let dt=document.getElementById('grid1');
    // let dt1=document.getElementById('grid2');

    // let rds;
    // if(rt.checked){
    //     rds= rt.value;
    // }
    // else if(ct.checked){
    //     rds = ct.value;
    // }
    // let dtf;
    // if(dt.checked){
    //     dtf = dt.value;
    // }
    // else if(dt1.checked){
    //     dtf = dt1.value;
    // }
    // console.log(url1, rds, dtf);

    // OR
    let rt = document.querySelector('input[name="requesttype"]:checked').value;
    let dt = document.querySelector('input[name="datatype"]:checked').value;
    // console.log(url1, rt, dt);

    if(dt == 'paramsdata'){
       dataObj = {};
        for (let i = 0; i < addedparamsCount + 1; i++) {
            if(document.getElementById('parameterKey' + (i+1)) != undefined) {
                let key = document.getElementById('parameterKey' + (i + 1)).value;
                let value = document.getElementById('parameterValue' + (i + 1)).value;
                dataObj[key] = value; 
            }
        }
        dataObj = JSON.stringify(dataObj);
    }
    else {
        dataObj = document.getElementById('requestJson').value;
    }

    // Log all the values in the console for debugging
    console.log('URL is ', url1);
    console.log('requestType is ', rt);
    console.log('contentType is ', dt);
    console.log('data is ', dataObj);
    
    if (rt == 'GET'){
        fetch(url1, {
            method: 'GET',   
        })
        .then(res=> res.text())
        .then((txt) =>{
            // document.getElementById('responseJsonText').value = text;
            document.getElementById('wt').value = txt;

        });
    }
    else{
        fetch(url1, {
            method: 'POST', 
            body: dataObj,
            headers: {
                "Content-type": "application/json"
              }  
        })
        .then(response=> response.text())
        .then((text) =>{
            // document.getElementById('responseJsonText').value = text;
            var tt=document.getElementById('wt');
            tt.value= text;

            // Prism.highlightAll();
        });

    }


});




// https://jsonplaceholder.typicode.com/post
// {"title":"foo", "body":"bar", "userId":1}
