/* Dark Mode */ 

function on_dark_science()  {
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
    document.getElementById('act-btn').classList.replace('btn-outline-primary', 'btn-outline-info')
    document.getElementById('pot-btn').classList.replace('btn-outline-primary', 'btn-outline-info')
    document.getElementById('prt-btn').classList.replace('btn-outline-primary', 'btn-outline-info')
    document.getElementById('gd-btn').classList.replace('custom-drive-button', 'custom-drive-button-dark')
    /* Activity - Banner*/
    document.getElementById('Activities-section').style.background = 'linear-gradient(#1e1393, #212529)';
    document.getElementById('Activities').classList.replace('bg-light','bg-black')
    document.getElementById('act-head').classList.replace('text-primary','text-info')
    document.getElementById('act-head').classList.replace('typo-space-line-Act','typo-space-line-Act-dark')
    /* Activity */
    /* May Vacation Activity */
    document.getElementById('may-head').classList.replace('worksingle-heading','text-info')
    document.getElementById('may-head_sec').classList.replace('bg-white','bg-black')
    document.getElementById('may-arrow-r').classList.replace('text-dark','text-info')
    document.getElementById('may-arrow-l').classList.replace('text-dark','text-info')
    /* Portfolio */
    document.getElementById('pot-head_sec').classList.replace('bg-white','bg-black')
    document.getElementById('pot-head').classList.replace('worksingle-heading','text-info')
    /* Practicals and Notes */
    /* Banner */
    document.getElementById('notes').classList.replace('bg-light','bg-black')
    document.getElementById('prt-head').classList.replace('text-primary','text-info')
    document.getElementById('prt-head').classList.replace('typo-space-line-practicals','typo-space-line-practicals-dark')
    /* Main */
    document.getElementById('practicals').classList.add('text-white')
    /* Buttons */
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
    document.getElementById('a_11').classList.replace('btn-primary', 'btn-info');    document.getElementById('a_11').classList.add('btn-outline-primary')  /* 1 */
    document.getElementById('a_12').classList.replace('btn-primary', 'btn-info');    document.getElementById('a_12').classList.add('btn-outline-primary')  /* 2 */
    document.getElementById('a_13').classList.replace('btn-primary', 'btn-info');    document.getElementById('a_13').classList.add('btn-outline-primary')  /* 3 */
    document.getElementById('a_14').classList.replace('btn-primary', 'btn-info');    document.getElementById('a_14').classList.add('btn-outline-primary')  /* 4 */
    document.getElementById('a_15').classList.replace('btn-primary', 'btn-info');    document.getElementById('a_15').classList.add('btn-outline-primary')  /* 5 */
    document.getElementById('a_16').classList.replace('btn-primary', 'btn-info');    document.getElementById('a_16').classList.add('btn-outline-primary')  /* 6 */
    /* Footer */
    document.getElementById('about').classList.replace('bg-secondary','bg-black')
    document.getElementById('dev').classList.replace('bg-primary','bg-dark')
    /* Close Preview */
    document.getElementById('p1').classList.replace('closebtn', 'closebtn-dark')
    document.getElementById('p2').classList.replace('closebtn', 'closebtn-dark')
    document.getElementById('p3').classList.replace('closebtn', 'closebtn-dark')
    document.getElementById('p4').classList.replace('closebtn', 'closebtn-dark')
    document.getElementById('p5').classList.replace('closebtn', 'closebtn-dark')
}
function off_dark_science()  {
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
    document.getElementById('act-btn').classList.replace('btn-outline-info', 'btn-outline-primary')
    document.getElementById('pot-btn').classList.replace('btn-outline-info', 'btn-outline-primary')
    document.getElementById('prt-btn').classList.replace('btn-outline-info', 'btn-outline-primary')
    document.getElementById('gd-btn').classList.replace('custom-drive-button-dark', 'custom-drive-button')
    /* Activity - Banner*/
    document.getElementById('Activities-section').style.background = 'linear-gradient(#1e1393, #212529)';
    document.getElementById('Activities').classList.replace('bg-black','bg-light')
    document.getElementById('act-head').classList.replace('text-info','text-primary')
    document.getElementById('act-head').classList.replace('typo-space-line-Act-dark','typo-space-line-Act')
    /* Activity */
    /* May Vacation Activity */
    document.getElementById('may-head').classList.replace('text-info','worksingle-heading')
    document.getElementById('may-head_sec').classList.replace('bg-black','bg-white')
    document.getElementById('may-arrow-r').classList.replace('text-info','text-dark')
    document.getElementById('may-arrow-l').classList.replace('text-info','text-dark')
    /* Portfolio */
    document.getElementById('pot-head_sec').classList.replace('bg-black','bg-white')
    document.getElementById('pot-head').classList.replace('text-info','worksingle-heading')
    /* Practicals and Notes */
    /* Banner */
    document.getElementById('notes').classList.replace('bg-black','bg-light')
    document.getElementById('prt-head').classList.replace('text-info','text-primary')
    document.getElementById('prt-head').classList.replace('typo-space-line-practicals-dark','typo-space-line-practicals')
    /* Main */
    document.getElementById('practicals').classList.remove('text-white')
    /* Buttons */
    document.getElementById('a_1').classList.replace('btn-info', 'btn-primary');    document.getElementById('a_1').classList.remove('btn-outline-primary')  /* 1 */
    document.getElementById('a_2').classList.replace('btn-info', 'btn-primary');    document.getElementById('a_2').classList.remove('btn-outline-primary')  /* 2 */
    document.getElementById('a_3').classList.replace('btn-info', 'btn-primary');    document.getElementById('a_3').classList.remove('btn-outline-primary')  /* 3 */
    document.getElementById('a_4').classList.replace('btn-info', 'btn-primary');    document.getElementById('a_4').classList.remove('btn-outline-primary')  /* 4 */
    document.getElementById('a_5').classList.replace('btn-info', 'btn-primary');    document.getElementById('a_5').classList.remove('btn-outline-primary')  /* 5 */
    document.getElementById('a_6').classList.replace('btn-info', 'btn-primary');    document.getElementById('a_6').classList.remove('btn-outline-primary')  /* 6 */
    document.getElementById('a_7').classList.replace('btn-info', 'btn-primary');    document.getElementById('a_7').classList.remove('btn-outline-primary')  /* 7 */
    document.getElementById('a_8').classList.replace('btn-info', 'btn-primary');    document.getElementById('a_8').classList.remove('btn-outline-primary')  /* 8 */
    document.getElementById('a_9').classList.replace('btn-info', 'btn-primary');    document.getElementById('a_9').classList.remove('btn-outline-primary')  /* 9 */
    document.getElementById('a_10').classList.replace('btn-info', 'btn-primary');   document.getElementById('a_10').classList.remove('btn-outline-primary') /* 10 */
    document.getElementById('a_11').classList.replace('btn-info', 'btn-primary');    document.getElementById('a_11').classList.remove('btn-outline-primary')  /* 1 */
    document.getElementById('a_12').classList.replace('btn-info', 'btn-primary');    document.getElementById('a_12').classList.remove('btn-outline-primary')  /* 2 */
    document.getElementById('a_13').classList.replace('btn-info', 'btn-primary');    document.getElementById('a_13').classList.remove('btn-outline-primary')  /* 3 */
    document.getElementById('a_14').classList.replace('btn-info', 'btn-primary');    document.getElementById('a_14').classList.remove('btn-outline-primary')  /* 4 */
    document.getElementById('a_15').classList.replace('btn-info', 'btn-primary');    document.getElementById('a_15').classList.remove('btn-outline-primary')  /* 5 */
    document.getElementById('a_16').classList.replace('btn-info', 'btn-primary');    document.getElementById('a_16').classList.remove('btn-outline-primary')  /* 6 */
    /* Footer */
    document.getElementById('about').classList.replace('bg-black','bg-secondary')
    document.getElementById('dev').classList.replace('bg-dark','bg-primary')
    /* Close Preview */
    document.getElementById('p1').classList.replace('closebtn-dark','closebtn')
    document.getElementById('p2').classList.replace('closebtn-dark','closebtn')
    document.getElementById('p3').classList.replace('closebtn-dark','closebtn')
    document.getElementById('p4').classList.replace('closebtn-dark','closebtn')
    document.getElementById('p5').classList.replace('closebtn-dark','closebtn')
}

/* Preview */
/* Practicals */
            /* 1 */
            function on_S_P_one() {document.getElementById("preview_S_P_one").style.height = "600px";}
            function off_S_P_one() {document.getElementById("preview_S_P_one").style.height = "0px";}

            /* 2 */
            function on_S_P_two() {document.getElementById("preview_S_P_two").style.height = "600px";}
            function off_S_P_two() {document.getElementById("preview_S_P_two").style.height = "0px";}
            
            /* 5 */
            function on_S_P_five() {document.getElementById("preview_S_P_five").style.height = "600px";}
            function off_S_P_five() {document.getElementById("preview_S_P_five").style.height = "0px";}
            
            /* 6 */
            function on_S_P_six() {document.getElementById("preview_S_P_six").style.height = "600px";}
            function off_S_P_six() {document.getElementById("preview_S_P_six").style.height = "0px";}

            /* Ohm's Law */
            function on_S_P_OL() {document.getElementById("preview_S_P_OL").style.height = "600px";}
            function off_S_P_OL() {document.getElementById("preview_S_P_OL").style.height = "0px";}