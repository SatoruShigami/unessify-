const getViewportWidth = () => window.innerWidth ||document.documentElement.clientWidth;
console.log(`the viewport width is: ${getViewportWidth()} px`);
if (getViewportWidth() <= screen.width * 0.3) {
    alert("Your screen is small compared to the viewport width!");
}