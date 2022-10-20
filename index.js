

let canvas = document.getElementById("innerScreen");
for(let i = 1; i < 33; i++){

    if( i <= 23)
        canvas.innerHTML += '<div class="card"> <img class="tshirtImg" src="Images/'+ i + '.jpg"alt=""> <div class="lines"> <p class="price">&nbsp&nbspRs.450</p></div></div>';
    else
        canvas.innerHTML += '<div class="card"> <img class="tshirtImg" src="Images/'+ i + '.jpeg"alt=""> <div class="lines"> <p class="price">&nbsp&nbspRs.450</p></div></div>';
}