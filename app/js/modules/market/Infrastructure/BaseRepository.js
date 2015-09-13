module.exports = function(ng) {
    ng.factory('BaseRepository', ['$http', BaseRepository]);
};

var BaseRepository = function($http) {

    function BaseRepository(url) {
        this.url = url;
    }

    /**
     * @return {Promise}
     */
    BaseRepository.prototype.load = function() {
        // invoke request
        return $http.get(this.url + '/_all_docs?include_docs=true').then(function(response) {
            // process response
            var data = this.extractData(response);

            // create entity
            return data;

        }.bind(this));
    };

    /**
     * @param  {Enitity} entity
     * @return {Promise}
     */
    BaseRepository.prototype.save = function(entity) {

        var data = angular.toJson(entity.attrs);

        return $http.post(this.url, data).then(function(response) {
            console.log(response);
            var data = this.extractCreateData(response);
            // not entity yet
            return data; //тоже с продьюс
        }.bind(this))
    };


    BaseRepository.prototype.extractData = function(response) {
        var rows = response.data.rows;
        var data = [];
        rows.forEach(function(item, i, rows) {
            data[i] = item.doc;
        });
        return data;
    };

    BaseRepository.prototype.extractCreateData = function(response) {
        var data = JSON.parse(response['config']['data']);
        //и добавляем id
        data['id'] = response['data']['id'];
        data['rev'] = response['data']['rev'];
        console.log('extract');
        console.log(data);
        return data;
    }


    BaseRepository.prototype.loadById = function(id) {
        return $http.get(this.url + '/' + id).then(function(response) {
            // process response
            var data = this.extractData(response);
            // create entity
            return this.produceEntity(data);
        }.bind(this))
    };

    BaseRepository.prototype.syncEntity = function(entity) {
        return this.loadById(entity.id).then(function(updatedEntity) {
            var data = updatedEntity.toJSON();
            entity.set(data);
            return entity;
        }.bind(this));
    };


    return BaseRepository;
};


// new BaseRepository('http://localhost:2312/products');
// new BaseRepository('http://localhost:2312/shops');