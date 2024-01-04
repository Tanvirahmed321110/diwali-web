let menuBar =  document.getElementById('menu-bars')
let headerNavUl = document.querySelector('.header-nav ul');
let header = document.querySelector('header')

menuBar.addEventListener('click',function(){
    headerNavUl.classList.toggle('activeNav');
    menuBar.classList.toggle('fa-times')
})


window.onscroll= ()=>{
    if(window.scrollY>20){
        header.classList.add('header-active');
        header.style.backgroundColor='#f2f2f5'
    }
    else{
        header.classList.remove('header-active');
        header.style.backgroundColor='#fff'
    }
}


// home 
let home = document.querySelector('#home')
home.onmousemove = (e)=>{
    let homeText = document.querySelector('.home-text')
    let x = (window.innerWidth -e.pageX *4) /90
    let y =( window.innerHeight -e.pageY *4) /90
    
    homeText.style.transform = `translateX(${x}px) translateY(${y}px)`
}


// time offerts
let dateOffset = (24*60*60*1000) *11;
let countDate = new Date().getTime()+dateOffset;


function countDown(){
    let now = new Date().getTime()
    let gap = countDate - now;
    let seconds = 1000;
    let minutes = seconds * 60;
    let hour = minutes * 60;
    let days = hour * 24;
    
    let d = Math.floor(gap / (days))
    let h = Math.floor((gap%(days))/ (hour)) 
    let m = Math.floor((gap%(hour))/ (minutes)) 
    let s = Math.floor((gap%(minutes))/ (seconds)) 
    
    document.getElementById('day').innerText = d
    document.getElementById('hour').innerText = h
    document.getElementById('minutes').innerText = m
    document.getElementById('seconds').innerText = s
}

setInterval(function(){
    countDown()
},1000)



// slider
var swiper = new Swiper(".offer-slider", {
    spaceBetween: 10,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2000, 
    },
    speed:1000,
    breakpoints: {
     0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      }
    },
  });
  
  
  
//   loader 
function loader (){
    document.querySelector('.loader').classList.add('active')
}

function fadeOut(){
    setInterval(loader,1000)
}
window.onload(fadeOut())
  
  
