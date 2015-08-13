var eventEmitter = {
    events: {
        any: []
    },

    on: function (callback, eventName) {
        type = eventName || 'any';
        if (typeof this.events[type] === "undefined") {
            this.events[type] = [];

        }

        this.events[type].push(callback);
    },

    exclude: function (callback, eventName) {
        this.existEvents('exclude', callback, eventName);
    },

    emit: function (emanation, eventName) {
        this.existEvents('emit', emanation, eventName);
    }, //arr список событий

    existEvents: function (action, arg, eventName) {
        var pubtype = eventName || 'any',
            events = this.events[pubtype],
            i,
            max = events.lenght;

        for (i=0; i<max;i++){
            if (action === 'emit') {
                events[i](arg);
            } else {
                if (events[i] === arg) {
                    events.splise(i,1);
                }
            }
        }
    }
};

//превращает объект в объект издатель

function makeEventsPublisher(o) {
    var i;
    for (i in eventEmitter){
        if (eventEmitter.hasOwnProperty(i)  && typeof eventEmitter[i] === "function"){
        //if (typeof eventEmitter[i] === "function"){
        o[i] = eventEmitter[i];

        }
    }
    o.events = {any:[]};
};


var layout = {
    daily: function () {
        this.emit("layout new products");
    },

    sale: function() {
        this.emit("with 50% sale", "sale");
    }
};

makeEventsPublisher(layout);

var customer = {
    watch: function (layout){
        console.log("Just buy" + layout);
    },

    watchInterested: function (sale) {
        console.log("Buy" + sale);
    }
};

layout.on(customer.watch);
layout.on(customer.watchInterested, "sale");
layout.daily();
layout.sale();

