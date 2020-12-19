/*
Build Nav 
*/
const fragment = document.createDocumentFragment();    
const allsections = document.querySelectorAll('section');
const nav =document.getElementById("navbar__list");
function modifyText() {
  
    allsections.forEach((section) => {  //loop for Each section element
 //create new list 
  let newli = document.createElement('li') ; 
  // create li or button to navbar
  newli.classList.add =('menu_link');
  //create links   
  let newlink = document.createElement('a');
  // get data nav by getAttribute
  let text = section.getAttribute('data-nav'); //section1
   // add EventListener to all links 
   newlink.addEventListener('click', function()
   {;
   section.scrollIntoView({behavior: 'smooth'});
   }); // scrollIntoView to make scroll to active section
  
let link_textnode = document.createTextNode("section");
//add link textnode to the newlist
newlink.appendChild(link_textnode);
//add link to newlist
newli.appendChild(newlink);
//the newlist in fragment
  fragment.appendChild(newli);
 });

nav.appendChild(fragment);
};

modifyText();

/*
Active Section  
*/
    const sections = document.querySelectorAll('section');
function myFunction() {
let rect = section.getBoundingClientRect();
x = rect.left;
y = rect.top;
b = rect.bottom;
w = rect.width;
h = rect.height;
}
function active_link(active_section) {
let links = document.querySelectorAll('a');
let section_nav = active_section.getAttribute('data-nav');

links.forEach( ( links ) => {
 if (link.textcontent == section_nav){
links = document.querySelectorAll('a');
links.forEach( (alink) => { 
 alink.classList.remove('active_link');
})
link.classList.add('active_link');
}
})
}
const sectall = document.querySelectorAll('section');
 sectall.forEach( (section) => {
   section.classList.remove('active_class');
   let rect = section.getBoundingClientRect();
if (rect.top <= 0 && rect.bottom < window.inerrHeight+100)
if (rect.top < 0 & rect.top < 150)
{
 section.classlist.remove('your-active-class');
 section.classlist.add('active_class');
 active_link(section);
}
});
