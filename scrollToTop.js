// <div id="arrowTop" hidden></div>

arrowTop.onclick = function() {
    window.scrollTo(scrollX, 0);
    // after scrollTo, there will be a "scroll" event, so the arrow will hide automatically
};

window.addEventListener('scroll', function() {
    arrowTop.hidden = (scrollY < document.documentElement.clientHeight);
});