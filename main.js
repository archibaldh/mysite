//Code written by vicr123 and akribes
function wheel(e){
    let content = document.getElementById("content");
    let elements = Array.from(content.children);

    // Get all Y things
    const topPosition = document.body.getBoundingClientRect().top;
    let positionOfAllTheElementsInSideTheContent = elements.map(elem => elem.getBoundingClientRect().top - topPosition);


    let y;
    if (e.deltaY < 0) {
        // Scrolling up
        y = positionOfAllTheElementsInSideTheContent.reverse().find(a => a < window.scrollY);
    } else {
        // Scrolling down
        y = positionOfAllTheElementsInSideTheContent.find(a => a > window.scrollY);
    }

    if (y === null) return;
    window.scrollTo({
        top: y,
        left: window.scrollX,
        behavior: 'smooth'
    });
}