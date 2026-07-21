/**
 * Variables being used
 * @param match - What the minimum size of the window can be before the nav bar minimizes
 * @param horiztonalBar - Access the navigation bar object
 * @param verticalBarButton - This is what the navigation bar will 'turn' into
 * @param accessUpperHeader - Access the object that contains that navigation bar
 * @param retrieveTitleText - Access the h1 element of "Navigation Bar Demo 1.0"
 * @param retrieveHeader - Access the header that contains the title text
 * @param retrieveLink1:6 - Creates Links for use on the minimized nav bar
 * @param r1:6 - Acts as h3 elements, so it doesn't look like a tiny a element
 */
const match = window.matchMedia("(max-width: 750px)");
const horiztonalBar = document.getElementById("navBar");
const verticalBarButton = document.createElement("div");
const accessUpperHeader = document.getElementById("upperHeader");
const retrieveTitleText = document.getElementById("titleText");
const retrieveHeader = document.getElementById("HEADER");

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

/**
 * Checks if the screen is lower or equal to 750 px.
 * @constructor
 * @param match - What the minimum size of the window can be before the nav bar minimizes
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

/**
 * This decides what to do when the screen is minimized
 * @param {string} status - Can either be "create" or "delete"
 * create - Deletes the original nav bar and text, and the new nav bar along with the link and title text
 * are now appended to the upper header. AMong other CSS styling to fit all the text.
 */
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
        /**
         * delete - The new nav bar is removed, CSS styling to the title text to make it fit the now larger screen
         *  and the old nav bar is actually reattached to the header containing the text, as for some reason attaching it back the the upper header caused the links to 
         * 'shift.'
         */
        verticalBarButton.remove();
        retrieveTitleText.style.position = "relative";
        retrieveTitleText.style.top = "0px";
        retrieveTitleText.style.right = "0px";
        retrieveHeader.appendChild(retrieveTitleText);
        retrieveHeader.appendChild(horiztonalBar);
        retrieveTitleText.style.fontSize = "95px";
        retrieveTitleText.style.textAlign = "center";
        
    }
   
}
