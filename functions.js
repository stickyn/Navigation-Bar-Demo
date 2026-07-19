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


const tester = document.createElement("p");
tester.style.color = "red";
tester.textContent = "SAMMAY";

retrieveLink1.textContent = "Halloween";
retrieveLink1.style.color = "white";
retrieveLink2.textContent = "Haunted Houses";
retrieveLink2.style.color = "white";
retrieveLink3.textContent = "Pumpkin Patches";
retrieveLink3.style.color = "white";
retrieveLink4.textContent = "Halloween Stores";
retrieveLink4.style.color = "white";
retrieveLink5.textContent = "Candy Vaults";
retrieveLink5.style.color = "white";
retrieveLink6.textContent = "Vampire Archives";
retrieveLink6.style.color = "white";

/**
 * <h3 id="link1">Halloween</h3>
    <h3 id="link2">Haunted Houses</h3>
    <h3 id="link3">Pumpkin Patches</h3>
    <h3 id="link4">Halloween Stores</h3>
    <h3 id="link5">Candy Vaults</h3>
    <h3 id="link6">Vampire Archives</h3>
 */
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
        
     

        verticalBarButton.style.backgroundColor = "black";
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
    //     retrieveTitleText.remove();
    //     horiztonalBar.remove();
    //     accessUpperHeader.style.position = "sticky";
    //     accessUpperHeader.style.top = 0;
    //     accessUpperHeader.style.flexDirection = "column";
    //     verticalBarButton.style.alignItems = "stretch";

    //     verticalBarButton.style.backgroundColor = "black";
    //     verticalBarButton.style.textAlign = "center";
    //    verticalBarButton.style.width = "100%";
    //     retrieveTitleText.style.fontSize = "40px";
    //     retrieveTitleText.style.textAlign = "center";
        
    
    //     accessUpperHeader.appendChild(verticalBarButton);
    //     verticalBarButton.appendChild(retrieveLink1);
    //     verticalBarButton.appendChild(retrieveLink2);
    //     verticalBarButton.appendChild(retrieveLink3);
    //     verticalBarButton.appendChild(retrieveLink4);
    //     verticalBarButton.appendChild(retrieveLink5);
    //     verticalBarButton.appendChild(retrieveLink6);