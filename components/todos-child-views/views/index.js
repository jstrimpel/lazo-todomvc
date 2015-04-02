/*global define, LAZO */
/*jshint unused:false */
define(['l!lazoCollectionView', 'underscore'], function (View, _) {

    'use strict';

    return View.extend({

        events: {
            'click #toggle-all': 'toggle',
        },

        // pull in collection instance from component context
        collection: 'todos',

        // use app/views/todo.js && todo.hbs
        itemView: 'a:todo',

        children: {
            header: 'a:header',
            footer: 'a:footer'
        },

        initialize: function () {
            this.listenTo(this.collection, 'add', this.updateCountDisplay);
            this.listenTo(this.collection, 'remove', this.updateCountDisplay);
            this.listenTo(this.collection, 'change', this.updateCountDisplay);
        },

        afterRender: function () {
            this.$remaining = this.$('#todo-count strong');
            this.$completed = this.$('#clear-completed');
            this.$allCheckbox = this.$('#toggle-all');
        },

        toggle: function (e) {
            this.collection.each(function (todo) {
                todo.save({
                    'completed': e.target.checked
                });
            });
        }

    });

});