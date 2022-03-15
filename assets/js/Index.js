/* /* */ /* Dark Mode */ /* */

/* Index.html */
function on_dark_mode() {
    /* body */
    document.body.classList.add('scroll-dark')
    document.body.style.background = "#212529"
    /* Off Button */
    document.getElementById("off_button").style.display = "block";
    document.getElementById("on_button").style.display = "none";
    
    /* Navbar */
    document.getElementById('nav_section-').style.background = 'linear-gradient(#000, #595655)';
    document.getElementById('main_nav').classList.replace('navbar-light','navbar-dark')      /* text */
    document.getElementById('main_nav').classList.replace('bg-light','bg-black')
    document.getElementById('company-name-dark').classList.replace('text-dark','text-light')
    document.getElementById('company-name-dark-af').classList.replace('text-dark','text-light')
    document.getElementById('kavyam').classList.replace('text-primary','text-info')
    /* Nav -Button */
    document.getElementById('gd-btn-eng').classList.replace('custom-drive-button','custom-drive-button-dark')
    document.getElementById('act-btn').classList.replace('btn-outline-primary','btn-outline-info')
    document.getElementById('notes-btn').classList.replace('btn-outline-primary','btn-outline-info')
    document.getElementById('abt-btn').classList.replace('btn-outline-primary','btn-outline-info')

    /* Service Wrapper */
    document.getElementById("service-wrapper-dark").classList.replace("bg-white",'bg-black')
    document.getElementById('sw').style.background = "linear-gradient(#4d4946,#000)";
    /* Subjects */
    document.getElementById("Subjects").classList.replace("bg-secondary",'bg-black')
    document.getElementById("subject-head").classList.replace("btn-outline-primary","btn-outline-info");    document.getElementById("subject-head").classList.add('font-info')
    document.getElementById("subject-container").classList.add("bg-dark")
    /* Sub - Link */
    document.getElementById('s1').classList.remove('btn-outline-light','btn-light','text-dark');    document.getElementById('s1').classList.add('btn-info','btn-outline-primary')
    document.getElementById('s2').classList.remove('btn-outline-light','btn-light','text-dark');    document.getElementById('s2').classList.add('btn-info','btn-outline-primary')
    document.getElementById('s3').classList.remove('btn-outline-light','btn-light','text-dark');    document.getElementById('s3').classList.add('btn-info','btn-outline-primary')
    document.getElementById('s4').classList.remove('btn-outline-light','btn-light','text-dark');    document.getElementById('s4').classList.add('btn-info','btn-outline-primary')
    document.getElementById('s5').classList.remove('btn-outline-light','btn-light','text-dark');    document.getElementById('s5').classList.add('btn-info','btn-outline-primary')
    document.getElementById('s6').classList.remove('btn-outline-light','btn-light','text-dark');    document.getElementById('s6').classList.add('btn-info','btn-outline-primary')
    /* Links - Head */
    document.getElementById("l-gd").classList.replace("btn-primary","btn-info"); document.getElementById('l-gd').classList.add('btn-outline-primary')
    document.getElementById("Links").classList.replace("bg-secondary","bg-black")
    document.getElementById("start-link").classList.add("bg-dark");
    /* Link */
    document.getElementById("link-dark-button").classList.replace("btn-primary", 'btn-info');   document.getElementById('link-dark-button').classList.add('btn-outline-primary')
    document.getElementById("link-dark-button2").classList.replace("btn-primary", 'btn-info');  document.getElementById('link-dark-button2').classList.add('btn-outline-primary')
    document.getElementById("link-dark-button3").classList.replace("btn-primary", 'btn-info');  document.getElementById('link-dark-button3').classList.add('btn-outline-primary')
    document.getElementById("link-dark-button4").classList.replace("btn-primary", 'btn-info');  document.getElementById('link-dark-button4').classList.add('btn-outline-primary')
    document.getElementById("link-dark-button5").classList.replace("btn-primary", 'btn-info');  document.getElementById('link-dark-button5').classList.add('btn-outline-primary')
    document.getElementById("link-dark-button6").classList.replace("btn-primary", 'btn-info');  document.getElementById('link-dark-button6').classList.add('btn-outline-primary')
    document.getElementById("link-dark-button7").classList.replace("btn-primary", 'btn-info');  document.getElementById('link-dark-button7').classList.add('btn-outline-primary')
    /* Footer */
    document.getElementById("about").classList.replace("bg-secondary",'bg-black')
    document.getElementById("dev").classList.replace("bg-primary",'bg-dark')

}   



