# Maged Project

## Table of Contents
The project contains have four sections within the body's structure and also contains an opening image for the home page and my ( Github account link ) upper the section 1 header also contains
links buttons of sections controled by navbar inside the header bage and we can scrollIntoView when click at the navbar button to select each of any Active Section showen in view port and last thing in the footer bage we have the back to top button of pageand the  image for home page


## Instructions


The starter project has some HTML and CSS styling to display a dynamic version of the Landing Page project.  we finsh to convert this project from a static project to an interactive one. making that with modifying the HTML and CSS files, but primarily the JavaScript file.


## Project implementation steps
Build Nav Methods
## Build the glopal variable 
* Create an  document fragment to add each of the elements inside it using
Document.createDocumentFragment
* Create a new object to limit the number of sections (allsections) using 
Document.querySelectorAll
* create NAV element to create dynamic navbar list using
Document.getElementById for navbar list
## create function ( modifyTexe )
creata for loop or (forEach)for new sections element created  (allsections)
•
create new list (button)or (li) using Document.createElement
create new link (a) using Document.createElement
•
create Text to get data nav for sections by getAttribute
•
create Evenlistener and using scrollIntoView behavior':'smooth
•
create (link Text Nod ) using Document.createTextNode to the link Text nod
.
add (link Text Nod) using appendChild to the (new link)
•
add  (new link) using appendChild to the (new list)
•
add (new list) in fragment using appendChild 
•
and out of loop append Fragment to (UL) 
## Get the active Section
1.
We can use GetBoundingClientRect or intersection observer API.
2.
Use forEach () method on the sections list inside
3.
Use the getBoundingClientRect on the element parameter.
4.
IT will return some properties related to viewport and the section.
5.
Use if statement to get the Active like (add your condition).
6.
Inside the if statement before add active class to the section,
7.
Make sure to remove the other active classes from all sections.
8.
Use classList.add method to add the active class to the active
section.
## Get The Active Link
•
Each link should contains the data nav attribute value for the section
which linked to it as an link id or textContent
•
When we got the Active section we can Query The active section and
get the data nav value for this active section.
•
Then we can use forEach on all the links and check using if condition
which link has the textContent equal to active section data nav
•
Remove Active class from all links, give the active link class active.




