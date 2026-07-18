
const match = window.matchMedia("(max-width: 650px)");
const getMenuBar = document.getElementById("navBar");


/**
 * Through research, this seems to be a common thing:  
 * https://www.w3schools.com/jsref/met_win_matchmedia.asp
 * https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/matches
 * https://www.geeksforgeeks.org/html/html-window-matchmedia-method/
 * https://johnkavanagh.co.uk/articles/responsive-javascript-and-the-matchmedia-method/
 */

function checkScale()
{
    if(match.matches)
    {
        getMenuBar.style.visibility = "hidden";        
    }
    else {
        getMenuBar.style.visibility = "visible";
    }
}
checkScale();
match.addEventListener("change",checkScale);
