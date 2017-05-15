const path = require('path');
const root = path.resolve(__dirname, '..');

function pathTo(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [root].concat(args));
}

module.exports = {
    root,
    pathTo
};
