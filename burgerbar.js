let burger_btn = document.getElementById('burger_btn');
let nav_links = document.getElementById('nav_links');


burger_btn.addEventListener('click',function(){
    
    nav_links.classList.toggle('active');
})