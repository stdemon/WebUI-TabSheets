function tabClick() {
    this.onclick = function(event)
    {
        t=event.target||event.srcElement;
        if(t.className == "tab" || t.tagName == "SPAN")
            {
                t.className = "tab active";
            }
    }
}

window.onload = tabClick();
