
console.log("Good day to you!");

// Lightbox Options
  lightbox.option ({
    'alwaysShowNavOnTouchDevices': true,
    'wrapAround': true,
    'showImageNumberLabel': false
  });

let searchBar = document.querySelector('#myInput');
const imgContainer = document.querySelector('.gallery');
const imgLinks = imgContainer.querySelectorAll('a');

searchBar.addEventListener("keyup", () => {
  let results = searchBar.value.toUpperCase();

    for ( let i = 0; i <= 11; i += 1 ) {
        let imgTitle = imgLinks[i].getAttribute("data-title").toUpperCase();
        if ( imgTitle.indexOf(results) > -1 ) {
        imgLinks[i].style.display = "inline";
      } else {
        imgLinks[i].style.display = "none";
      }
    }
});
