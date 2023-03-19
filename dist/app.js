const app = document.getElementById("app");
let datas = [];
const header = document.createElement("header");
const navbar = document.createElement("nav");
const menu = ["Home", "About us", "Collection", "Contact"];
function removeModules() {
    while (app.hasChildNodes()) {
        app.removeChild(app.firstChild);
    }
    app.appendChild(header);
}
const hamburgerMenu = document.createElement("i");
hamburgerMenu.classList.add("ham");
hamburgerMenu.classList.add("fa-solid");
hamburgerMenu.classList.add("fa-bars");
navbar.appendChild(hamburgerMenu);
menu.forEach((menuItem) => {
    const option = document.createElement("button");
    option.classList.add("option");
    option.setAttribute("value", `${menuItem}`);
    option.innerText = `${menuItem}`;
    navbar.appendChild(option);
    option.addEventListener("click", () => {
        switch (option.value) {
            case "Home":
                renderHome();
                break;
            case "About us":
                renderAboutUs();
                break;
            case "Collection":
                renderCollection();
                break;
            case "Contact":
                renderContact();
                break;
        }
    });
});
header.appendChild(navbar);
app.appendChild(header);
function renderHome() {
    removeModules();
    const home = document.createElement("div");
    home.classList.add("home");
    app.appendChild(home);
    const background = document.createElement("div");
    background.classList.add("background");
    const bgImg = document.createElement("img");
    bgImg.classList.add("bg-img");
    bgImg.setAttribute("src", "./img/home.webp");
    background.appendChild(bgImg);
    home.appendChild(background);
    const container = document.createElement("div");
    container.classList.add("container");
    const frame = document.createElement("div");
    frame.classList.add("frame");
    const headerFrame = document.createElement("h1");
    headerFrame.classList.add("header-frame");
    headerFrame.innerText = "Digimon";
    frame.appendChild(headerFrame);
    const txtFrame = document.createElement("p");
    txtFrame.classList.add("txt-frame");
    txtFrame.innerText =
        "Check out information about Digimon. Collect your favourites creatures.";
    frame.appendChild(txtFrame);
    const btnFrame = document.createElement("button");
    btnFrame.classList.add("btn-frame");
    btnFrame.innerText = "Try now";
    frame.appendChild(btnFrame);
    btnFrame.addEventListener("click", () => {
        removeModules();
        renderCollection();
    });
    container.appendChild(frame);
    background.appendChild(container);
}
renderHome();
function renderAboutUs() {
    removeModules();
    const about = document.createElement("div");
    about.classList.add("about");
    app.appendChild(about);
    const containerAbout = document.createElement("div");
    containerAbout.classList.add("container-about");
    const h1ContainerAbout = document.createElement("h1");
    h1ContainerAbout.innerText = "About us";
    containerAbout.appendChild(h1ContainerAbout);
    about.appendChild(containerAbout);
    for (let i = 0; i < 2; i++) {
        const containerAboutHalf = document.createElement("div");
        containerAboutHalf.classList.add("container-half");
        containerAbout.appendChild(containerAboutHalf);
    }
    const containerHalfs = document.getElementsByClassName("container-half");
    containerHalfs[0].innerText =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget tempus nibh, quis tristique eros. Proin elit turpis, congue nec mauris quis, suscipit venenatis justo. Morbi bibendum libero sit amet ante consequat, suscipit tincidunt sapien cursus. Duis et ante augue. Vivamus at elit a elit scelerisque dignissim. Suspendisse hendrerit sapien vitae enim pharetra imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque interdum congue gravida. Vestibulum vulputate ullamcorper nisl et mattis. Proin dui nulla, vehicula ac pulvinar feugiat, bibendum vel sem.";
    const containerImg = document.createElement("img");
    containerHalfs[1].appendChild(containerImg);
    containerImg.setAttribute("src", "./img/aboutus.jpg");
}
fetch("https://digimon-api.vercel.app/api/digimon")
    .then((response) => response.json())
    .then((data) => {
    let creatures = data;
    console.log(creatures);
    creatures.forEach((card) => {
        datas.push(card);
    });
})
    .catch((error) => console.error(error));
;
function renderCollection() {
    removeModules();
    const collection = document.createElement("div");
    collection.classList.add("collection");
    app.appendChild(collection);
    datas.forEach((element) => {
        const card = document.createElement("div");
        card.classList.add("card");
        collection.appendChild(card);
        const cardName = document.createElement("div");
        cardName.classList.add("card-name");
        cardName.innerText = `${element.name}`;
        card.appendChild(cardName);
        const imgContainer = document.createElement("div");
        imgContainer.classList.add("img-container");
        card.appendChild(imgContainer);
        const cardImg = document.createElement("img");
        cardImg.setAttribute("src", `${element.img}`);
        imgContainer.appendChild(cardImg);
        const seeMore = document.createElement("button");
        seeMore.classList.add("see-more");
        const iconSeeMore = document.createElement("i");
        iconSeeMore.classList.add("fa-solid");
        iconSeeMore.classList.add("fa-eye");
        seeMore.appendChild(iconSeeMore);
        card.appendChild(seeMore);
        const addToFav = document.createElement("button");
        addToFav.classList.add("add-to-fav");
        const iconFav = document.createElement("i");
        iconFav.classList.add("fa-solid");
        iconFav.classList.add("fa-heart");
        addToFav.appendChild(iconFav);
        card.appendChild(addToFav);
        const levels = ["Fresh", "In training", "Rookie", "Armor", "Mega", "Champion", "Ultimate"];
        const description = document.createElement("div");
        description.classList.add("description");
        card.appendChild(description);
        description.innerText = `${element.level}`;
        for (let i = 0; i < levels.length; i++) {
            if (element.level === levels[i]) {
            }
        }
    });
    console.log(datas);
}
