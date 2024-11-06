function find_edit1(){
    const item1  = document.getElementById('nm')
    console.log(item1.innerText)
    item1.innerHTML="Inna"
    const item2  = document.getElementById('srnm')
    console.log(item2.innerText)
    item2.innerHTML="Shvanova"
    const item3  = document.getElementById('fnm')
    console.log(item3.innerText)
    item3.innerHTML="Gennadievna"
    const item4  = document.getElementById('city')
    console.log(item4.innerText)
    item4.innerHTML="Voronezh"
}

const node_for_click1 = document.getElementById("for_click1")
node_for_click1.addEventListener("click",find_edit1)

function find_edit2(){
    const item1  = document.getElementById('nm')
    console.log(item1.innerText)
    item1.innerHTML="Инна"
    const item2  = document.getElementById('srnm')
    console.log(item2.innerText)
    item2.innerHTML="Шванова"
    const item3  = document.getElementById('fnm')
    console.log(item3.innerText)
    item3.innerHTML="Геннадьевна"
    const item4  = document.getElementById('city')
    console.log(item4.innerText)
    item4.innerHTML="гор.Воронеж"
}

const node_for_click2 = document.getElementById("for_click2")
node_for_click2.addEventListener("click",find_edit2)