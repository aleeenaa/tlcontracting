var xhr, target;

function ajaxLoad(URL) {
    // find the element that should be updated
    target = document.getElementById("content");

    // create a request object
    xhr = new XMLHttpRequest();

    // initialise a request, specifying the HTTP method
    // to be used and the URL to be connected to.
    xhr.open("GET", URL, true);
    xhr.onreadystatechange = function(){
        if (xhr.status == 200){
            if (xhr.readyState == 4){
                target.innerHTML = xhr.responseText;
            }
        }
        else if (xhr.status == 404){
            if (xhr.readyState == 4){
                error404();
            }
        }
    };
    xhr.send();
}

function ajaxGet(URL, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", URL, true); // The TRUE implies asynchronous
    xhr.onreadystatechange = function() {
        if (xhr.status == 200) {
            if (xhr.readyState == 4) {
                callback(xhr.responseText);
            }
        }
    };
    xhr.send(null);
}

function error404() {

    var heading = document.getElementById("container");
    heading.innerHTML = "<h1>404 Error</h1><p>Sorry that page does not exist.</p>";
    ajaxLoad("api/error404.php")

}