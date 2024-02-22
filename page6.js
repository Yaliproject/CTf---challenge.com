function check() {
    const receivedPassword = document.getElementById('pass').value;
    const hiddenPassword = String.fromCharCode(100, 97, 110, 105, 105, 115, 115, 109, 97, 114, 116); 
    if (receivedPassword === hiddenPassword) {
        alert("You Are Really Smart!");
        window.location.href = 'success6.html';
    } else {
        alert("Try Agin!");
        
    }
}

function crpytText(event) {
    event.preventDefault();
    const receivedString = document.getElementById('crpt_test').value;
    document.getElementById('crpt_result').innerHTML = `Text After Encryption: ${crptyString(
        receivedString,
    )}`;
}

function crptyString(text) {
    let result = '';
    for (let index = 0; index < text.length; index++) {
        result += String.fromCharCode(text.charCodeAt(index) + index);
    }
    return result;
}