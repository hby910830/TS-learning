"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var Frank_vue_1 = require("./Frank.vue");
var div = document.createElement('div');
div.id = 'app';
div.textContent = 'Fuck Webpack';
document.body.appendChild(div);
new vue_1["default"]({
    el: div,
    render: function (h) { return h(Frank_vue_1["default"]); }
});
//# sourceMappingURL=index.js.map