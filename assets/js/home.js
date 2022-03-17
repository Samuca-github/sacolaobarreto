//console.log("aaa")
const sections = document.querySelectorAll('section')
const navLi = document.querySelectorAll('header nav ul li')

window.addEventListener('scroll',() => {
let current = '';
//console.log(pageYOffset)

sections.forEach((sections) => {
    const sectionTop = sections.offsetTop;
    const sectionHeight = sections.clientHeight;
    if(pageYOffset >= sectionTop - sectionHeight/3) {
        current = sections.getAttribute('id');
    }
})

navLi.forEach((li) => {
    li.classList.remove('active');
    console.log(li.classList)
    if(li.classList.contains(current)){
        li.classList.add('active')
    }
})
})


function funçãoQueSeraExecutada(id) {
    var img = document.querySelector('.pointer.active')
    img.className = 'pointer'
    var valor = document.getElementById('imagem1')
    valor.className = 'pointer'
    console.log(valor)
    document.getElementById(id).className = "pointer active"
    verificarImagens(id)
}


function verificarImagens(id) {
    if (id == "imagem1") {
        var stl = document.getElementById('sliders')
        stl.style.marginLeft = "0vw"
    }
    else if (id == "imagem2") {
        var stl = document.getElementById('sliders')
        stl.style.marginLeft = "-100vw"
    }
    else if (id == "imagem3") {
        var stl = document.getElementById('sliders')
        stl.style.marginLeft = "-200vw"
    }
}
AOS.init({
    duration: 1500
});


function funcaoMudarbanner(id) {
    let img = document.querySelector('.pointer1.active')
    img.className = 'pointer1'
    let valor = document.getElementById('banner1')
    valor.className = 'pointer1'
    console.log(id)

    document.getElementById(id).className = "pointer1 active"
    console.log(id)
    verificar(id)
}


function verificar(id) {
    if (id == "banner1") {
        var l = document.getElementById('slidersid')
        l.style.marginLeft = "0vw"
        let banner1 = document.getElementById('inicio')
        banner1.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(assets/images/bg.jpg)'
    }
    else if (id == "banner2") {
        var l = document.getElementById('slidersid')
        let banner2 = document.getElementById('inicio')
        l.style.marginLeft = "-100vw"
        banner2.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(assets/images/bg2.jpg)';
    }
    else if (id == "banner3") {
        var l = document.getElementById('slidersid')
        l.style.marginLeft = "-200vw"
        let banner3 = document.getElementById('inicio')
        banner3.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(assets/images/bg3.jpg)'
    }
    else if (id == "banner4") {
        var l = document.getElementById('slidersid')
        l.style.marginLeft = "-300vw"
        let banner4 = document.getElementById('inicio')
        banner4.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(assets/images/bg4.png)'
    }
    else if (id == "banner5") {
        var l = document.getElementById('slidersid')
        l.style.marginLeft = "-400vw"
        let banner5 = document.getElementById('inicio')
        banner5.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(assets/images/bg5.png)'
    }

}
function abrirmenu() {
    let menu = document.getElementById("menu")
    menu.style.display = menu.style.display == "" ? "block" : ""
}
function hiddenmenu() {
    let menu = document.getElementById("menu")
    if (menu.style.display == "block") {
        menu.style.display = "none"
    }
}
