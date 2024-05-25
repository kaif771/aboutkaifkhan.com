console.log("script running...")
document.querySelector('.skillbutton').addEventListener("click", () => {
    if (document.querySelector('.skillbutton').classList.contains('skillgo')) {
        document.querySelector('.allminiabout').style.display = 'none';
        document.querySelector('.miniskill').style.display = 'inline';



    }
})
document.querySelector('.aboutsec2').addEventListener("click", () => {
    if (document.querySelector('.allminiabout').classList.contains('miniaboutgo')) {
        document.querySelector('.miniskill').style.display = 'none';
        document.querySelector('.allminiabout').style.display = 'inline';

    }
})
document.querySelector('.miniskill').style.display = 'none';

document.querySelector('.hamburger').addEventListener('click',() =>{
    document.querySelector('.navigation').style.height = '300px';
    document.querySelector('.navlist').classList.toggle('v-class')
   if(document.querySelector('.navigation').classList.toggle('navigationgo')){
      document.querySelector('.navigation').style.height = '50px';
   }

 })


document.addEventListener('scroll',() =>{
    const nav = document.querySelector('nav');
    
    if(window.scrollY > 0){
        nav.classList.add('navchange');
    }

    else{
        nav.classList.remove('navchange');
    }
})
