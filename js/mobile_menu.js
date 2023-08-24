function linkNodes (nodesName) {
    return document.getElementById(nodesName);
}

const moveMenu = (newCoordinates) => {

    mobile_menu.style.transform = `translateX(${newCoordinates}vw)`;

    return 0;
}


const close_menu = linkNodes("close_menu");
const mobile_menu = linkNodes("mobile_menu");
const burger_menu = linkNodes("burger_menu");
const wrapper = linkNodes("wrapper")

burger_menu.addEventListener("click", () => {
    moveMenu("0");
});

close_menu.addEventListener("click", () => {

    moveMenu("100")
});

mobile_menu.addEventListener("click", (event) => {
    if(event.target.classList[1] === "link"){
        moveMenu("100")
    }
})