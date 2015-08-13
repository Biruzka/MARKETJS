function CustomerRepository () {
    this.storage = new Storage2();
}

(function () {
extendClass (CustomerRepository, BaseRepository);
})();