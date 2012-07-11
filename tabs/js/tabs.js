function tabClick() {
    this.onclick = function(event)
    {   
        var divs = document.getElementsByTagName("div");
        for(var i=0;i<divs.length;i++)
            {
             if(divs[i].className == "tab active")   
                 {
                     divs[i].className = "tab";
                 }
            }
        t=event.target||event.srcElement;
        if(t.className == "tab")
            {
                t.className = "tab active";
            }
    }
}

window.onload = tabClick();
