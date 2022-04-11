/*
Consegna:
Dati tre array contenenti:
 - una lista ordinata di 5 immagini,
 - una lista ordinata dei relativi 5 luoghi e
 - una lista di 5 news,
creare un carosello come nella foto allegata.
*/
const imageObj = [
  {
      image: '01.jpg',
      title: 'Svezia',
      subtitle: 'lorem lorem'
  },
  {
      image: '02.jpg',
      title: 'Svizzera',
      subtitle: 'lorem lorem'
  },
  {
      image: '03.jpg',
      title:  'Gran Bretagna',
      subtitle: 'lorem lorem'
  },
  {
      image: '04.jpg',
      title:  'Germania',
      subtitle: 'lorem lorem'
  },
  {
      image: '05.jpg',
      title:  'Paradise',
      subtitle: 'lorem lorem'
  }
]

//variabile per raccogliere tutto l'html che va in items-container
let itemTemplate = "";

//variabile per raccogliere tutto l'html che va in thumbs-container
let thumbTemplate = "";

// preparo una varibile con l'indice dell'elemento attivo e la pongo inizialmente a 0 ovvero il primo elemento dell'array
let currentIndexActive = 0;

//eseguo il ciclo for sull'array delle immagini (items) e popolo l'html delle due varibaili da stampare nei due contenitori (immagini e thumbnails)
for (let i = 0; i < imageObj.length; i++) {
  let classActive = "";
  if (i === currentIndexActive) {
    classActive = "active";
  }
  let item = imageObj[i];
  itemTemplate += `
  <div class="item ${classActive}">
    <img src="img/${item.image}" />
      <div class="title">
        <h2>${item.title}</h2>
        <p>${item.subtitle}</p>
      </div>
  </div>`;
  thumbTemplate += `
  <div class="thumb ${classActive}">
    <img src="img/${item.image}" alt="" />
  </div>`;
}
//console.log(thumbTemplate);

// metto in due variabili rispettivamente i contenitori che si trovano nell'html
const itemsContainer = document.querySelector(".items-container");
const thumbsContainer = document.querySelector(".thumbs-container");


//stampo l'html corrispondente nei due contenitori
itemsContainer.innerHTML = itemTemplate;
thumbsContainer.innerHTML += thumbTemplate;
//document.querySelector(".item").classList.add("active");

//Pulsanti

//metto nelle variabili next e prev i due pulsanti
const next = document.querySelector(" .fa-circle-chevron-down");
const prev = document.querySelector(" .fa-circle-chevron-up");


function slideUpDown() {
  const direction = (this && this.id === 'inext') ? 'iNext' : 'iPrev';

  const imgs = document.getElementsByClassName("item");
  imgs[currentIndexActive].classList.remove("active");
  const thumbs = document.getElementsByClassName("thumb");
  thumbs[currentIndexActive].classList.remove("active");

  if(direction === 'iNext'){
    if (currentIndexActive === 0) {
      currentIndexActive = imageObj.length - 1;
    } else {
      currentIndexActive--;
    }
  }else{

    if (currentIndexActive === 4) {
      currentIndexActive = 0;
    } else {
      currentIndexActive++;
    }
  }
  imgs[currentIndexActive].classList.add("active");
  thumbs[currentIndexActive].classList.add("active");
}

next.addEventListener("click", slideUpDown);
prev.addEventListener("click", slideUpDown);


const start = document.getElementById("start");
const stop = document.getElementById("stop");


start.addEventListener("click", ()=>{
  let startLoop = setInterval(slideUpDown, 3000);

  stop.addEventListener("click", ()=>{
    clearInterval(startLoop);
  })
})
