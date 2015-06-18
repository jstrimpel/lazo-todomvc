/*global define, LAZO */
/*jshint unused:false */
import View from 'lazoView';

export default View.extend({

    events: {
        'keypress #new-todo': 'create'
    },


    afterRender: function () {
        this.$input = this.$('#new-todo');
    },

    // create new todo on enter
    create: function (e) {
        if (e.which !== LAZO.app.ENTER_KEY || !this.$input.val().trim()) {
            return;
        }

        this.ctl.ctx.collections.todos.create({
            title: this.$input.val(),
            completed: false
        });

        this.$input.val('');
    }

});