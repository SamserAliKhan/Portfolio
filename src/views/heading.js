document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('text');
    const text = "Hello! I'm Samser Ali Khan. Welcome to my portfolio.";

    function typeWriter(text, i, callback) {
        if (i < text.length) {
            textElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(function () {
                typeWriter(text, i, callback);
            }, 50); // Adjust the typing speed (milliseconds)
        } else if (typeof callback === 'function') {
            setTimeout(callback, 1000); // Adjust the pause before the cursor blinks again
        }
    }

    typeWriter(text, 0);
});
