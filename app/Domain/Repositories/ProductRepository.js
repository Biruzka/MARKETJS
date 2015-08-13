function ProductRepository () {
    this.storage = new Storage2();
}

(function () {
extendClass (ProductRepository, BaseRepository);
})();