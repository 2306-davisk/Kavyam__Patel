/* Dark Mode */

function on_dark_maths()    {
    /* button */
    document.getElementById('off_button-eng').style.display = 'block';
    document.getElementById('on_button-eng').style.display = 'none';
    /* body */
    document.body.style.backgroundColor = "#212529";
    document.body.classList.add('scroll-dark');
    /* Nav - Section */
    document.getElementById('nav_section').style.background = 'linear-gradient(#000, #3d34a3)'
    /* Nav */
    document.getElementById('main_nav').classList.replace('bg-white','bg-black');
    document.getElementById('main_nav').classList.replace('navbar-light','navbar-dark');
    document.getElementById('22').classList.replace('text-dark','text-light')
    document.getElementById('10-A').classList.replace('text-dark','text-light')
    document.getElementById('kavyam').classList.replace('text-primary','text-info')
    /* Nav - Btn */
    document.getElementById('T1-btn').classList.replace('btn-outline-primary', 'btn-outline-info')
    document.getElementById('T2-btn').classList.replace('btn-outline-primary', 'btn-outline-info')
    document.getElementById('S1-btn').classList.replace('btn-outline-primary', 'btn-outline-info')
    document.getElementById('gd-btn').classList.replace('custom-drive-button', 'custom-drive-button-dark')
    /* Activity - Banner*/
    document.getElementById('Activities-section').style.background = 'linear-gradient(#1e1393, #212529)';
    document.getElementById('Activities').classList.replace('bg-light','bg-black')
    document.getElementById('act-head').classList.replace('text-primary','text-info')
    document.getElementById('act-head').classList.replace('typo-space-line-Act','typo-space-line-Act-dark')
    /* Activity */
    document.getElementById('term-1').classList.add('text-light')
    /* Activity Buttons */
    document.getElementById('a_1').classList.replace('btn-primary', 'btn-info');    document.getElementById('a_1').classList.add('btn-outline-primary')  /* 1 */
    document.getElementById('a_2').classList.replace('btn-primary', 'btn-info');    document.getElementById('a_2').classList.add('btn-outline-primary')  /* 2 */
    document.getElementById('a_3').classList.replace('btn-primary', 'btn-info');    document.getElementById('a_3').classList.add('btn-outline-primary')  /* 3 */
    document.getElementById('a_4').classList.replace('btn-primary', 'btn-info');    document.getElementById('a_4').classList.add('btn-outline-primary')  /* 4 */
    document.getElementById('a_5').classList.replace('btn-primary', 'btn-info');    document.getElementById('a_5').classList.add('btn-outline-primary')  /* 5 */
    document.getElementById('a_6').classList.replace('btn-primary', 'btn-info');    document.getElementById('a_6').classList.add('btn-outline-primary')  /* 6 */
    document.getElementById('a_7').classList.replace('btn-primary', 'btn-info');    document.getElementById('a_7').classList.add('btn-outline-primary')  /* 7 */
    document.getElementById('a_8').classList.replace('btn-primary', 'btn-info');    document.getElementById('a_8').classList.add('btn-outline-primary')  /* 8 */
    document.getElementById('a_9').classList.replace('btn-primary', 'btn-info');    document.getElementById('a_9').classList.add('btn-outline-primary')  /* 9 */
    document.getElementById('a_10').classList.replace('btn-primary', 'btn-info');   document.getElementById('a_10').classList.add('btn-outline-primary') /* 10 */
    document.getElementById('a_11').classList.replace('btn-primary', 'btn-info');   document.getElementById('a_11').classList.add('btn-outline-primary') /* 11 */
    document.getElementById('a_12').classList.replace('btn-primary', 'btn-info');   document.getElementById('a_12').classList.add('btn-outline-primary') /* 12 */
    document.getElementById('a_13').classList.replace('btn-primary', 'btn-info');   document.getElementById('a_13').classList.add('btn-outline-primary') /* 13 */
    document.getElementById('a_14').classList.replace('btn-primary', 'btn-info');   document.getElementById('a_14').classList.add('btn-outline-primary') /* 14 */
    document.getElementById('a_15').classList.replace('btn-primary', 'btn-info');   document.getElementById('a_15').classList.add('btn-outline-primary') /* 15 */
    document.getElementById('a_16').classList.replace('btn-primary', 'btn-info');   document.getElementById('a_16').classList.add('btn-outline-primary') /* 16 */
    /* Close Preview */
    document.getElementById('p1').classList.replace('closebtn', 'closebtn-dark')
    document.getElementById('p2').classList.replace('closebtn', 'closebtn-dark')
    document.getElementById('p3').classList.replace('closebtn', 'closebtn-dark')
    document.getElementById('p4').classList.replace('closebtn', 'closebtn-dark')
    document.getElementById('p5').classList.replace('closebtn', 'closebtn-dark')
    document.getElementById('p6').classList.replace('closebtn', 'closebtn-dark')
    document.getElementById('p7').classList.replace('closebtn', 'closebtn-dark')
    document.getElementById('p8').classList.replace('closebtn', 'closebtn-dark')
    /* footer */
    document.getElementById('about').classList.replace('bg-secondary','bg-black')
    document.getElementById('dev').classList.replace('bg-primary','bg-dark')
}
function off_dark_maths()    {
    /* button */
    document.getElementById('on_button-eng').style.display = 'block';
    document.getElementById('off_button-eng').style.display = 'none';
    /* body */
    document.body.style.backgroundColor = "#fff";
    document.body.classList.remove('scroll-dark');
    /* Nav - Section */
    document.getElementById('nav_section').style.background = 'linear-gradient(#fff, #3d34a3)'
    /* Nav */
    document.getElementById('main_nav').classList.replace('bg-black','bg-white');
    document.getElementById('main_nav').classList.replace('navbar-dark','navbar-light');
    document.getElementById('22').classList.replace('text-light','text-dark')
    document.getElementById('10-A').classList.replace('text-light','text-dark')
    document.getElementById('kavyam').classList.replace('text-info','text-primary')
    /* Nav - Btn */
    document.getElementById('T1-btn').classList.replace('btn-outline-info', 'btn-outline-primary')
    document.getElementById('T2-btn').classList.replace('btn-outline-info', 'btn-outline-primary')
    document.getElementById('S1-btn').classList.replace('btn-outline-info', 'btn-outline-primary')
    document.getElementById('gd-btn').classList.replace('custom-drive-button-dark', 'custom-drive-button')
    /* Activity - Banner*/
    document.getElementById('Activities-section').style.background = 'linear-gradient(#1e1393, #fff)';
    document.getElementById('Activities').classList.replace('bg-black','bg-light')
    document.getElementById('act-head').classList.replace('text-info','text-primary')
    document.getElementById('act-head').classList.replace('typo-space-line-Act-dark','typo-space-line-Act')
    /* Activity */
    document.getElementById('term-1').classList.remove('text-light')
        /* Activity Buttons */
    document.getElementById('a_1').classList.replace('btn-info','btn-primary');    document.getElementById('a_1').classList.remove('btn-outline-primary')  /* 1 */
    document.getElementById('a_2').classList.replace('btn-info','btn-primary');    document.getElementById('a_2').classList.remove('btn-outline-primary')  /* 2 */
    document.getElementById('a_3').classList.replace('btn-info','btn-primary');    document.getElementById('a_3').classList.remove('btn-outline-primary')  /* 3 */
    document.getElementById('a_4').classList.replace('btn-info','btn-primary');    document.getElementById('a_4').classList.remove('btn-outline-primary')  /* 4 */
    document.getElementById('a_5').classList.replace('btn-info','btn-primary');    document.getElementById('a_5').classList.remove('btn-outline-primary')  /* 5 */
    document.getElementById('a_6').classList.replace('btn-info','btn-primary');    document.getElementById('a_6').classList.remove('btn-outline-primary')  /* 6 */
    document.getElementById('a_7').classList.replace('btn-info','btn-primary');    document.getElementById('a_7').classList.remove('btn-outline-primary')  /* 7 */
    document.getElementById('a_8').classList.replace('btn-info','btn-primary');    document.getElementById('a_8').classList.remove('btn-outline-primary')  /* 8 */
    document.getElementById('a_9').classList.replace('btn-info','btn-primary');    document.getElementById('a_9').classList.remove('btn-outline-primary')  /* 9 */
    document.getElementById('a_10').classList.replace('btn-info','btn-primary');   document.getElementById('a_10').classList.remove('btn-outline-primary') /* 10 */
    document.getElementById('a_11').classList.replace('btn-info','btn-primary');   document.getElementById('a_11').classList.remove('btn-outline-primary') /* 11 */
    document.getElementById('a_12').classList.replace('btn-info','btn-primary');   document.getElementById('a_12').classList.remove('btn-outline-primary') /* 12 */
    document.getElementById('a_13').classList.replace('btn-info','btn-primary');   document.getElementById('a_13').classList.remove('btn-outline-primary') /* 13 */
    document.getElementById('a_14').classList.replace('btn-info','btn-primary');   document.getElementById('a_14').classList.remove('btn-outline-primary') /* 14 */
    document.getElementById('a_15').classList.replace('btn-info','btn-primary');   document.getElementById('a_15').classList.remove('btn-outline-primary') /* 15 */
    document.getElementById('a_16').classList.replace('btn-info','btn-primary');   document.getElementById('a_16').classList.remove('btn-outline-primary') /* 16 */
    /* Close Preview */
    document.getElementById('p1').classList.replace('closebtn-dark','closebtn')
    document.getElementById('p2').classList.replace('closebtn-dark','closebtn')
    document.getElementById('p3').classList.replace('closebtn-dark','closebtn')
    document.getElementById('p4').classList.replace('closebtn-dark','closebtn')
    document.getElementById('p5').classList.replace('closebtn-dark','closebtn')
    document.getElementById('p6').classList.replace('closebtn-dark','closebtn')
    document.getElementById('p7').classList.replace('closebtn-dark','closebtn')
    document.getElementById('p8').classList.replace('closebtn-dark','closebtn')
    /* footer */
    document.getElementById('about').classList.replace('bg-black','bg-secondary')
    document.getElementById('dev').classList.replace('bg-dark','bg-primary')
}

