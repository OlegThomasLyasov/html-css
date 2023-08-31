// let name = prompt("как вас зовут?");
// alert(`Вау вас зовут ${name}`);

let count = 0;

function chanchedColor() {
    let el = document.getElementById("element1");
    // if (count % 2 === 0)
    //     el.classList.add('active');
    // else 
    //     el.classList.remove('active');
    // count++;
    // if (el.classList.contains('active')) 
    //     el.classList.remove('active');
    // else 
    //     el.classList.add('active');
    el.classList.toggle('active');
    let name = prompt("Введите имя");
    el.textContent = name;
}


function chanchedColorAll() {
    let elements = document.getElementsByClassName('title');
    // document.getElementsByTagName(‘h1’);
    let arr = Array.from(elements);
    // arr.forEach((element)=> {
    //     element.classList.add('active');
    // })
    for (let i=0 ; i<arr.length; i++) {
        arr[i].classList.add('active');
    }
    // console.log(elements);
}

let btn = document.getElementById('btn');
btn.addEventListener('click', chanchedColor);

let btn2 = document.getElementById('btn2');
btn2.addEventListener('click', chanchedColorAll);

let btn3 = document.getElementById('btn3');
btn3.addEventListener('click', () => {
    btn3.classList.toggle('element-final')
    btn3.classList.toggle('element-initial')
});

let user = {
    name: 'John',
};
  

async function logSubmit(event) {
   let name = document.getElementsByTagName("input")[0].value;
   event.preventDefault();// не обновляет
   let response = await fetch('https://jsonplaceholder.typicode.com/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8' //кодировка и тип
    },
    body: JSON.stringify(user) //преобразовывваем в JSON
  });
    let result = await response.json();
    alert(response.status);
    console.log(result);
}

const form = document.getElementById("form");
form.addEventListener("submit", logSubmit);