# React component rendering with Django

An example of a web application built on Django which uses React as a templating engine.

The web application process the incomming HTTP request from the client (browser) and renders the HTML response
using React components. The HTML is then send back to the client as response together with JavaScript assets allowing
the client to see and use the web application immediatelly and not wait until the assets (JavaScrip, CSS, images) are 
downloaded.

This technique greatly improves the perceived application's speed and provides better UX!
 
Libraries used:

* react
* react-router
* redux
* webpack