const leftContainer = document.querySelector("#leftContainer")
const rightContainer = document.querySelector("#rightContainer")
const cartContainer = document.querySelector("#cartContainer")

const menuIcon = document.querySelector("#faBars")
const navBar = document.querySelector("#navBar")





const mainPageContext = [
    {
        title: "eStartUp",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ratione totam, accusamus iure laborum dignissimos sequi alias suscipit quod magni.",
        image: "image/image-desktop.webp"
    }
]

const cartBoxContext = [
    {
        title: "Lorem Ipsum",
        icon: '<i class="fa-solid fa-tv"></i>'
    },
    {
        title: "Sed ut perspiciatis",
        icon: '<i class="fa-regular fa-gem"></i>'
    },
    {
        title: "Magni Dolores",
        icon: '<i class="fa-solid fa-location-dot"></i>'
    },
    {
        title: "Nemo Enim",
        icon: '<i class="fa-solid fa-hashtag"></i>'
    }
]


const showLeftContainer = () => {
    leftContainer.innerHTML = "";
    mainPageContext.forEach(({title, text}) => {
        leftContainer.innerHTML += `
        <h2>${title}</h2>
        <p>${text}</p>
        <div class="btns">
            <button>Get Started</button>
            <button class="playBtn"><i class="fa-solid fa-circle-play"></i>Watch Video</button>
        </div>
        `
    });
}
showLeftContainer()

const showRigthContainer = () => {
    rightContainer.innerHTML = "";
    mainPageContext.forEach(({image}) => {
        rightContainer.innerHTML += `
        <div class="desktop-Image">
            <img src=${image} alt="">
        </div>`
    })
}
showRigthContainer()


const showMainCarts = () => {
    cartContainer.innerHTML = "";
    cartBoxContext.forEach(({title, icon}) => {
        cartContainer.innerHTML += `
        <div class="carts">
            ${icon}
            <h3>${title}</h3>
        </div>
        `
    })
}
showMainCarts()

let isNavBar = false

const showResMenu = () => {
    if (isNavBar) {
        navBar.classList.add("showNavBar")
        // navBar.classList.remove("showNavBar")
    } else {
        navBar.classList.remove("showNavBar")
        // navBar.classList.add("showNavBar")
    }
    console.log("menuIcon");
}

menuIcon.onclick = () => {
    isNavBar = !isNavBar
    showResMenu()
}