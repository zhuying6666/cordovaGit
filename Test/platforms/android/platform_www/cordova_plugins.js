cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "toast-plugin.MyToast",
    "file": "plugins/toast-plugin/www/toast-plugin.js",
    "pluginId": "toast-plugin",
    "clobbers": [
      "MyToast"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "toast-plugin": "1.0.0"
};
// BOTTOM OF METADATA
});