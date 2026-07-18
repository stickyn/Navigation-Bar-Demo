
const match = window.matchMedia("(max-width: 650px)");
const horiztonalBar = document.getElementById("navBar");
let verticalBarButton = document.createElement("div");
let accessUpperHeader = document.getElementById("upperHeader");
let retrieveTitleText = document.getElementById("titleText");
let nerd = document.createElement("p");

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
        horiztonalBar.style.visibility = "hidden";  
        smallBar("create");      
    }
    else {
        horiztonalBar.style.visibility = "visible";
        smallBar("delete");
    }
}
checkScale();
match.addEventListener("change",checkScale);

function smallBar(status)
{
    if(status == "create")
    {
        retrieveTitleText.remove()
        verticalBarButton.style.backgroundColor = "black";
        verticalBarButton.style.width = "100px";
        verticalBarButton.style.height = "100px";
        verticalBarButton.style.alignSelf = "center";
        accessUpperHeader.appendChild(verticalBarButton);
        retrieveTitleText.style.fontSize = "55px";
        accessUpperHeader.appendChild(retrieveTitleText);
    }
    else if(status == "delete")
    {
        verticalBarButton.remove();
        
    }
   
}