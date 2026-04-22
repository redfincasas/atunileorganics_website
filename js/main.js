var mobOpen=false;

function toggleMobMenu(){
var m=document.getElementById('mob-nav');
if(!m)return;
mobOpen=!mobOpen;
m.style.display=mobOpen?'block':'none';
}

function goPage(id){
showPage(id);
var m=document.getElementById('mob-nav');
if(m){m.style.display='none';mobOpen=false;}
}

function showPage(id){
var pages=document.querySelectorAll('.page');
for(var i=0;i<pages.length;i++)pages[i].classList.remove('active');
var t=document.getElementById('page-'+id);
if(t)t.classList.add('active');
var links=document.querySelectorAll('.nav-links a');
for(var j=0;j<links.length;j++)links[j].classList.remove('active');
var n=document.getElementById('nav-'+id);
if(n)n.classList.add('active');
window.scrollTo(0,0);
hideBlogPosts();

// Update hash silently if it changed
if (window.location.hash !== '#' + id) {
  history.pushState(null, null, '#' + id);
}
}

function showBlogPost(id){
var p=document.querySelectorAll('[id^="post-"]');
for(var i=0;i<p.length;i++)p[i].style.display='none';
var t=document.getElementById('post-'+id);
if(t)t.style.display='block';
var g=document.querySelector('#page-blog .blog-grid');
if(g)g.style.display='none';
window.scrollTo(0,0);
}

function hideBlogPosts(){
var p=document.querySelectorAll('[id^="post-"]');
for(var i=0;i<p.length;i++)p[i].style.display='none';
var g=document.querySelector('#page-blog .blog-grid');
if(g)g.style.display='grid';
}

window.addEventListener('load',function(){
  // Handle URL hash on load
  const hash = window.location.hash.substring(1);
  if (hash) {
    showPage(hash);
  } else {
    var nh=document.getElementById('nav-home');
    if(nh)nh.classList.add('active');
  }

var b=document.querySelectorAll('.variant-btn');
for(var i=0;i<b.length;i++){
b[i].addEventListener('click',function(){
var s=this.parentElement.querySelectorAll('.variant-btn');
for(var j=0;j<s.length;j++)s[j].classList.remove('active');
this.classList.add('active');
});
}
var nh=document.getElementById('nav-home');
if(nh)nh.classList.add('active');
document.addEventListener('click',function(e){
var n=document.getElementById('mob-nav');
var h=document.getElementById('ham');
if(n&&h&&!n.contains(e.target)&&!h.contains(e.target)){
n.style.display='none';
mobOpen=false;
}
});
});

// Handle hash changes (back/forward button)
window.addEventListener('hashchange', function() {
  const hash = window.location.hash.substring(1);
  if (hash) {
    showPage(hash);
  }
});
