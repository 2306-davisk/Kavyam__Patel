/* */ /* Dark Mode */ /* */

/* English */

function on_dark_english()  {
    /* body */
    document.body.style.backgroundColor = "#212529"
    document.body.classList.add('scroll-dark')
    /* button */
    document.getElementById('on_button-eng').style.display = "none";
    document.getElementById('off_button-eng').style.display = "block";
    /* Nav Section */
    document.getElementById('nav_section').style.background = 'linear-gradient(#000, #3d34a3)'
    /* Nav */
    document.getElementById('main_nav').classList.replace('bg-light', 'bg-black')                           /* Background */
    document.getElementById('main_nav').classList.replace('navbar-light', 'navbar-dark')                    /* Text */
    document.getElementById('company-name-dark-eng').classList.replace('text-dark', 'text-light')           /* Company text */
    document.getElementById('company-name-dark-eng-af').classList.replace('text-dark', 'text-light')        /* Company text */
    document.getElementById('kavyam').classList.replace('text-primary', 'text-info')
    /* Nav - Button */
    document.getElementById('act-btn').classList.replace('btn-outline-primary', 'btn-outline-info')
    document.getElementById('notes-btn').classList.replace('btn-outline-primary', 'btn-outline-info')
    document.getElementById('abt-btn').classList.replace('btn-outline-primary', 'btn-outline-info')
    document.getElementById('gd-btn-eng').classList.replace('custom-drive-button', 'custom-drive-button-dark')
    /* Activity - Banner */
    document.getElementById('Activities-section').style.background  = 'linear-gradient(#1e1393, #212529)'              /* Section */
    document.getElementById('Activity-text').classList.replace('text-primary','text-info')                          /* Text */
    document.getElementById('Activities').classList.replace('bg-light', 'bg-black')                                 /* Background */
    document.getElementById('Activity-text').classList.replace('typo-space-line-Act','typo-space-line-Act-dark')    /* Underline */
    /* Activity */
    document.getElementById('activity-container').classList.add('bg-dark', 'text-light')
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
    /* Notes - Banner */
    document.getElementById('Notes-section').style.background = '#212529'   /* Section */
    document.getElementById('Notes-text').classList.replace('text-primary','text-info')                             /* Text */
    document.getElementById('notes').classList.replace('bg-light', 'bg-black')                                      /* Background */
    document.getElementById('Notes-text').classList.replace('typo-space-line-large','typo-space-line-large-dark')   /* Underline */
    /* Notes */
    document.getElementById('notes-container').classList.add('bg-dark', 'text-light')
    /* Notes - Button */
    document.getElementById('n_1').classList.replace('btn-primary','btn-info'); document.getElementById('n_1').classList.add('btn-outline-primary')  /* 1 */
    document.getElementById('n_2').classList.replace('btn-primary','btn-info'); document.getElementById('n_2').classList.add('btn-outline-primary')  /* 2 */
    document.getElementById('n_3').classList.replace('btn-primary','btn-info'); document.getElementById('n_3').classList.add('btn-outline-primary')  /* 3 */ 
    document.getElementById('n_4').classList.replace('btn-primary','btn-info'); document.getElementById('n_4').classList.add('btn-outline-primary')  /* 4 */ 
    document.getElementById('n_5').classList.replace('btn-primary','btn-info'); document.getElementById('n_5').classList.add('btn-outline-primary')  /* 5 */ 
    document.getElementById('n_6').classList.replace('btn-primary','btn-info'); document.getElementById('n_6').classList.add('btn-outline-primary')  /* 6 */ 
    document.getElementById('n_7').classList.replace('btn-primary','btn-info'); document.getElementById('n_7').classList.add('btn-outline-primary')  /* 7 */ 
    document.getElementById('n_8').classList.replace('btn-primary','btn-info'); document.getElementById('n_8').classList.add('btn-outline-primary')  /* 8 */ 
    document.getElementById('n_9').classList.replace('btn-primary','btn-info'); document.getElementById('n_9').classList.add('btn-outline-primary')  /* 9 */ 
    document.getElementById('n_10').classList.replace('btn-primary','btn-info'); document.getElementById('n_10').classList.add('btn-outline-primary') /* 10 */
    document.getElementById('n_11').classList.replace('btn-primary','btn-info'); document.getElementById('n_11').classList.add('btn-outline-primary') /* 11 */
    document.getElementById('n_12').classList.replace('btn-primary','btn-info'); document.getElementById('n_12').classList.add('btn-outline-primary') /* 12 */
    document.getElementById("n_13").classList.replace("btn-primary","btn-info"); document.getElementById("n_13").classList.add("btn-outline-primary") /* 13 */
    document.getElementById("n_14").classList.replace("btn-primary","btn-info"); document.getElementById("n_14").classList.add("btn-outline-primary") /* 13 */
    document.getElementById("n_15").classList.replace("btn-primary","btn-info"); document.getElementById("n_15").classList.add("btn-outline-primary") /* 13 */
    document.getElementById("n_16").classList.replace("btn-primary","btn-info"); document.getElementById("n_16").classList.add("btn-outline-primary") /* 13 */
    document.getElementById("n_17").classList.replace("btn-primary","btn-info"); document.getElementById("n_17").classList.add("btn-outline-primary") /* 13 */
    /* Footer */
    document.getElementById('about').classList.replace('bg-secondary', 'bg-black')
    document.getElementById('dev').classList.replace('bg-primary','bg-dark')
    /* Close Preview */
    document.getElementById('p1').classList.replace('closebtn', 'closebtn-dark')
    document.getElementById('p2').classList.replace('closebtn', 'closebtn-dark')
    document.getElementById('p3').classList.replace('closebtn', 'closebtn-dark')
    document.getElementById('p4').classList.replace('closebtn', 'closebtn-dark')
    document.getElementById('p5').classList.replace('closebtn', 'closebtn-dark')
    document.getElementById('p6').classList.replace('closebtn', 'closebtn-dark')
    document.getElementById('p7').classList.replace('closebtn', 'closebtn-dark')
    /* Close Notes Preview - FF*/
    document.getElementById('np1').classList.replace('closebtn', 'closebtn-dark')
    document.getElementById('np1_2').classList.replace('closebtn', 'closebtn-dark')
    document.getElementById('np1_3').classList.replace('closebtn', 'closebtn-dark')
    document.getElementById('np2').classList.replace('closebtn', 'closebtn-dark')
    document.getElementById('np2_2').classList.replace('closebtn', 'closebtn-dark')
    document.getElementById('np4_2').classList.replace('closebtn', 'closebtn-dark')
    document.getElementById('np6_2').classList.replace('closebtn', 'closebtn-dark')
    document.getElementById('np7').classList.replace('closebtn', 'closebtn-dark')
    document.getElementById('np10').classList.replace('closebtn', 'closebtn-dark')
    document.getElementById('np11').classList.replace('closebtn', 'closebtn-dark')
    /* Close Notes Preview - FWF */
    document.getElementById('n1').classList.replace('closebtn', 'closebtn-dark')
    document.getElementById('n2').classList.replace('closebtn', 'closebtn-dark')
    document.getElementById('n5').classList.replace('closebtn', 'closebtn-dark')
    document.getElementById('n8').classList.replace('closebtn', 'closebtn-dark')
    /* Close Notes Preview - Grammer */
    document.getElementById('g1').classList.replace('closebtn', 'closebtn-dark')
    document.getElementById('g2').classList.replace('closebtn', 'closebtn-dark')
    document.getElementById('g3').classList.replace('closebtn', 'closebtn-dark')
}

