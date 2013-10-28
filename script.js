var scriptLoader = function (src, callback) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = src;
    script.type= 'text/javascript';  
    script.onload = script.onreadystatechange = function() {  
        if (
            !this.readyState 
            || this.readyState === "loaded" 
            || this.readyState === "complete" 
        ) { 
            callback(); 
        
            // Handle memory leak in IE 
            script.onload = script.onreadystatechange = null;  
        } 
    };  

    head.appendChild(script);
}