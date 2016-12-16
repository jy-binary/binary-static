var getAppId     = require('../../config').getAppId;
var getSocketURL = require('../../config').getSocketURL;

var Endpoint = (function() {
    var init = function() {
        $('#server_url').val(getSocketURL().split('/')[2]);
        $('#app_id').val(getAppId());
        $('#new_endpoint').on('click', function () {
            var server_url = ($('#server_url').val() || '').trim().toLowerCase(),
                app_id = ($('#app_id').val() || '').trim();
            if (server_url) {
                localStorage.setItem('config.server_url', server_url);
            }
            if (app_id && !isNaN(app_id)) localStorage.setItem('config.app_id', parseInt(app_id));
            window.location.reload();
        });
        $('#reset_endpoint').on('click', function () {
            localStorage.removeItem('config.server_url');
            localStorage.removeItem('config.app_id');
            window.location.reload();
        });
    };

    return {
        init: init,
    };
})();

module.exports = {
    Endpoint: Endpoint,
};
