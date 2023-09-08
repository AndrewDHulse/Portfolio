const jobTitleSpan = document.getElementById("job-title");
const cursorSpan = document.getElementById("cursor");

const textToType = "{Software Engineer}";
let charIndex = 0;

function typeText() {
    const currentText = textToType.slice(0, charIndex);
    jobTitleSpan.textContent = currentText;

    charIndex++;

    if (charIndex <= textToType.length) {
        setTimeout(typeText, 100);
    } else {
        cursorSpan.style.animation = "blink 2s infinite"; 
        setTimeout(() => {
            cursorSpan.style.display = "none"; 
        }, 2000); 
    }
}

window.onload = typeText;