var elements = document.getElementsByClassName("container-lg");
for (var i = 0; i < elements.length; i++)
{
    var element = elements.item(i);
    element.setAttribute("style", "max-width:unset;");    
}
