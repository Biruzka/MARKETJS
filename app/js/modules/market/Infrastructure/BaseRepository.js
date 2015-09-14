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
            var data = this.extract.allGotData(response);

            // create entity
            return data;

        }.bind(this));
    };

    /**
     * @param  {Enitity} entity
     * @return {Promise}
     */
    BaseRepository.prototype.save = function(product) {

        var data = this.extract.entityToJson(product);

        return $http.post(this.url, data).then(function(response) {
            var data = this.extract.postCreatedData(response);
            return data;
        }.bind(this))
    };


    BaseRepository.prototype.delete = function(product) {
        product.set("deleted", true);
        this.update(product);
    }

    BaseRepository.prototype.update = function(product) {

        var data = this.extract.entityToJson(product);
        return $http.put(this.url + '/' + product.attrs['_id'], data).then(function(response) {
            //response - измененный rev уже без _ и id там есть
            return response;
        }.bind(this))

    }

    //возвращает экстракт данные для создания сущности
    BaseRepository.prototype.loadById = function(id) {
        return $http.get(this.url + '/' + id).then(function(response) {
            var data = this.extract.loadedByIdData(response);
            return data;
        }.bind(this))
    };

    BaseRepository.prototype.extract = {
        //after get all from db
        allGotData: function(response) {
            var rows = response.data.rows;
            var data = [];
            rows.forEach(function(item, i, rows) {
                data[i] = item.doc;
            });
            return data;
        },
        //after post data and save
        postCreatedData: function(response) {
            var data = JSON.parse(response['config']['data']);
            //и добавляем id
            data['_rev'] = response['data']['rev'];
            data['_id'] = response['data']['id'];
            console.log('extract');
            console.log(data);
            return data;
        },

        loadedByIdData: function(response) {
            return response.data;
        },

        entityToJson: function(entity) {
            return angular.toJson(entity['attrs']);
        }
    }


    return BaseRepository;
};


// new BaseRepository('http://localhost:2312/products');
// new BaseRepository('http://localhost:2312/shops');