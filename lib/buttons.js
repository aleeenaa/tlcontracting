var getHome = function () {
    var heading = document.getElementById("container");
    heading.innerHTML = "<h1>Welcome to TL Contracting</h1><p>Groundworks, Construction and Civil Engineering Specialists</p>";
    ajaxLoad("api/about-us.php");
};

var getGnCE = function () {
    var heading = document.getElementById("container");
    heading.innerHTML = "<h1>Groundworks and Civil Engineering</h1>";
    ajaxLoad("api/g-n-ce.php");
};

var getPCRnM = function () {
    var heading = document.getElementById("container");
    heading.innerHTML = "<h1>Property Construction, Renovation and Maintenance</h1>";
    ajaxLoad("api/pcr-n-m.php");
};

var getDWnP = function () {
    var heading = document.getElementById("container");
    heading.innerHTML = "<h1>Driveways and Paving</h1>";
    ajaxLoad("api/dw-n-p.php");
};

var getContact = function () {
    var heading = document.getElementById("container");
    heading.innerHTML = "<h1>Contact Us</h1>";
    ajaxLoad("api/contact.php");
};

var getGallery = function () {
    var heading = document.getElementById("container");
    heading.innerHTML = "<div id='underMaintenance'></div><h1>Gallery</h1>";
    ajaxLoad("api/gallery.php")

};

var getSitemap = function () {
    var heading = document.getElementById("container");
    heading.innerHTML = "<h1>Sitemap</h1>";
    ajaxLoad("api/sitemap.php");
};

var buttonEventListeners = function () {
    ajaxLoad('api/about-us.php');

    var homeBtn = document.getElementById("home"),
        gnceBtn = document.getElementById("g-n-ce"),
        pcrnmBtn = document.getElementById("pcr-n-m"),
        dwnpBtn = document.getElementById("dw-n-p"),
        contactBtn = document.getElementById("contact"),
        sitemapBtn = document.getElementById("sitemap"),
        galleryBtn = document.getElementById("gallery"),
        contactBottomBtn = document.getElementById("contact-us");

    if (homeBtn) {
        homeBtn.addEventListener("click", getHome, true);
    }
    if (gnceBtn){
        gnceBtn.addEventListener("click", getGnCE, true);
    }
    if (pcrnmBtn) {
        pcrnmBtn.addEventListener("click", getPCRnM, true);
    }
    if (dwnpBtn) {
        dwnpBtn.addEventListener("click", getDWnP, true);
    }
    if (contactBtn || contactBottomBtn) {
        contactBtn.addEventListener("click", getContact, true);
        contactBottomBtn.addEventListener("click", getContact, true);
    }
    if (galleryBtn) {
        galleryBtn.addEventListener("click", getGallery, true);
    }
    if (sitemapBtn) {
        sitemapBtn.addEventListener("click", getSitemap, true);
    }
};

window.addEventListener("load", buttonEventListeners);