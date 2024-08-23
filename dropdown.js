window.addEventListener("load", () => {

    const elements = document.querySelectorAll(`.dropdown`);
    
    elements.forEach(element => {
        const id = element.id;
        if (id) {
            document.getElementById(id).addEventListener("click", function() {
                document.getElementById(id+"dropdown").classList.toggle("hidden");
                var currentText = document.getElementById(id).textContent;
                if (currentText.slice(-1) == '>') {
                    document.getElementById(id).textContent = currentText.slice(0, -1) + 'v';
                } 
                else {
                    document.getElementById(id).textContent = currentText.slice(0, -1) + '>';
                }
            });
        }
    });
});