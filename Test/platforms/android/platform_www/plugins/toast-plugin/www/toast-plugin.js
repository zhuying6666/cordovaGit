cordova.define("toast-plugin.MyToast", function(require, exports, module) {
var exec = require('cordova/exec');
/**
 * MyToast :是plugin.xml中配置的feature的nema
 * showToast: 是js中调用的方法名
 */
exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'MyToast', 'showToast', [arg0]);
};

});