/* /* */ /* Light Mode */ /* */
function off_dark_mode() {

    /* body */
    document.body.classList.remove('scroll-dark')
    document.body.style.background = "#fff"    
    /* On Button */
    document.getElementById("on_button").style.display = "block";
    document.getElementById("off_button").style.display = "none";

    /* Navbar */
    document.getElementById('nav_section-').style.background = 'linear-gradient(#fff, #595655)';
    document.getElementById("main_nav").classList.replace('navbar-dark','navbar-light')
    document.getElementById('main_nav').classList.replace('bg-black','bg-light')
    document.getElementById("company-name-dark").classList.replace('text-light','text-dark')
    document.getElementById('company-name-dark-af').classList.replace('text-light','text-dark')
    document.getElementById('kavyam').classList.replace('text-info','text-primary')
    /* Nav -Button */
    document.getElementById('gd-btn-eng').classList.replace('custom-drive-button-dark','custom-drive-button')
    document.getElementById('act-btn').classList.replace('btn-outline-info','btn-outline-primary')
    document.getElementById('notes-btn').classList.replace('btn-outline-info','btn-outline-primary')
    document.getElementById('abt-btn').classList.replace('btn-outline-info','btn-outline-primary')

    /* Service Wrapper */
    document.getElementById("service-wrapper-dark").classList.replace("bg-black",'bg-white')
    document.getElementById('sw').style.background = "linear-gradient(#4d4946,#fff)";
    /* Subjects */
    document.getElementById("Subjects").classList.replace("bg-black",'bg-secondary')
    document.getElementById("subject-head").classList.replace("btn-outline-info","btn-outline-primary");    document.getElementById("subject-head").classList.remove('font-info')
    document.getElementById("subject-container").classList.remove("bg-dark")
    /* Sub - Link */
    document.getElementById('s1').classList.add('btn-outline-light','btn-light','text-dark');    document.getElementById('s1').classList.remove('btn-info','btn-outline-primary')
    document.getElementById('s2').classList.add('btn-outline-light','btn-light','text-dark');    document.getElementById('s2').classList.remove('btn-info','btn-outline-primary')
    document.getElementById('s3').classList.add('btn-outline-light','btn-light','text-dark');    document.getElementById('s3').classList.remove('btn-info','btn-outline-primary')
    document.getElementById('s4').classList.add('btn-outline-light','btn-light','text-dark');    document.getElementById('s4').classList.remove('btn-info','btn-outline-primary')
    document.getElementById('s5').classList.add('btn-outline-light','btn-light','text-dark');    document.getElementById('s5').classList.remove('btn-info','btn-outline-primary')
    document.getElementById('s6').classList.add('btn-outline-light','btn-light','text-dark');    document.getElementById('s6').classList.remove('btn-info','btn-outline-primary')
    /* Links - Head */
    document.getElementById("l-gd").classList.replace("btn-info","btn-primary"); document.getElementById('l-gd').classList.remove('btn-outline-primary')
    document.getElementById("Links").classList.replace("bg-black","bg-secondary")
    document.getElementById("start-link").classList.remove("bg-dark");
    /* Link */
    document.getElementById("link-dark-button").classList.replace('btn-info','btn-primary');   document.getElementById('link-dark-button').classList.remove('btn-outline-primary')
    document.getElementById("link-dark-button2").classList.replace('btn-info','btn-primary');  document.getElementById('link-dark-button2').classList.remove('btn-outline-primary')
    document.getElementById("link-dark-button3").classList.replace('btn-info','btn-primary');  document.getElementById('link-dark-button3').classList.remove('btn-outline-primary')
    document.getElementById("link-dark-button4").classList.replace('btn-info','btn-primary');  document.getElementById('link-dark-button4').classList.remove('btn-outline-primary')
    document.getElementById("link-dark-button5").classList.replace('btn-info','btn-primary');  document.getElementById('link-dark-button5').classList.remove('btn-outline-primary')
    document.getElementById("link-dark-button6").classList.replace('btn-info','btn-primary');  document.getElementById('link-dark-button6').classList.remove('btn-outline-primary')
    document.getElementById("link-dark-button7").classList.replace('btn-info','btn-primary');  document.getElementById('link-dark-button7').classList.remove('btn-outline-primary')
    /* Footer */
    document.getElementById("about").classList.replace("bg-black",'bg-secondary')
    document.getElementById("dev").classList.replace("bg-dark",'bg-primary')

}