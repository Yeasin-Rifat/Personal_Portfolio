document.addEventListener("DOMContentLoaded", function () {
    const texts = ["Full-stack Web Developer", "SQA Engineer"];
    let index = 0;
    let charIndex = 0;
    const typingElement = document.getElementById("typing");
    const typingSpeed = 150;
    const erasingSpeed = 100;
    const delayBetweenTexts = 2000; // Delay before switching to the next text

    function type() {
        if (charIndex < texts[index].length) {
            typingElement.textContent += texts[index].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, delayBetweenTexts);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingElement.textContent = texts[index].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            index = (index + 1) % texts.length;
            setTimeout(type, typingSpeed);
        }
    }

    type(); // Start the typing animation
});
