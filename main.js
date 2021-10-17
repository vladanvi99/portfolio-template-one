let navLinks = [...document.querySelectorAll("nav a")]
let homePage = document.querySelector("#home-page")
let aboutMe = document.querySelector("#about-me-section")
let portfolioPage = document.querySelector("#portfolio-section")
let contactPage = document.querySelector("#contact-section")
let portfolioNavLinks = [...document.querySelectorAll('.portfolio-nav p')]
let portfolioItems = [...document.querySelectorAll('.portfolio-item')]
let goOnStartBtn = document.querySelector(".go-on-start");


//Main nav function
//on click event
let changeClick = (e) => {
    navLinks.forEach(item => {
        if(item === e.target){
            navLinks.forEach(item2 =>{
                item2.classList.remove("active")
            })
            e.target.classList.add("active")
        }
    })
}
window.addEventListener('click',(e) => {
    setTimeout(changeClick(e),200)
})
// On scroll event
let changeScroll = () => {
    if(scrollY >= homePage.offsetTop && scrollY < aboutMe.offsetTop){
        navLinks.forEach(item => item.classList.remove('active'))
        navLinks[0].classList.add("active")
        
    }
    else if(scrollY >= aboutMe.offsetTop && scrollY < portfolioPage.offsetTop){
        navLinks.forEach(item => item.classList.remove('active'))
        navLinks[1].classList.add("active")
    }
    else if(scrollY >= portfolioPage.offsetTop && scrollY < contactPage.offsetTop){
        navLinks.forEach(item => item.classList.remove('active'))
        navLinks[2].classList.add("active")
    }
    else if(scrollY >= contactPage.offsetTop){
        navLinks.forEach(item => item.classList.remove('active'))
        navLinks[3].classList.add("active")
    }
    
}   
window.addEventListener('scroll',() =>{
    changeScroll()
    //go on start btn
    if(scrollY >= 105){
        goOnStartBtn.classList.add('go-on-start-yes')
    }else{
        goOnStartBtn.classList.remove("go-on-start-yes")
    }
    })



//Portfolio Nav Filtering

function portNavFilter(){
    let str = this.textContent.split(" ").join("").toLowerCase();
    portfolioItems.forEach(item => {
            if(item.dataset.id.toLowerCase() === str){
                item.style.display = "block"
            }else if(item.dataset.all.toLowerCase() === str){
                    item.style.display = "block";
            } else {
                item.style.display = "none"
            }
        
    })
    portfolioNavLinks.forEach(item => {
        if(str === item.textContent.split(" ").join("").toLocaleLowerCase()){
            item.classList.add("active-portfolio-nav")
        } else {
            item.classList.remove("active-portfolio-nav")
        }
    })
}
portfolioNavLinks.forEach(navLink => navLink.addEventListener('click', portNavFilter))