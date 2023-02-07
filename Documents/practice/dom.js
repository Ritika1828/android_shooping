let counter = 0;
let button= document.getElementById('btn');
button.onclick=f1;
function f1(){
   let line = document.querySelector('#text-box').value;
   let ele=document.createElement('li');
   const link = document.createElement('a');
   link.setAttribute("href","#");
   ele.innerHTML=line;
   ele.id = "ele" + ++counter;
   link.appendChild(ele);
   link.onclick=f2;
   document.querySelector(".text").appendChild(link);
}
function f2(){
    this.remove();
}


function f3(){
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res=>(res.json()))
    .then(res1=>{
        let a=document.querySelector(".card-data")
        let b=document.createElement("div")
        let x = document.createElement('li')
        x.innerHTML = "Name :"+res1.name
        let y = document.createElement('li')
        y.innerHTML = "email :"+res1.email
        let z = document.createElement('li')
        z.innerHTML = "phone :"+res1.phone
        b.appendChild(x)
        b.appendChild(y)
        b.appendChild(z)
        a.appendChild(b)
        b.style.border="2px solid black"
        b.style.width="500px"
        b.style.margin="30px"
        b.style.padding="20px"
    })
}
function change(event){
    let x=document.querySelector(".button3")
    x.style.backgroundColor="yellow"
    x.innerHTML="Button is clicked"
    event.stopPropagation()
}
