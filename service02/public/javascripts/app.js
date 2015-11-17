'use strict'

/**
 * send ajax request to test1.iframe.com:8888
 */
$(function() {
    $.get('http://test1.iframe.com:8888/test', function(data) {
            console.log(data);
        });

    $.get('http://test1.iframe.com:8888/test/jsonp', function(data) {
            console.log(data);
        });
});

