if (window.document.documentMode) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', Animate()); // Document still loading so DomContentLoaded can still fire :)
    } else {
        console.log("hi");
    }
}