function off_dark_english()  {
    /* body */
    document.body.style.backgroundColor = "white"
    document.body.classList.remove('scroll-dark')
    /* button */
    document.getElementById('off_button-eng').style.display = "none";
    document.getElementById('on_button-eng').style.display = "block";
    /* Nav Section */
    document.getElementById('nav_section').style.background = 'linear-gradient(#fff, #5247c7)'
    /* Nav */
    document.getElementById('main_nav').classList.replace('bg-black', 'bg-light')                           /* Background */
    document.getElementById('main_nav').classList.replace('navbar-dark', 'navbar-light')                    /* Text */
    document.getElementById('company-name-dark-eng').classList.replace('text-light', 'text-dark')           /* Company text */
    document.getElementById('company-name-dark-eng-af').classList.replace('text-light', 'text-dark')        /* Company text */
    document.getElementById('kavyam').classList.replace('text-info', 'text-primary')
    /* Nav - Button */
    document.getElementById('act-btn').classList.replace('btn-outline-info', 'btn-outline-primary')
    document.getElementById('notes-btn').classList.replace('btn-outline-info', 'btn-outline-primary')
    document.getElementById('abt-btn').classList.replace('btn-outline-info', 'btn-outline-primary')
    document.getElementById('gd-btn-eng').classList.replace('custom-drive-button-dark', 'custom-drive-button')
    /* Activity - Banner */
    document.getElementById('Activities-section').style.background  = 'linear-gradient(#1e1393, #fff)'              /* Section */
    document.getElementById('Activity-text').classList.replace('text-info','text-primary')                          /* Text */
    document.getElementById('Activities').classList.replace('bg-black', 'bg-light')                                 /* Background */
    document.getElementById('Activity-text').classList.replace('typo-space-line-Act-dark','typo-space-line-Act')    /* Underline */
    /* Activity */
    document.getElementById('activity-container').classList.remove('bg-dark', 'text-light')
    /* Activity Buttons */
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
    document.getElementById('a_11').classList.replace('btn-info', 'btn-primary');   document.getElementById('a_11').classList.remove('btn-outline-primary') /* 11 */
    document.getElementById('a_12').classList.replace('btn-info', 'btn-primary');   document.getElementById('a_12').classList.remove('btn-outline-primary') /* 12 */
    document.getElementById('a_13').classList.replace('btn-info', 'btn-primary');   document.getElementById('a_13').classList.remove('btn-outline-primary') /* 13 */
    document.getElementById('a_14').classList.replace('btn-info', 'btn-primary');   document.getElementById('a_14').classList.remove('btn-outline-primary') /* 14 */
    document.getElementById('a_15').classList.replace('btn-info', 'btn-primary');   document.getElementById('a_15').classList.remove('btn-outline-primary') /* 15 */
    document.getElementById('a_16').classList.replace('btn-info', 'btn-primary');   document.getElementById('a_16').classList.remove('btn-outline-primary') /* 16 */
    /* Notes - Banner */
    document.getElementById('Notes-section').style.background = '#fff'   /* Section */
    document.getElementById('Notes-text').classList.replace('text-info','text-primary')                             /* Text */
    document.getElementById('notes').classList.replace('bg-black', 'bg-light')                                      /* Background */
    document.getElementById('Notes-text').classList.replace('typo-space-line-large-dark','typo-space-line-large')   /* Underline */
    /* Notes */
    document.getElementById('notes-container').classList.remove('bg-dark', 'text-light')
    /* Notes - Button */
    document.getElementById('n_1').classList.replace('btn-info', 'btn-primary'); document.getElementById('n_1').classList.remove('btn-outline-primary')  /* 1 */
    document.getElementById('n_2').classList.replace('btn-info', 'btn-primary'); document.getElementById('n_2').classList.remove('btn-outline-primary')  /* 2 */
    document.getElementById('n_3').classList.replace('btn-info', 'btn-primary'); document.getElementById('n_3').classList.remove('btn-outline-primary')  /* 3 */ 
    document.getElementById('n_4').classList.replace('btn-info', 'btn-primary'); document.getElementById('n_4').classList.remove('btn-outline-primary')  /* 4 */ 
    document.getElementById('n_5').classList.replace('btn-info', 'btn-primary'); document.getElementById('n_5').classList.remove('btn-outline-primary')  /* 5 */ 
    document.getElementById('n_6').classList.replace('btn-info', 'btn-primary'); document.getElementById('n_6').classList.remove('btn-outline-primary')  /* 6 */ 
    document.getElementById('n_7').classList.replace('btn-info', 'btn-primary'); document.getElementById('n_7').classList.remove('btn-outline-primary')  /* 7 */ 
    document.getElementById('n_8').classList.replace('btn-info', 'btn-primary'); document.getElementById('n_8').classList.remove('btn-outline-primary')  /* 8 */ 
    document.getElementById('n_9').classList.replace('btn-info', 'btn-primary'); document.getElementById('n_9').classList.remove('btn-outline-primary')  /* 9 */ 
    document.getElementById('n_10').classList.replace('btn-info', 'btn-primary'); document.getElementById('n_10').classList.remove('btn-outline-primary') /* 10 */
    document.getElementById('n_11').classList.replace('btn-info', 'btn-primary'); document.getElementById('n_11').classList.remove('btn-outline-primary') /* 11 */
    document.getElementById('n_12').classList.replace('btn-info', 'btn-primary'); document.getElementById('n_12').classList.remove('btn-outline-primary') /* 12 */
    document.getElementById('n_13').classList.replace('btn-info', 'btn-primary'); document.getElementById('n_13').classList.remove('btn-outline-primary') /* 13 */
    document.getElementById('n_14').classList.replace('btn-info', 'btn-primary'); document.getElementById('n_14').classList.remove('btn-outline-primary') /* 13 */
    document.getElementById('n_15').classList.replace('btn-info', 'btn-primary'); document.getElementById('n_15').classList.remove('btn-outline-primary') /* 13 */
    document.getElementById('n_16').classList.replace('btn-info', 'btn-primary'); document.getElementById('n_16').classList.remove('btn-outline-primary') /* 13 */
    document.getElementById('n_17').classList.replace('btn-info', 'btn-primary'); document.getElementById('n_17').classList.remove('btn-outline-primary') /* 13 */
    /* Footer */
    document.getElementById('about').classList.replace('bg-black', 'bg-secondary')
    document.getElementById('dev').classList.replace('bg-dark','bg-primary')
    /* Close Preview */
    document.getElementById('p1').classList.replace('closebtn-dark', 'closebtn')
    document.getElementById('p2').classList.replace('closebtn-dark', 'closebtn')
    document.getElementById('p3').classList.replace('closebtn-dark', 'closebtn')
    document.getElementById('p4').classList.replace('closebtn-dark', 'closebtn')
    document.getElementById('p5').classList.replace('closebtn-dark', 'closebtn')
    document.getElementById('p6').classList.replace('closebtn-dark', 'closebtn')
    document.getElementById('p7').classList.replace('closebtn-dark', 'closebtn')
    /* Close Notes Preview - FF */
    document.getElementById('np1').classList.replace('closebtn-dark', 'closebtn')
    document.getElementById('np1_2').classList.replace('closebtn-dark', 'closebtn')
    document.getElementById('np1_3').classList.replace('closebtn-dark', 'closebtn')
    document.getElementById('np2').classList.replace('closebtn-dark', 'closebtn')
    document.getElementById('np2_2').classList.replace('closebtn-dark', 'closebtn')
    document.getElementById('np4_2').classList.replace('closebtn-dark', 'closebtn')
    document.getElementById('np6_2').classList.replace('closebtn-dark', 'closebtn')
    document.getElementById('np7').classList.replace('closebtn-dark', 'closebtn')
    document.getElementById('np10').classList.replace('closebtn-dark', 'closebtn')
    document.getElementById('np11').classList.replace('closebtn-dark', 'closebtn')
    /* Close Notes Preview - FWF */   
    document.getElementById('n1').classList.replace('closebtn-dark', 'closebtn')
    document.getElementById('n2').classList.replace('closebtn-dark', 'closebtn')
    document.getElementById('n5').classList.replace('closebtn-dark', 'closebtn')
    document.getElementById('n8').classList.replace('closebtn-dark', 'closebtn')
    /* Close Notes Preview - Grammer */   
    document.getElementById('g1').classList.replace('closebtn-dark', 'closebtn')
    document.getElementById('g2').classList.replace('closebtn-dark', 'closebtn')
    document.getElementById('g3').classList.replace('closebtn-dark', 'closebtn')
}
/* Preview */
/* Activities */

            /* First Flight */

                /* Ch 1.1 - A Letter to God */
                function on_English_Activity_FF_Letter_to_God() {document.getElementById("preview_English_Activity_FF_Letter_to_God").style.height = '600px';}
                function off_English_Activity_FF_Letter_to_God() {document.getElementById("preview_English_Activity_FF_Letter_to_God").style.height = "0px";}

            /* Ch 1.2 - Dust of Snow */
                function on_English_Activity_FF_Dust_of_Snow() {document.getElementById("preview_English_Activity_FF_Dust_of_Snow").style.height = '600px';}
                function off_English_Activity_FF_Dust_of_Snow() {document.getElementById("preview_English_Activity_FF_Dust_of_Snow").style.height = "0px";}

            /* Ch 1.3 - Fire and Ice */
                function on_English_Activity_FF_Fire_and_Ice() {document.getElementById("preview_English_Activity_FF_Fire_and_Ice").style.height = '600px';}
                function off_English_Activity_FF_Fire_and_Ice() {document.getElementById("preview_English_Activity_FF_Fire_and_Ice").style.height = "0px";}

            /* Ch 2.1 - Nelson Mandela */
                function on_English_Activity_FF_Nelson_Mandela() {document.getElementById("preview_English_Activity_FF_Nelson_Mandela").style.height = '600px';}
                function off_English_Activity_FF_Nelson_Mandela() {document.getElementById("preview_English_Activity_FF_Nelson_Mandela").style.height = "0px";}
                
                
        /* Footprints Without Feet */
            /* Ch 1 - Triumph of Surgery */
                function on_English_Activity_FF_Triumph_of_Surgery() {document.getElementById("preview_English_Activity_FF_Triumph_of_Surgery").style.height = '600px';}
                function off_English_Activity_FF_Triumph_of_Surgery() {document.getElementById("preview_English_Activity_FF_Triumph_of_Surgery").style.height = "0px";}

        /* Vaction Assignment */
        function on_English_Activity_Vacation() {document.getElementById("preview_English_Activity_Vacation_Assignment").style.height = '600px';}
        function off_English_Activity_Vacation() {document.getElementById("preview_English_Activity_Vacation_Assignment").style.height = "0px";}

    /* Portfolio */
    function on_English_Portfolio() {document.getElementById("preview_English_Portfolio").style.height = "600px";}
    function off_English_Portfolio() {document.getElementById("preview_English_Portfolio").style.height = "0px";} 

