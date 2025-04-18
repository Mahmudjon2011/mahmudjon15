const qrCodeForm = document.querySelector("#form");
const inputUrl = document.querySelector("#soz");
const wrapperQrcode = document.querySelector("#box");


qrCodeForm.addEventListener("submit", (evt) =>{
    evt.preventDefault();

    const urlValue = inputUrl.value.trim();

    if(!urlValue){
        alert("Please enter a valid URL");
    }

    wrapperQrcode.innerHTML = "";

    new QRCode(wrapperQrcode , {
        text:urlValue,
        width:300,
        height:300,
    })
})