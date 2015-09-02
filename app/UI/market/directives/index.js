module.exports = function(app) {
    require('./productList/index.js')(app);
    require('./productList/router.js')(app);
    require('./productForm/index.js')(app);
    require('./productForm/router.js')(app);
};