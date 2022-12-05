const express = require('express');
const path= require('path');

const app = express();
const gameRouter = require('./routes/gameRoute');

app.use(express.json());

app.use('/game', gameRouter);

//error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") ===  "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json(err);
});

app.listen('3000' , () => console.log('servidor rodando na porta 3000'));

module.exports = app;

