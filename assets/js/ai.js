/* Dark Mode */

function on_dark_AI()   {
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
    document.getElementById('nts-btn').classList.replace('btn-outline-primary', 'btn-outline-info')
    document.getElementById('pot-btn').classList.replace('btn-outline-primary', 'btn-outline-info')
    document.getElementById('gd-btn').classList.replace('custom-drive-button', 'custom-drive-button-dark')
    /* Activity - Banner*/
    document.getElementById('Activities-section').style.background = 'linear-gradient(#1e1393, #212529)';
    document.getElementById('Activities').classList.replace('bg-light','bg-black')
    document.getElementById('act-head').classList.replace('text-primary','text-white')
    document.getElementById('act-head').classList.replace('typo-space-journal','typo-space-journal-dark')
    /* Journal */
    /* T - 1 */
    document.getElementById('T-1_sec').classList.replace('bg-white','bg-black')
    document.getElementById('T-1_head').classList.replace('worksingle-heading','text-light')
    document.getElementById('T-1_head').classList.replace('typo-space-journal','typo-space-journal-dark')
    /* T - 2 */
    document.getElementById('T-2_sec').classList.replace('bg-white','bg-black')
    document.getElementById('T-2_head').classList.replace('worksingle-heading','text-white')
    document.getElementById('T-2_head').classList.replace('typo-space-journal','typo-space-journal-dark')
    /* Buttons */
    document.getElementById('a1').classList.replace('btn-primary','btn-info');      document.getElementById('a1').classList.add('btn-outline-primary')
    document.getElementById('a2').classList.replace('btn-primary','btn-info');      document.getElementById('a2').classList.add('btn-outline-primary')
    document.getElementById('a3').classList.replace('btn-primary','btn-info');      document.getElementById('a3').classList.add('btn-outline-primary')
    document.getElementById('a4').classList.replace('btn-primary','btn-info');      document.getElementById('a4').classList.add('btn-outline-primary')
    document.getElementById('a5').classList.replace('btn-primary','btn-info');      document.getElementById('a5').classList.add('btn-outline-primary')
    /* Footer */
    document.getElementById('about').classList.replace('bg-secondary','bg-black')
    document.getElementById('dev').classList.replace('bg-primary','bg-dark')
}
function off_dark_AI()   {
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
    document.getElementById('nts-btn').classList.replace('btn-outline-info', 'btn-outline-primary')
    document.getElementById('pot-btn').classList.replace('btn-outline-info', 'btn-outline-primary')
    document.getElementById('gd-btn').classList.replace('custom-drive-button-dark', 'custom-drive-button')
    /* Activity - Banner*/
    document.getElementById('Activities-section').style.background = 'linear-gradient(#1e1393, #fff)';
    document.getElementById('Activities').classList.replace('bg-black','bg-light')
    document.getElementById('act-head').classList.replace('text-white','text-primary')
    document.getElementById('act-head').classList.replace('typo-space-journal-dark','typo-space-journal')
    /* Journal */
    /* T - 1 */
    document.getElementById('T-1_sec').classList.replace('bg-black','bg-white')
    document.getElementById('T-1_head').classList.replace('text-light','worksingle-heading')
    document.getElementById('T-1_head').classList.replace('typo-space-journal-dark','typo-space-journal')
    /* T - 2 */
    document.getElementById('T-2_sec').classList.replace('bg-black','bg-white')
    document.getElementById('T-2_head').classList.replace('text-white','worksingle-heading')
    document.getElementById('T-2_head').classList.replace('typo-space-journal-dark','typo-space-journal')
    /* Buttons */
    document.getElementById('a1').classList.replace('btn-info','btn-primary');      document.getElementById('a1').classList.remove('btn-outline-primary')
    document.getElementById('a2').classList.replace('btn-info','btn-primary');      document.getElementById('a2').classList.remove('btn-outline-primary')
    document.getElementById('a3').classList.replace('btn-info','btn-primary');      document.getElementById('a3').classList.remove('btn-outline-primary')
    document.getElementById('a4').classList.replace('btn-info','btn-primary');      document.getElementById('a4').classList.remove('btn-outline-primary')
    document.getElementById('a5').classList.replace('btn-info','btn-primary');      document.getElementById('a5').classList.remove('btn-outline-primary')
    /* Footer */
    document.getElementById('about').classList.replace('bg-black','bg-secondary')
    document.getElementById('dev').classList.replace('bg-dark','bg-primary')
}