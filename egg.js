const code = [
    'ArrowUp', 'ArrowUp',
    'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight',
    'ArrowLeft', 'ArrowRight',
    'b', 'a'
  ];

let codePosition = 0;

function checkCode(event) {
    const key = event.key;

    if (key === code[codePosition]) {
        codePosition++;

        if (codePosition === code.length) {
            codePosition = 0;

            document.getElementById("egg").classList.remove("hidden");
        }
    } 
    else {
            codePosition = 0;
    }
}
  
document.addEventListener('keydown', checkCode);
