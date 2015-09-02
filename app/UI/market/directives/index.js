module.exports = function(app) {
    require('./productList/index.js')(app);
    require('./productForm/index.js')(app);
    require('./app/index.js')(app);

};