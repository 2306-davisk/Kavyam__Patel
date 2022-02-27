/* */ /* Dark Mode */ /* */

/* English */

function on_dark_english()  {
    /* body */
    document.body.style.backgroundColor = "#212529"
    /* button */
    document.getElementById('on_button-eng').style.display = "none";
    document.getElementById('off_button-eng').style.display = "block";
    /* Nav Section */
    document.getElementById('nav_section').style.background = 'linear-gradient(#000, #342c8d)'
    /* Nav */
    document.getElementById('main_nav').classList.replace('bg-light', 'bg-black')                           /* Background */
    document.getElementById('main_nav').classList.replace('navbar-light', 'navbar-dark')                    /* Text */
    document.getElementById('company-name-dark-eng').classList.replace('text-dark', 'text-light')           /* Company text */
    document.getElementById('company-name-dark-eng-af').classList.replace('text-dark', 'text-light')        /* Company text */
    document.getElementById('company-name-dark-eng-af').classList.replace('text-dark', 'text-light')        /* Company Main text */
    document.getElementById('company-main-text-eng').classList.replace('text-primary', 'text-info')
    document.getElementById('gd-btn-eng').classList.replace('custom-drive-button', 'custom-drive-button-dark')
    /* Activity - Banner */
    document.getElementById('Activities-section').style.background  = 'linear-gradient(#1e1393, #212529)'              /* Section */
    document.getElementById('Activity-text').classList.replace('text-primary','text-info')                          /* Text */
    document.getElementById('Activities').classList.replace('bg-light', 'bg-black')                                 /* Background */
    document.getElementById('Activity-text').classList.replace('typo-space-line-Act','typo-space-line-Act-dark')    /* Underline */
    /* Activity */
    document.getElementById('activity-container').classList.add('bg-dark', 'text-light')
    /* Notes - Banner */
    document.getElementById('Notes-section').style.background = '#212529'   /* Section */
    document.getElementById('Notes-text').classList.replace('text-primary','text-info')                             /* Text */
    document.getElementById('notes').classList.replace('bg-light', 'bg-black')                                      /* Background */
    document.getElementById('Notes-text').classList.replace('typo-space-line-large','typo-space-line-large-dark')   /* Underline */
    /* Notes */
    document.getElementById('notes-container').classList.add('bg-dark', 'text-light')
    /* Footer */
    document.getElementById('about').classList.replace('bg-secondary', 'bg-black')
    document.getElementById('dev').classList.replace('bg-primary','bg-dark')
}

function off_dark_english()  {
    /* body */
    document.body.style.backgroundColor = "white"
    /* button */
    document.getElementById('off_button-eng').style.display = "none";
    document.getElementById('on_button-eng').style.display = "block";
    /* Nav Section */
    document.getElementById('nav_section').style.background = 'linear-gradient(#fff, #342c8d)'
    /* Nav */
    document.getElementById('main_nav').classList.replace('bg-black', 'bg-light')                           /* Background */
    document.getElementById('main_nav').classList.replace('navbar-dark', 'navbar-light')                    /* Text */
    document.getElementById('company-name-dark-eng').classList.replace('text-dark', 'text-light')           /* Company text */
    document.getElementById('company-name-dark-eng-af').classList.replace('text-light', 'text-dark')        /* Company text */
    document.getElementById('company-name-dark-eng-af').classList.replace('text-light', 'text-dark')        /* Company Main text */
    document.getElementById('company-main-text-eng').classList.replace('text-info', 'text-primary')
    document.getElementById('gd-btn-eng').classList.replace('custom-drive-button-dark', 'custom-drive-button')
    /* Activity - Banner */
    document.getElementById('Activities-section').style.background  = 'linear-gradient(#1e1393, #fff)'              /* Section */
    document.getElementById('Activity-text').classList.replace('text-info','text-primary')                          /* Text */
    document.getElementById('Activities').classList.replace('bg-black', 'bg-light')                                 /* Background */
    document.getElementById('Activity-text').classList.replace('typo-space-line-Act-dark','typo-space-line-Act')    /* Underline */
    /* Activity */
    document.getElementById('activity-container').classList.remove('bg-dark', 'text-light')
    /* Notes - Banner */
    document.getElementById('Notes-section').style.background = '#fff'   /* Section */
    document.getElementById('Notes-text').classList.replace('text-info','text-primary')                             /* Text */
    document.getElementById('notes').classList.replace('bg-black', 'bg-light')                                      /* Background */
    document.getElementById('Notes-text').classList.replace('typo-space-line-large-dark','typo-space-line-large')   /* Underline */
    /* Notes */
    document.getElementById('notes-container').classList.remove('bg-dark', 'text-light')
    /* Footer */
    document.getElementById('about').classList.replace('bg-black', 'bg-secondary')
    document.getElementById('dev').classList.replace('bg-dark','bg-primary')
}