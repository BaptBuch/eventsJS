//Question 1
// var footer = document.querySelector('footer')
// footer.addEventListener('click', function(){
//   console.log("clique")
// })

//Fonctionnalité 1bis
function clique(){
  let footer = document.querySelector('footer')
  i = 1
  footer.addEventListener('click', function(){
    console.log(`clique ${i++}`)
  })
}
clique()

//Fonctionnalité 2
function hamburger(){
  let a = document.getElementsByClassName("navbar-toggler-icon")
  let hamburger = document.getElementById("navbarHeader")
  a[0].addEventListener('click', function(){
    hamburger.classList.toggle("collapse")
  })
}
hamburger()

//Fonctionnalité 3
function red(){
  let clic = document.getElementsByClassName("btn-outline-secondary")[0]
  carte = document.getElementsByClassName("card-body")[0]
  clic.addEventListener('click', function(){
    carte.style.color="#ff0000"
  })
}
red()

//Fonctionnalité 4
function green(){
  let clic = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1]
  let secondCard = document.getElementsByClassName("card-body")[1]
  clic.addEventListener('click', function(){
    if (secondCard.style.color === 'green'){
      secondCard.style.color = 'black' ;
    }
    else secondCard.style.color = 'green'
  })
}
green()

//Fonctionnalité 5
function bootoff(){
  h = document.querySelector('header')
  h.addEventListener("dblclick", function(){
   document.querySelector('link').toggleAttribute("disabled")   
  })
}
bootoff()

//Fonctionnalité 6
function small(){
  let viewBtns = document.querySelectorAll(".btn-success");
  for (let i = 0; i < viewBtns.length; i++) {
  viewBtns[i].addEventListener("mouseenter", function () {
    let cardImage = document.querySelectorAll(".card-img-top")[i];
    let cardText = document.querySelectorAll(".card-text")[i];

    cardText.toggleAttribute('hidden');
    if(cardImage.style.width==='20%'){
      cardImage.style.width='100%';
    } else{
      cardImage.style.width='20%';
    }
    
    
  });
}
}
small()

//Fonctionnalité 7
function droite(){
  let rightArrow = document.querySelector(".btn-secondary.my-2");
  rightArrow.addEventListener("click", function () {
  let allCards = document.querySelectorAll(".col-md-4");
  let lastCard = document.querySelectorAll(".col-md-4")[5];
  let parent = lastCard.parentElement;
  parent.insertBefore(allCards[5], allCards[0]);
});
}
droite()


//Fonctionnalité 8
// function gauche(){
//   let fleche = document.querySelector('.btn-secondary')
//   let carte = document.querySelector(".col-md-4")
//   fleche.addEventListener("click", function(event) {
//     event.preventDefault();
//     carte.parentElement.appendChild(carte);
//   }, false)

// }
// gauche