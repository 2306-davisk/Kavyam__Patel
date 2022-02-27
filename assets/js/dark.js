/* /* */ /* Dark Mode */ /* */

/* Index.html */
function on_dark_mode() {
    /* Off Button */
    document.getElementById("off_button").style.display = "block";
    document.getElementById("on_button").style.display = "none";

    /* Navbar */
    document.getElementById("main_nav").classList.remove("navbar-light", "bg-light");   document.getElementById("main_nav").classList.add("navbar-dark", "bg-dark");
    document.getElementById("company-name-dark").classList.remove("text-dark");         document.getElementById("company-name-dark").classList.add("text-light");

    /* Under Navbar */
    document.getElementById("service-wrapper-dark").classList.remove("bg-white");       document.getElementById("service-wrapper-dark").classList.add("bg-dark");
    document.getElementById("Subjects").classList.remove("bg-secondary");               document.getElementById("Subjects").classList.add("bg-primary");
    document.getElementById("subject-head").classList.remove("btn-outline-primary");    document.getElementById("subject-head").classList.add("btn-outline-info")
    document.getElementById("subject-container").classList.add("bg-dark")
    document.getElementById("l-gd").classList.remove("btn-primary");                    document.getElementById("l-gd").classList.add("btn-info")
    document.getElementById("Links").classList.remove("bg-secondary");                  document.getElementById("Links").classList.add("bg-primary")
    document.getElementById("start-link").classList.add("bg-dark");
    document.getElementById("link-dark-button").classList.remove("btn-primary");        document.getElementById("link-dark-button").classList.add("btn-info")
    document.getElementById("link-dark-button2").classList.remove("btn-primary");       document.getElementById("link-dark-button2").classList.add("btn-info")
    document.getElementById("link-dark-button3").classList.remove("btn-primary");       document.getElementById("link-dark-button3").classList.add("btn-info")
    document.getElementById("link-dark-button4").classList.remove("btn-primary");       document.getElementById("link-dark-button4").classList.add("btn-info")
    document.getElementById("link-dark-button5").classList.remove("btn-primary");       document.getElementById("link-dark-button5").classList.add("btn-info")
    document.getElementById("link-dark-button6").classList.remove("btn-primary");       document.getElementById("link-dark-button6").classList.add("btn-info")
    document.getElementById("link-dark-button7").classList.remove("btn-primary");       document.getElementById("link-dark-button7").classList.add("btn-info")
    document.getElementById("about").classList.remove("bg-secondary");                  document.getElementById("about").classList.add("bg-primary")
    document.getElementById("dev").classList.remove("bg-primary");                      document.getElementById("dev").classList.add("bg-secondary")
}   



/* /* */ /* Light Mode */ /* */
function off_dark_mode() {
    
    /* On Button */
    document.getElementById("on_button").style.display = "block";
    document.getElementById("off_button").style.display = "none";

    /* Navbar */
    document.getElementById("main_nav").classList.remove("navbar-dark", "bg-dark");     document.getElementById("main_nav").classList.add("navbar-light", "bg-light");
    document.getElementById("company-name-dark").classList.remove("text-light");        document.getElementById("company-name-dark").classList.add("text-dark")
    
    /* Under Navbar*/
    document.getElementById("service-wrapper-dark").classList.remove("bg-dark");        document.getElementById("service-wrapper-dark").classList.add("bg-white");
    document.getElementById("Subjects").classList.remove("bg-primary");                 document.getElementById("Subjects").classList.add("bg-secondary");
    document.getElementById("subject-head").classList.remove("btn-outline-info");       document.getElementById("subject-head").classList.add("btn-outline-primary")
    document.getElementById("subject-container").classList.remove("bg-dark")
    document.getElementById("l-gd").classList.remove("btn-info");                       document.getElementById("l-gd").classList.add("btn-primary")
    document.getElementById("Links").classList.remove("bg-primary");                    document.getElementById("Links").classList.add("bg-secondary")
    document.getElementById("start-link").classList.remove("bg-dark");
    document.getElementById("link-dark-button").classList.remove("btn-info");           document.getElementById("link-dark-button").classList.add("btn-primary")
    document.getElementById("link-dark-button2").classList.remove("btn-info");          document.getElementById("link-dark-button2").classList.add("btn-primary")
    document.getElementById("link-dark-button3").classList.remove("btn-info");          document.getElementById("link-dark-button3").classList.add("btn-primary")
    document.getElementById("link-dark-button4").classList.remove("btn-info");          document.getElementById("link-dark-button4").classList.add("btn-primary")
    document.getElementById("link-dark-button5").classList.remove("btn-info");          document.getElementById("link-dark-button5").classList.add("btn-primary")
    document.getElementById("link-dark-button6").classList.remove("btn-info");          document.getElementById("link-dark-button6").classList.add("btn-primary")
    document.getElementById("link-dark-button7").classList.remove("btn-info");          document.getElementById("link-dark-button7").classList.add("btn-primary")
    document.getElementById("about").classList.remove("bg-primary");                    document.getElementById("about").classList.add("bg-secondary")
    document.getElementById("dev").classList.remove("bg-secondary");                    document.getElementById("dev").classList.add("bg-primary")
}