
let fd = document.getElementById('fm1');
let n1 = document.getElementById('name');
let e1 = document.getElementById('email');
let num = document.getElementById('num1');
let n1f = false;
let e1f = false;
let numf = false;
n1.addEventListener("input", () => {
        let rege = /(^[a-zA-Z]{4,10})([0-9a-zA-Z@]){0,20}$/;
        let txt = n1.value;

        if (rege.test(txt)) {
                console.log("Matched");
                n1.classList.add('is-valid');
                n1.classList.remove('is-invalid');
                document.getElementById('s1').innerHTML = "";
                n1f = true;
        }
        else {
                console.log("notMatched");
                n1.classList.add('is-invalid');
                n1.classList.remove('is-valid');
                document.getElementById('s1').innerHTML = "Name Must be Greater Than Four characters "
                document.getElementById('s1').style.color = "red "
                n1f = false;



        }
})
e1.addEventListener('input', () => {
        let rege1 = /(^[_a-zA-Z\d._]{4,30})@([a-z0-9]+).([a-z]{2,8})\.([a-z]{2,8})?$/;
        let txt1 = e1.value;

        if (rege1.test(txt1)) {
                console.log("Matched");
                e1.classList.add('is-valid');
                e1.classList.remove('is-invalid');
                e1f = true;

        }
        else {
                console.log("notMatched");
                e1.classList.add('is-invalid');
                e1.classList.remove('is-valid');
                e1f = false;
        }

})
num.addEventListener("input", () => {
        let rege2 = /^[6-9]\d{9}$/;
        let txt3 = num.value;
        if (rege2.test(txt3)) {
                console.log("Matched");
                num.classList.add('is-valid');
                num.classList.remove('is-invalid');
                numf = true;
        }
        else {
                console.log("notMatched");
                num.classList.add('is-invalid');
                num.classList.remove('is-valid');
                numf = false;
        }
})
let subBtn = document.getElementById('sbtn1');
subBtn.addEventListener('click', (e) => {
        if (n1f && e1f && numf) {
                document.getElementById('altmsg').classList.add('show');
                document.getElementById('altmsg1').classList.remove('show');

        }
        else {
                document.getElementById('altmsg1').classList.add('show');
                document.getElementById('altmsg').classList.remove('show');
        }
        e.preventDefault();
})






