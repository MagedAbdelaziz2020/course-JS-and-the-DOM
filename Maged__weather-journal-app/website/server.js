// Setup empty JS object to act as endpoint for all routes
app.post('url',(req, res) => { 
    //replace url with a string of the post route url
    //code to add data to endpoint object
    projectData["temp"] = req.body.temp
})
projectData = {};
app.post('url',(req, res) => { 
    //replace url with a string of the post route url
    //code to add data to endpoint object
    projectData["date"] = req.body.date
})
projectData = {};
app.post('url',(req, res) => { 
    //replace url with a string of the post route url
    //code to add data to endpoint object
    projectData["content"] = req.body.content
})
projectData = {};

app.get('url',(req, res) => {
res.send(projectData);
})

// Require Express to run server and routes

// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server