//Create an Express application that sets a cookie when routed to /login with their name. 
//If a cookie is present with a name key, then it says "Welcome {name}! when the user routes to /hello".


const express = require('express');
const app = express();
const port =  8080;

app.get('/login', (req, res) => {

    var opts = {
        maxAge: 900000,
        httpOnly: true,
        sameSite: 'strict',
    }

    res.cookie('userName', 'userPassword', opts);
    
})

app.get('/hello', (req, res) => {
    let name = "userName";
    

    res.send(`"Welcome ${name}!"`)

} )


app.listen(port, () => console.log(`Express server listening ${port}`));