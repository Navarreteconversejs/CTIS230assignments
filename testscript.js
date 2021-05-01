myitem = document.getElementById("firsttest");
//The first line asks the webpage to get the element by the name of the ID. In this case the name was "firsttest". Javascript will then know this element as myItem.
    myitem.addEventListener("click", onClick);
    myitem.addEventListener("mouseout", onMouseOut);
//The second line after myitem. gives the text the action that it needs to be prepared to act on. In this case, the action occurs after the item is clicked. The "action" is called a function.
    function onClick() {  
        //The third line is the function that is done after the item is clicked. In this case the function is turning the text red.
        myitem.style.color= "red";  
        myitem.style.backgroundColor= "black";
    }

function onMouseOut() {
    myitem.style.color= "teal";
    myitem.style.backgroundColor= "white";
}

myclick = document.getElementById("thirdtest");
    myclick.addEventListener("click", onSecondClick);
    myclick.addEventListener("mouseout",onSecondMouseOut);
    function onSecondClick() {
    myclick.style.color= "black";
    }
    function onSecondMouseOut() {
        myclick.style.color= "mediumslateblue";
    }

thebutton = document.getElementById("thebutton");  
otheritem = document.getElementById("buttontest");

    thebutton.addEventListener("click", onButtonClick);

    function onButtonClick() {  
        otheritem.style.color = "red";  
    }

thesecondbutton = document.getElementById("thesecondbutton");  
secondtest = document.getElementById("secondtest");

thesecondbutton.addEventListener("click", onSecondButtonClick);
    function onSecondButtonClick() {  
        secondtest.style.backgroundColor = "black";  
    }

    textentry = document.getElementById("myinput");  
    textentry.addEventListener("change", onChange);
    function onChange() {  
        newtext = myinput.value;  
        otheritem.innerHTML = newtext;  
    }

myCardDiv = document.getElementById("Policeimage");
myCardImage = document.getElementById("Police");
    myCardDiv.addEventListener("click", expandImage);
    
    function expandImage() {
       
        if (myCardDiv.style.position == "") {
            myCardDiv.style.position = "fixed";
            myCardDiv.style.top = "50%";
            myCardDiv.style.left = "30%";
            myCardImage.style.width = "auto";
        }
        else if (myCardDiv.style.position == "fixed") {
            myCardDiv.style.position = "";
            myCardImage.style.width = "50px";
            myCardImage.src = "Images/NOPed.png";
        }
    }
    
    


        
 
 