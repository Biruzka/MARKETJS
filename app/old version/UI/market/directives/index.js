module.exports = function(app) {
    require('./app/index.js')(app);
    require('./productList/index.js')(app);
    require('./productForm/index.js')(app);
};