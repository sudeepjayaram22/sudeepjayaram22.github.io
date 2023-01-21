
function openWAChat() {
    let phoneNumberInput = document.getElementById('phoneInputTextBox').value;
    phoneNumberInput = phoneNumberInput.replace(/\s/g, '').replace("+", "").replace("-","");
    window.location.assign('https://api.whatsapp.com/send/?phone=%2B' + phoneNumberInput + '&text&type=phone_number&app_absent=0');


    setTimeout(() => {
        document.getElementById("action-button").click();
    }, 5000);

}

//https://api.whatsapp.com/send/?phone=%2B919901352525&text&type=phone_number&app_absent=0
