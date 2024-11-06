function verify() {
    console.log("a, b, c, d")
    let a = parseInt(elementA.value);
    let b = parseInt(elementB.value);
    let c = parseInt(elementC.value);
    let d = parseInt(elementD.value);
    console.log(a, b, c, d)

    let low, high
    if (a < b) { low1 = a;    high1 = b;  }
    else { low1 = b; high1 = a; }

    if (c < d) { low2 = c;    high2 = d;  }
    else { low2 = d; high2 = c; }

    if (high2 >= high1 && low2 >= low1) {
        result = "ab поместится в cd"
        check = true;
    } 
    else {
        result = "ab не поместится в cd"
        check = false;
    }
    document.getElementById("result").value = result;
}

function send() {
    if (check) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Попробуйте другие значения")
    }
}



let result;
let check;

const elementA = document.getElementById("a");
const elementB = document.getElementById("b");
const elementC = document.getElementById("c");
const elementD = document.getElementById("d");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)