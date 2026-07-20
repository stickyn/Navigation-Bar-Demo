const match = window.matchMedia("(max-width: 750px)");
const horiztonalBar = document.getElementById("navBar");
const verticalBarButton = document.createElement("div");
const accessUpperHeader = document.getElementById("upperHeader");
const retrieveTitleText = document.getElementById("titleText");
const retrieveHeader = document.getElementById("HEADER");
const createDetails = document.createElement("nav");
const retrieveLink1 = document.createElement("h3");
const retrieveLink2 = document.createElement("h3");
const retrieveLink3 = document.createElement("h3");
const retrieveLink4 = document.createElement("h3");
const retrieveLink5 = document.createElement("h3");
const retrieveLink6 = document.createElement("h3");

retrieveLink1.textContent = "Halloween";
retrieveLink2.textContent = "Haunted Houses";
retrieveLink3.textContent = "Pumpkin Patches";
retrieveLink4.textContent = "Halloween Stores";
retrieveLink5.textContent = "Candy Vaults";
retrieveLink6.textContent = "Vampire Archives";

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
        
    
        accessUpperHeader.appendChild(verticalBarButton);
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

        retrieveHeader.appendChild(retrieveTitleText);
        retrieveHeader.appendChild(horiztonalBar);
        retrieveTitleText.style.fontSize = "95px";
        retrieveTitleText.style.textAlign = "center";
        
    }
   
}
