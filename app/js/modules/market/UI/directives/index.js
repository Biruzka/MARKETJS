module.exports = function(app) {
    require('./fake/index.js')(app);
    require('./app/index.js')(app);
    // require('./productList/index.js')(app);
    // require('./productForm/index.js')(app);
};