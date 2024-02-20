let imgbox = document.getElementById("imgbox");
let qrimg = document.getElementById("qrimg");
let qrtext = document.getElementById("qrtext");
let error = document.getElementById("error");

function generateQr()
{
    if(qrtext.value.length > 0)
    {
        imgbox.style.display = "block"
        error.style.display = "none";
        // Generate QR Code
        qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
        
        imgbox.classList.add("show-img");
        
    }
    else{
        imgbox.style.display = "none"
        error.style.display = "block";
        // alert("Please enter some text!");
    }
    
}
