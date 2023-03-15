//Create an Express application that sets a cookie when routed to /login with their name. 
//If a cookie is present with a name key, then it says "Welcome {name}! when the user routes to /hello".

const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());

const port = 3001

app.get("/", (req, res) => {
    res.status(200).send("Please navigate to login")
})

app.get("/login", (req, res) => {
    let name = req.query.name;

    var opts = {
        maxAge: 900000,
        httpOnly: true,
        sameSite: 'strict',
    };

    res.cookie('name', `${name}`, opts);
    res.send('Navigate to /hello');
    
}) 

app.get('/hello', (req, res) => {
    let name = req.cookies.name;
    res.send(`Welcome ${name}!`);
})


app.listen(port, () => {console.log(`listening on port ${port}...`);
});