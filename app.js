const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.urlencoded({extended: false}));

app.set('view engine' , 'ejs');

//__dirname gives file path to the project. then you can add on which file to send
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});