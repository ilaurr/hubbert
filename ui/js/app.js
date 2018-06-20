require ('bootstrap');
var Vue = require ('vue');

var index = require ('./views/index.vue');
new Vue ({
    el: '#app',
    data: {
    },
    render: function (render){
        return render (index);
    }
});