/* Preview */
/* Term 1 */
            /* Art Integretion Activity */
            function on_M_AIA() {document.getElementById("preview_M_AIA").style.height = "600px";}
            function off_M_AIA() {document.getElementById("preview_M_AIA").style.height = "0px";}
            /* Real Numbers */
            function on_M_RN() {document.getElementById("preview_M_RN").style.height = "600px";}
            function off_M_RN() {document.getElementById("preview_M_RN").style.height = "0px";}

        /* Term 2 */
            /* Clintometer - Trignometry */
            function on_M_CLN() {document.getElementById("preview_M_CLN").style.height = "600px";}
            function off_M_CLN() {document.getElementById("preview_M_CLN").style.height = "0px";}

            /* Arithmetic Progression - Graph */
            function on_M_AP() {document.getElementById("preview_M_AP").style.height = "600px";}
            function off_M_AP() {document.getElementById("preview_M_AP").style.height = "0px";}

            /* Circle - Tangents of the Circle */
            function on_M_CRCL() {document.getElementById("preview_M_CRCL").style.height = "600px";}
            function off_M_CRCL() {document.getElementById("preview_M_CRCL").style.height = "0px";}

            /* 3D Model - Surface Area and Volume */
            function on_M_3D() {document.getElementById("preview_M_3D").style.height = "600px";}
            function off_M_3D() {document.getElementById("preview_M_3D").style.height = "0px";}

        /* Single PDF */
            /* Term 1 */
            function on_M_T1()  {document.getElementById("preview_M_T1").style.height = "600px";}
            function off_M_T1() {document.getElementById("preview_M_T1").style.height = "0px";}

            /* Term 2 */
            function on_M_T2()  {document.getElementById("preview_M_T2").style.height = "600px";}
            function off_M_T2() {document.getElementById("preview_M_T2").style.height = "0px";}