// MENU
let Menu = document.querySelectorAll('.li');

Menu.forEach(li=>{
    li.onmouseover = function () {
        this.style.background = 'linear-gradient(to right, #61A1FD, #6475FF)';
        this.style.transition = 'all .5s linear';
    }
    li.onmouseout = function () {
        li.style.background = 'transparent'
    }
})

//Burger Menu
let burgerMenu = document.querySelector(".burger-menu");
let line = document.querySelectorAll(".MenuLine");
let HeadMenu = document.querySelector(".head_menu");

for (let i = 0; i < line.length; i++) {
  line[0].style.transform = 'rotate(0deg)';
  line[0].style.transformOrigin = 'left';
  line[1].style.transform = 'scale(1)';
  line[1].style.transformOrigin = 'left';
  line[2].style.transform = 'rotate(0deg)';
  line[2].style.transformOrigin = 'left';
};

let transForm = true;
burgerMenu.onclick = function () {
    if (transForm) {
        transForm = false;
        line[0].style.transform = 'rotate(42deg)';
        line[1].style.transform = 'scale(0)';
        line[2].style.transform = 'rotate(-42deg)';
        HeadMenu.style.transform = 'scale(1)';
        HeadMenu.style.opacity = '1';
    }else{
        transForm = true;
        line[0].style.transform = 'rotate(0deg)';
        line[1].style.transform = 'scale(1)';
        line[2].style.transform = 'rotate(0deg)';
        HeadMenu.style.transform = 'scale(0)';
        HeadMenu.style.opacity = '0';
        location.reload();
    }
};