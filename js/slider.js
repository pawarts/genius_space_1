console.log(window.innerWidth)

if(window.innerWidth <= 1080){
    const slider_button = document.querySelectorAll(".slider_button")
    const slider_item = document.querySelectorAll(".slider_item")

    slider_button.forEach((node,index) => {

        node.addEventListener("click", () => {
            slider_button.forEach(elem => {
                elem.classList.remove("slider_button-active");
            })

            slider_item[0].style.marginLeft = `-${index * 100}vw`;

            node.classList.add("slider_button-active")

        })

    })}