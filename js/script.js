// var io="suganya";
var selectedValue=0;
const button = document.getElementsByClassName("rating");
// console.log(button);
for (i = 0; i < button.length; i++) {
    button[i].addEventListener("click", (e) => {
        selectedValue = e.target.value;
    });
}

const form = document.getElementById("ratings");
    // console.log(form);
    form.addEventListener("submit", ratingFunction);

function ratingFunction(e) {
    e.preventDefault();
    //console.log(selectedValue);
    document.querySelector("span").innerHTML=selectedValue;
    const overlay=document.getElementsByClassName("container");
    overlay[0].style.zIndex="0";

}

