let qr_img = document.getElementById("qrimg");
let qr_text = document.getElementById("qr-text");
let qr_result = document.getElementById("qr-result");
let download_btn = document.getElementById("download-btn");

function generateQr() {
    
    let qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qr_text.value;
    qr_img.src = qrCodeUrl;

    
    qr_result.style.display = "block";
    download_btn.style.display = "inline-block";
}

function downloadQr() {
    let link = document.createElement('a');
    link.href = qr_img.src;
    link.download = 'qr-code.png';
    link.click();
}
