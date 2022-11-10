// I imagine I start with a felx-container and into that I insert
const flexer = document.querySelector('.flex-container');


function change(){
    flexer.newDiv.style.backgroundColor = "black";
}

for(i = 0; i < 256; i++){
    let newDiv =  document.createElement('div');
    newDiv.className = 'box' + i;
    
    newDiv.addEventListener("mouseover", () =>{
        newDiv.setAttribute('style', 'background-color: black;');
    });

    flexer.appendChild(newDiv);


}


const div = document.querySelector("div");
square.addEventListener("mouseover", function(event) {
  event.target.classList.replace("square", "color");
});
