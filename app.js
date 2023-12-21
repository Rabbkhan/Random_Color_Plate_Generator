const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");
const maxPlatteBoxes =40;
const generatePlate = () =>{
container.innerHTML = "";
    for (let i = 0; i < maxPlatteBoxes; i++) {
        //generating a random hex color code
    let randomHex = Math.floor(Math.random()*0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;

    //creating a new 'li' element and inserting it to the container
    const color = document.createElement("li");
    color.classList.add("color");
    color.innerHTML = ` <div class="react-box" style="background:${randomHex}"></div>
    <span class="hex-value">${randomHex}</span>`
    //adding click event to current li element to copy the color
    color.addEventListener("click",() => copyColor(color,randomHex));
    container.appendChild(color);


}

}
generatePlate();
const copyColor = (elem, hexVal) =>{
    console.log(elem, hexVal);
    const colorElement = elem.querySelector(".hex-value");
    navigator.clipboard.writeText(hexVal).then(()=>{
        colorElement.innerText ="Copied"
        setTimeout(()=> colorElement.innerText = hexVal, 1000);
    }).catch(()=>alert("Failed to copy the color code!"));
}

refreshBtn.addEventListener('click', generatePlate);