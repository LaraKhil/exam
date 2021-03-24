const barsBtn = document.querySelector(".main-btn");
const modalWindow = document.querySelector("#bars-section");
const anchor = document.querySelectorAll("#anchor");
const downloadFile = document.querySelectorAll("#download");
const btnCloseModal = document.querySelector(".close-modal");
const formUser = document.querySelector("#form");
const formModal = document.querySelector(".form-modal");
const btnModalOk = document.querySelector(".btn-modal-ok");








barsBtn.addEventListener("click", () => modalWindow.style.display = "flex");
btnCloseModal.addEventListener("click", () => modalWindow.style.display = "none");
btnModalOk.addEventListener("click", ()=> formModal.style.display = "none");



anchor.forEach(item =>{
    item.addEventListener("click", ()=>{
        modalWindow.style.display = "none";
    });
});


form.addEventListener("submit", (event)=>{
    event.preventDefault();
    formModal.style.display = "block";

});


$('#GetFile').on('click', function () {
    $.ajax({
        url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/172905/test.pdf',
        method: 'GET',
        xhrFields: {
            responseType: 'blob'
        },
        success: function (data) {
            const a = document.createElement('a');
            const url = window.URL.createObjectURL(data);
            a.href = url;
            a.download = 'GalleryAppleStore.pdf';
           
            a.click();
            a.remove();

            setTimeout(function(){
                window.URL.revokeObjectURL(url);
            }, 60 * 1000);
        }
    });
});

$('#GetFile2').on('click', function () {
    $.ajax({
        url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/172905/test.pdf',
        method: 'GET',
        xhrFields: {
            responseType: 'blob'
        },
        success: function (data) {
            const a = document.createElement('a');
            const url = window.URL.createObjectURL(data);
            a.href = url;
            a.download = 'GalleryPlarMarket.pdf';
            document.body.append(a);
            a.click();
            a.remove();
            setTimeout(function(){
                window.URL.revokeObjectURL(url);
            }, 60 * 1000);
        }
    });
});

