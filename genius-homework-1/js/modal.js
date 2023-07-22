const modal_open_button = document.getElementById("open_modal");
const model_close_button = document.getElementById("close_modal_window");
const modal_window = document.getElementById("modal_window")

modal_open_button.addEventListener("click", () => {
    document.body.style.overflow = "hidden"
    modal_window.style.transform = "translateY(0)"
});

model_close_button.addEventListener("click", () => {
    document.body.style.overflowY = "scroll"
    modal_window.style.transform = "translateY(-100vh)"
})