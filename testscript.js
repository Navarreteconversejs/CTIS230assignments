myitem = document.getElementById("firsttest");

    myitem.addEventListener("click", onClick);
    myitem.addEventListener("mouseout", onMouseOut);

    function onClick() {  
        myitem.style.color= "red";  
        myitem.style.backgroundColor= "black"
    }
function onMouseOut() {
    myitem.style.color= "teal"
    myitem.style.backgroundColor= "white"
}
//The first line asks the webpage to get the element by the name of the ID. In this case the name was "firsttest". Javascript will then know this element as myItem.
//The second line after myitem. gives the text the action that it needs to be prepared to act on. In this case, the action occurs after the item is clicked. The "action" is called a function.
//The third line is the function that is done after the item is clicked. In this case the function is turning the text red.