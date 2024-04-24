const anchors = document.querySelectorAll('[href*="#"]');

anchors.forEach(anchor => {
    anchor.addEventListener("click", (event) => {
        event.preventDefault()

        const blockID = anchor.getAttribute("href").substring(1)
        document.getElementById(blockID).scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    })
})


/* =========================================================================================  */

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
}


ScrollReveal().reveal(".top__subtitle", {
    ...scrollRevealOption,
})

ScrollReveal().reveal(".top__title", {
    ...scrollRevealOption,
    delay: 500,
})

ScrollReveal().reveal(".about__image", {
    ...scrollRevealOption,
    origin: "left",
})

ScrollReveal().reveal(".about__subtitle", {
    ...scrollRevealOption,
})

ScrollReveal().reveal(".about__title", {
    ...scrollRevealOption,
    delay: 500,
})

ScrollReveal().reveal(".about__text", {
    ...scrollRevealOption,
    delay: 1000,
})

ScrollReveal().reveal(".about__button", {
    ...scrollRevealOption,
    delay: 1500,
})

ScrollReveal().reveal(".rooms__item", {
    ...scrollRevealOption,
    interval: 700,
})

ScrollReveal().reveal(".services__item", {
    ...scrollRevealOption,
    interval: 500,
    origin: "right",
})

/* =========================================================================================   */
const animItems = document.querySelectorAll('.explore__menu')

if (animItems.length > 0){
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll(){
        for (let index = 0; index < animItems.length; index++){
            const animItem = animItems[index]
            const animItemHeight = animItem.offsetHeight
            const animItemOffset = offset(animItem).top
            const animStart = 4

            let animItemPoint = window.innerHeight - animItemHeight / animStart

            if (animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight  / animStart
            }

            if ((pageYOffset > animItemOffset - animItemPoint ) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('active')
            }else{
                if (!animItem.classList.contains('anim-no-haight')){
                    animItem.classList.remove('active')
                }
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect()
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    setTimeout(() => {
        animOnScroll()
    }, 300)
}

/* ======================================================================================== */

const headerburger = document.querySelector('.header__burger')
const navlist = document.querySelector('.burger__list')

headerburger.addEventListener('click', open)

function open() {
    navlist.classList.toggle('open-burger')
    headerburger.classList.toggle('active')
}


/* ========================================================================================= */

navlist.querySelectorAll(".header__link").forEach(link => {
    link.addEventListener("click", () => {
      headerburger.classList.remove("active")
      navlist.classList.remove("open-burger")
      html.classList.remove("unscroll")
    })
  })