/* Notes */
        /* First Flight */
        /* Ch 1.1 - A Letter to God */
        function on_E_N_FF_Letter_to_God() {
            document.getElementById("preview_E_N_FF_Letter_to_God").style.height = '600px'; return(
                off_E_N_FF_Dust_of_Snow(),
                off_E_N_FF_Fire_and_Ice(),
                off_E_N_FF_Nelson_Mandela(),
                off_E_N_FF_Tiger_in_the_Zoo(),
                off_E_N_FF_Amanda(),
                off_E_N_FF_Animals(),
                off_E_N_FF_Glimpses_of_India(),
                off_E_N_FF_Sermon_at_Benares(),
                off_E_N_FF_The_Proposal()
        )}
        function off_E_N_FF_Letter_to_God() {document.getElementById("preview_E_N_FF_Letter_to_God").style.height = "0px";}
        /* Ch 1.2 - Dust of Snow */
        function on_E_N_FF_Dust_of_Snow() {
            document.getElementById("preview_E_N_FF_Dust_of_Snow").style.height = '600px'; return(
                off_E_N_FF_Letter_to_God(),
                off_E_N_FF_Fire_and_Ice(),
                off_E_N_FF_Nelson_Mandela(),
                off_E_N_FF_Tiger_in_the_Zoo(),
                off_E_N_FF_Amanda(),
                off_E_N_FF_Animals(),
                off_E_N_FF_Glimpses_of_India(),
                off_E_N_FF_Sermon_at_Benares(),
                off_E_N_FF_The_Proposal()
        )}
        function off_E_N_FF_Dust_of_Snow() {document.getElementById("preview_E_N_FF_Dust_of_Snow").style.height = "0px";}
        /* Ch 1.3 - Fire and Ice */
        function on_E_N_FF_Fire_and_Ice() {document.getElementById("preview_E_N_FF_Fire_and_Ice").style.height = '600px'; return(
                off_E_N_FF_Letter_to_God(),
                off_E_N_FF_Dust_of_Snow(),
                off_E_N_FF_Nelson_Mandela(),
                off_E_N_FF_Tiger_in_the_Zoo(),
                off_E_N_FF_Amanda(),
                off_E_N_FF_Animals(),
                off_E_N_FF_Glimpses_of_India(),
                off_E_N_FF_Sermon_at_Benares(),
                off_E_N_FF_The_Proposal()
        )}
        function off_E_N_FF_Fire_and_Ice() {document.getElementById("preview_E_N_FF_Fire_and_Ice").style.height = "0px";}
        /* Ch 2.1 - Nelson Mandela */
        function on_E_N_FF_Nelson_Mandela() {document.getElementById("preview_E_N_FF_Nelson_Mandela").style.height = '600px'; return(
                off_E_N_FF_Letter_to_God(),
                off_E_N_FF_Dust_of_Snow(),
                off_E_N_FF_Fire_and_Ice(),
                off_E_N_FF_Tiger_in_the_Zoo(),
                off_E_N_FF_Amanda(),
                off_E_N_FF_Animals(),
                off_E_N_FF_Glimpses_of_India(),
                off_E_N_FF_Sermon_at_Benares(),
                off_E_N_FF_The_Proposal()
        )}
        function off_E_N_FF_Nelson_Mandela() {document.getElementById("preview_E_N_FF_Nelson_Mandela").style.height = "0px";}
        /* Ch 2.2 - Tiger in the Zoo */
        function on_E_N_FF_Tiger_in_the_Zoo() {document.getElementById("preview_E_N_FF_Tiger_in_the_Zoo").style.height = '600px'; return(
                off_E_N_FF_Letter_to_God(),
                off_E_N_FF_Dust_of_Snow(),
                off_E_N_FF_Fire_and_Ice(),
                off_E_N_FF_Nelson_Mandela(),
                off_E_N_FF_Amanda(),
                off_E_N_FF_Animals(),
                off_E_N_FF_Glimpses_of_India(),
                off_E_N_FF_Sermon_at_Benares(),
                off_E_N_FF_The_Proposal()
        )}
        function off_E_N_FF_Tiger_in_the_Zoo() {document.getElementById("preview_E_N_FF_Tiger_in_the_Zoo").style.height = "0px";}
        /* Ch 4.2 - Amanda */
        function on_E_N_FF_Amanda() {document.getElementById("preview_E_N_FF_Amanda").style.height = '600px'; return(
            off_E_N_FF_Letter_to_God(),
            off_E_N_FF_Dust_of_Snow(),
            off_E_N_FF_Fire_and_Ice(),
            off_E_N_FF_Nelson_Mandela(),
            off_E_N_FF_Tiger_in_the_Zoo(),
            off_E_N_FF_Animals(),
            off_E_N_FF_Glimpses_of_India(),
            off_E_N_FF_Sermon_at_Benares(),
            off_E_N_FF_The_Proposal()
        )}
        function off_E_N_FF_Amanda() {document.getElementById("preview_E_N_FF_Amanda").style.height = "0px";}
        /* Ch 6.2 - Animals */
        function on_E_N_FF_Animals() {document.getElementById("preview_E_N_FF_Animals").style.height = '600px'; return(
            off_E_N_FF_Letter_to_God(),
            off_E_N_FF_Dust_of_Snow(),
            off_E_N_FF_Fire_and_Ice(),
            off_E_N_FF_Nelson_Mandela(),
            off_E_N_FF_Tiger_in_the_Zoo(),
            off_E_N_FF_Amanda(),
            off_E_N_FF_Glimpses_of_India(),
            off_E_N_FF_Sermon_at_Benares(),
            off_E_N_FF_The_Proposal()
        )}
        function off_E_N_FF_Animals() {document.getElementById("preview_E_N_FF_Animals").style.height = "0px";}        
        /* Ch 7 - Glimpses of India */
        function on_E_N_FF_Glimpses_of_India() {document.getElementById("preview_E_N_FF_Glimpses_of_India").style.height = '600px'; return(
            off_E_N_FF_Letter_to_God(),
            off_E_N_FF_Dust_of_Snow(),
            off_E_N_FF_Fire_and_Ice(),
            off_E_N_FF_Nelson_Mandela(),
            off_E_N_FF_Tiger_in_the_Zoo(),
            off_E_N_FF_Amanda(),
            off_E_N_FF_Animals(),
            off_E_N_FF_Sermon_at_Benares(),
            off_E_N_FF_The_Proposal()
        )}
        function off_E_N_FF_Glimpses_of_India() {document.getElementById("preview_E_N_FF_Glimpses_of_India").style.height = "0px";}        
        /* Ch 10 - Sermon at Benares */
        function on_E_N_FF_Sermon_at_Benares() {document.getElementById("preview_E_N_FF_Sermon_at_Benares").style.height = '600px'; return(
            off_E_N_FF_Letter_to_God(),
            off_E_N_FF_Dust_of_Snow(),
            off_E_N_FF_Fire_and_Ice(),
            off_E_N_FF_Nelson_Mandela(),
            off_E_N_FF_Tiger_in_the_Zoo(),
            off_E_N_FF_Amanda(),
            off_E_N_FF_Animals(),
            off_E_N_FF_Glimpses_of_India(),
            off_E_N_FF_The_Proposal()
        )}
        function off_E_N_FF_Sermon_at_Benares() {document.getElementById("preview_E_N_FF_Sermon_at_Benares").style.height = "0px";}        
        /* Ch 11 - The Proposal */
        function on_E_N_FF_The_Proposal() {document.getElementById("preview_E_N_FF_The_Proposal").style.height = '600px'; return(
            off_E_N_FF_Letter_to_God(),
            off_E_N_FF_Dust_of_Snow(),
            off_E_N_FF_Fire_and_Ice(),
            off_E_N_FF_Nelson_Mandela(),
            off_E_N_FF_Tiger_in_the_Zoo(),
            off_E_N_FF_Amanda(),
            off_E_N_FF_Animals(),
            off_E_N_FF_Glimpses_of_India(),
            off_E_N_FF_Sermon_at_Benares()
        )}
        function off_E_N_FF_The_Proposal() {document.getElementById("preview_E_N_FF_The_Proposal").style.height = "0px";}        
        
        /* Footprints Without Feet */
        /* Ch 1 - Triumph of Surgery */
        function on_E_N_FwF_Triumph_of_Surgery()    {document.getElementById('preview_E_N_FwF_Triumph_of_Surgery').style.height = '600px'; return(
            off_E_N_FwF_Thief_Story(),
            off_E_N_FwF_FWF(),
            off_E_N_FwF_Hack_Driver()
        )}
        function off_E_N_FwF_Triumph_of_Surgery()   {document.getElementById('preview_E_N_FwF_Triumph_of_Surgery').style.height = '0px'}
        /* Ch 2 - A Thief's Story */
        function on_E_N_FwF_Thief_Story()   {document.getElementById('preview_E_N_FwF_Thief_Story').style.height = '600px'; return(
            off_E_N_FwF_Triumph_of_Surgery(),
            off_E_N_FwF_FWF(),
            off_E_N_FwF_Hack_Driver()
        )}
        function off_E_N_FwF_Thief_Story()  {document.getElementById('preview_E_N_FwF_Thief_Story').style.height = '0px';}
        /* Ch 5 - Footprints Without Feet */
        function on_E_N_FwF_FWF()   {document.getElementById('preview_E_N_FwF_FWF').style.height = '600px'; return(
            off_E_N_FwF_Triumph_of_Surgery(),
            off_E_N_FwF_Thief_Story(),
            off_E_N_FwF_Hack_Driver()
        )}
        function off_E_N_FwF_FWF()  {document.getElementById('preview_E_N_FwF_FWF').style.height = '0px';}
        /* Ch 8 - The Hack Driver */
        function on_E_N_FwF_Hack_Driver()   {document.getElementById('preview_E_N_FwF_Hack_Driver').style.height = '600px'; return(
            off_E_N_FwF_Triumph_of_Surgery(),
            off_E_N_FwF_Thief_Story(),
            off_E_N_FwF_FWF()
        )}
        function off_E_N_FwF_Hack_Driver()  {document.getElementById('preview_E_N_FwF_Hack_Driver').style.height = '0px';}

        /* Grammer and Writing Skills */
        /* Letter - Placing Order */
        function on_E_N_G_Placing_Order() {document.getElementById('preview_E_N_G_Placing_Order').style.height = '600px'; return(
            off_E_N_G_Enquiry(),
            off_E_N_G_Editor()
        )}
        function off_E_N_G_Placing_Order(){document.getElementById('preview_E_N_G_Placing_Order').style.height = '0px'}
        /* Letter - Enquiry */
        function on_E_N_G_Enquiry() {document.getElementById('preview_E_N_G_Enquiry').style.height = '600px'; return(
            off_E_N_G_Placing_Order(),
            off_E_N_G_Editor()
        )}
        function off_E_N_G_Enquiry(){document.getElementById('preview_E_N_G_Enquiry').style.height = '0px'}
        /* Letter - Editor */
        function on_E_N_G_Editor()  {document.getElementById('preview_E_N_G_Editor').style.height = '600px'; return(
            off_E_N_G_Placing_Order(),
            off_E_N_G_Enquiry()
        )}
        function off_E_N_G_Editor() {document.getElementById('preview_E_N_G_Editor').style.height = '0px'}