const commonMenuHTML = `
  <div class="drawer-overlay" id="drawerOverlay" onclick="toggleDrawer()"></div>
  <div class="nav-drawer" id="navDrawer">
    <div class="menu-category">
      <h3 onclick="toggleAccordion(this)">ABOUT <span class="arrow">▼</span></h3>
      <ul class="drawer-sub-menu">
        <li><a href="about-what.html">What is TS</a></li>
        <li><a href="about-why.html">Why TS</a></li>
        <li><a href="about-chair.html">Message from the Chair</a></li>
        <li><a href="about-mission.html">Mission & History & Vision</a></li>
        <li><a href="about-contact.html">Contact US</a></li>
      </ul>
    </div>
    <div class="menu-category">
      <h3 onclick="toggleAccordion(this)">PEOPLE <span class="arrow">▼</span></h3>
      <ul class="drawer-sub-menu">
        <li><a href="people-faculty.html">Faculty</a></li>
        <li><a href="people-staff.html">Administrative Staff</a></li>
      </ul>
    </div>
    <div class="menu-category">
      <h3 onclick="toggleAccordion(this)">ACADEMICS <span class="arrow">▼</span></h3>
      <div class="drawer-sub-menu">
        <div style="margin-top:5px;">
          <div style="font-size:.9rem;color:var(--suny-navy);font-weight:bold;display:block;margin-bottom:5px;">Undergraduate (UGRD)</div>
          <div style="padding-left:15px;display:flex;flex-direction:column;gap:6px;margin-bottom:12px;">
            <a href="academics-ugrd-program.html" style="font-weight:500;color:#666;font-size:.88rem;">• Program</a>
            <a href="academics-ugrd-catalog.html" style="font-weight:500;color:#666;font-size:.88rem;">• Catalog</a>
            <a href="academics-ugrd-milestones.html" style="font-weight:500;color:#666;font-size:.88rem;">• Milestones</a>
            <a href="academics-ugrd-courses.html" style="font-weight:500;color:#666;font-size:.88rem;">• Courses</a>
          </div>
        </div>
        <div>
          <div style="font-size:.9rem;color:var(--suny-navy);font-weight:bold;display:block;margin-bottom:5px;">Graduate (GRD)</div>
          <div style="padding-left:15px;display:flex;flex-direction:column;gap:6px;margin-bottom:12px;">
            <a href="academics-grd-program.html" style="font-weight:500;color:#666;font-size:.88rem;">• Program</a>
            <a href="academics-grd-catalog.html" style="font-weight:500;color:#666;font-size:.88rem;">• Catalog</a>
            <a href="academics-grd-milestones.html" style="font-weight:500;color:#666;font-size:.88rem;">• Milestones</a>
            <a href="academics-grd-courses.html" style="font-weight:500;color:#666;font-size:.88rem;">• Courses</a>
          </div>
        </div>
      </div>
    </div>
    <div class="menu-category">
      <h3 onclick="toggleAccordion(this)">COMMUNITY <span class="arrow">▼</span></h3>
      <ul class="drawer-sub-menu">
        <li><a href="community-news.html">Department News</a></li>
        <li><a href="community-announcements.html">Announcements</a></li>
      </ul>
    </div>
    <div class="menu-category">
      <h3 onclick="toggleAccordion(this)">USEFUL RESOURCES <span class="arrow">▼</span></h3>
      <ul class="drawer-sub-menu">
        <li><a href="resources-faq.html">FAQ</a></li>
        <li><a href="resources-forms.html">Forms & Documents</a></li>
      </ul>
    </div>
  </div>
`;

function toggleDrawer(){
  const drawer=document.getElementById('navDrawer');
  const overlay=document.getElementById('drawerOverlay');
  if(drawer&&overlay){drawer.classList.toggle('open');overlay.classList.toggle('show');}
}

function toggleAccordion(el){
  const item=el.closest('.menu-category');
  if(!item)return;
  const open=item.classList.contains('active');
  document.querySelectorAll('.menu-category').forEach(cat=>{
    cat.classList.remove('active');
    const sub=cat.querySelector('.drawer-sub-menu');
    if(sub) sub.style.maxHeight=null;
  });
  if(!open){item.classList.add('active');const sub=item.querySelector('.drawer-sub-menu');if(sub)sub.style.maxHeight='500px';}
}

window.toggleDrawer=toggleDrawer;
window.toggleAccordion=toggleAccordion;

document.addEventListener('DOMContentLoaded', function(){
  const menuContainer=document.getElementById('menu-container');
  if(menuContainer) menuContainer.innerHTML=commonMenuHTML;
});