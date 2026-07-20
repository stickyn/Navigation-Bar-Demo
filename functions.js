const match = window.matchMedia("(max-width: 750px)");
const horiztonalBar = document.getElementById("navBar");
const verticalBarButton = document.createElement("div");
const accessUpperHeader = document.getElementById("upperHeader");
const retrieveTitleText = document.getElementById("titleText");
const retrieveHeader = document.getElementById("HEADER");
const createDetails = document.createElement("nav");
const retrieveLink1 = document.createElement("a");
const retrieveLink2 = document.createElement("a");
const retrieveLink3 = document.createElement("a");
const retrieveLink4 = document.createElement("a");
const retrieveLink5 = document.createElement("a");
const retrieveLink6 = document.createElement("a");

const r1 = document.createElement("h3");
retrieveLink1.appendChild(r1);
r1.textContent = "Halloween";
const r2 = document.createElement("h3");
retrieveLink2.appendChild(r2);

const r3 = document.createElement("h3");
retrieveLink3.appendChild(r3);

const r4 = document.createElement("h3");
retrieveLink4.appendChild(r4);

const r5 = document.createElement("h3");
retrieveLink5.appendChild(r5);

const r6 = document.createElement("h3");
retrieveLink6.appendChild(r6);

r2.textContent = "Haunted Houses";
r3.textContent = "Pumpkin Patches";
r4.textContent = "Halloween Stores";
r5.textContent = "Candy Vaults";
r6.textContent = "Vampire Archives";

retrieveLink1.setAttribute("href","www.google.com");
retrieveLink2.setAttribute("href","www.google.com");
retrieveLink3.setAttribute("href","www.google.com");
retrieveLink4.setAttribute("href","www.google.com");
retrieveLink5.setAttribute("href","www.google.com");
retrieveLink6.setAttribute("href","www.google.com");

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
        
        smallBar("create");      
    }
    else {
        
        smallBar("delete");
    }
}
checkScale();
match.addEventListener("change",checkScale);

function smallBar(status)
{
    if(status == "create")
    {
     
        horiztonalBar.remove();
        retrieveTitleText.remove();
        
     

        verticalBarButton.style.backgroundColor = "orange";
        verticalBarButton.style.color = "black";
        verticalBarButton.style.textAlign = "center";
       verticalBarButton.style.width = "100%";
       
        retrieveTitleText.style.fontSize = "40px";
        retrieveTitleText.style.textAlign = "center";
        retrieveTitleText.style.position = "relative";
        retrieveTitleText.style.top = "45px";
        retrieveTitleText.style.right = "15px";
        accessUpperHeader.style.backgroundColor = "orange";
        
        accessUpperHeader.appendChild(verticalBarButton);
        accessUpperHeader.appendChild(retrieveTitleText);
        verticalBarButton.appendChild(retrieveLink1);
        verticalBarButton.appendChild(retrieveLink2);
        verticalBarButton.appendChild(retrieveLink3);
        verticalBarButton.appendChild(retrieveLink4);
        verticalBarButton.appendChild(retrieveLink5);
        verticalBarButton.appendChild(retrieveLink6);

        
        
        
        
        
    }
    else if(status == "delete")
    {
        verticalBarButton.remove();
        createDetails.remove();
        retrieveTitleText.style.position = "relative";
        retrieveTitleText.style.top = "0px";
        retrieveTitleText.style.right = "0px";
        retrieveHeader.appendChild(retrieveTitleText);
        retrieveHeader.appendChild(horiztonalBar);
        retrieveTitleText.style.fontSize = "95px";
        retrieveTitleText.style.textAlign = "center";
        
    }
   
}
