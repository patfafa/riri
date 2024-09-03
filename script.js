document.addEventListener('DOMContentLoaded', function() {
    function adjustFontSize() {
        const width = window.innerWidth;
        const baseFontSize = width > 768 ? 36 : 24;
        document.body.style.fontSize = `${baseFontSize}px`;
    }

    adjustFontSize();
    window.addEventListener('resize', adjustFontSize);
});