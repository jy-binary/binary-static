pjax_config_page_require_auth("user/settings/iphistoryws", function(){
    return {
        onLoad: function() {
            BinarySocket.init({
                onmessage: IPHistoryQueue.responseHandler
            });
            Content.populate();
            IPHistory.init();
        },
        onUnload: function(){
            IPHistory.clean();
        }
    };
});
