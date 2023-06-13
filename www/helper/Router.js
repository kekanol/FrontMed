class Router {

    static redirect(endpoint) {
        let loc = window.location.href.toString();
        let urlArr = loc.split('/');
        var host = "";
    
        for (var i=0; i<urlArr.length - 2; i++) {
            if(i!=0) host += '/';
            host += urlArr[i];
        }
    
        window.location.replace(host + endpoint);
    }
}