function ShopRepository () {
    this.storage = new Storage2();
}

(function () {
extendClass (ShopRepository, BaseRepository);
})();