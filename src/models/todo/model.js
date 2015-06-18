/*global define */
/*jshint unused:false */
import Model from 'lazoModel';

export default Model.extend({

    defaults: {
        title: '',
        completed: false,
        created: 0
    },

    initialize: function () {
        if (this.isNew()) {
            this.set('created', Date.now());
        }
    }

});