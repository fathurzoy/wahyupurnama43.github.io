
function openNav(){
    document.getElementById('mySidenav').style.width="250px";
    document.getElementById('main').style.marginLeft="250px";
    document.getElementById('open').style.display="none";
    document.getElementById('close').style.display="block";
    let positionInfo = document.body.getBoundingClientRect();
    if (positionInfo.width <= 537) {
        document.querySelector('nav').style.display="none";
    }

}
function closeNav(){
    document.getElementById('mySidenav').style.width="0";
    document.getElementById('main').style.marginLeft="0";
    document.body.style.backgroundColor="white";
    document.getElementById('open').style.display="block";
    document.getElementById('close').style.display="none";
    let positionInfo = document.body.getBoundingClientRect();
    if (positionInfo.width <= 537) {
        document.querySelector('nav').style.display="flex";
    }
}

function check(){
        let checkBox = document.getElementById("checkbox");
        let text1 = document.getElementsByClassName("text1");
        let text2 = document.getElementsByClassName("text2");
        let permodul = document.getElementById("permodul");
        let perbulan = document.getElementById("perbulan");

        for (var i=0; i < text1.length; i++){
            if(checkBox.checked == true){
                text1[i].style.display = "block";
                permodul.style.color = "#16B336";
                perbulan.style.color = "#333";
                text2[i].style.display = "none";
            }
            else if (checkBox.checked == false){
                text1[i].style.display = "none";
                permodul.style.color = "#333";
                perbulan.style.color = "#16B336";
                text2[i].style.display = "block";
            }
        }
    }


// vars
'use strict'
var testim = document.getElementById("testim"),
        testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
        touchStartPos,
        touchEndPos,
        touchPosDiff,
        ignoreTouch = 30;
;

window.onload = function() {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length-1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");            
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;
    
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function() {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function() {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function() {
        playSlide(currentSlide += 1);
    })    

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function() {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function(e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;
                
            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    })
        
        testim.addEventListener("touchstart", function(e) {
                touchStartPos = e.changedTouches[0].clientX;
        })
    
        testim.addEventListener("touchend", function(e) {
                touchEndPos = e.changedTouches[0].clientX;
            
                touchPosDiff = touchStartPos - touchEndPos;
            
                console.log(touchPosDiff);
                console.log(touchStartPos); 
                console.log(touchEndPos);   

            
                if (touchPosDiff > 0 + ignoreTouch) {
                        testimLeftArrow.click();
                } else if (touchPosDiff < 0 - ignoreTouch) {
                        testimRightArrow.click();
                } else {
                    return;
                }
            
        })
}