function on_dark_english()  {
    /* Off Button */
    document.getElementById("off_button").style.display = "block";
    document.getElementById("on_button").style.display = "none";
    /* Navbar */
    document.getElementById("nav_head").classList.remove("bg-white");   document.getElementById("nav_head").classList.add("bg-dark")
}