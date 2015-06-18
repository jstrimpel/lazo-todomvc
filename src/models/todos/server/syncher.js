/*global define, LAZO */
/*jshint unused:false */
import LazoSyncher from 'lazoSyncher';
import fs from 'fs';

const todosPath = LAZO.FILE_REPO_PATH + '/models/todos.json';

function getTodos(options) {
    return fs.existsSync(todosPath) ? JSON.parse(fs.readFileSync(todosPath, 'utf8')) : [];
}

export default LazoSyncher.extend({

    fetch: function (options) {
        options.success(getTodos(options));
    }

});

