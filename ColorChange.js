let btn1 = document.querySelector("#btn1");
let currenclr = "white";


btn1.addEventListener("click", () => {
    if (currenclr === "white") {
        currenclr = "black"
        document.querySelector("body").classList.add("black")
        document.querySelector("body").classList.remove("white")
    
    } else {
        currenclr ="white"
        document.querySelector("body").classList.add("white")
        document.querySelector("body").classList.remove("black")
        
    }

    console.log(currenclr);
})





