const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

//__dirname gives file path to the project. then you can add on which file to send
app.get('/', (req, res) => {
    res.render('home', { message: null }); // Initialize message as null
});

app.post('/', (req, res) => {
    if (req.body.number) {
        let number = req.body.number;
        let message = buckleConverter(number);
        res.render('home', {message});
    }
    
});

function buckleConverter(number) {

    if (number >= 1 && number < 3) {
        return "1, 2, buckle my shoe";
    } else if (number >= 3 && number < 5) {
        return "3, 4, shut the door";
    } else if (number >= 5 && number < 7) {
        return "5, 6, pick up the sticks";
    } else if (number >= 7 && number < 9) {
        return "7, 8, lay them straight";
    } else if (number >= 9 && number < 11) {
        return "9, 10, a big fat hen";
    } else {
        return "Please enter a number between 1 and 10.";
    }
}

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


