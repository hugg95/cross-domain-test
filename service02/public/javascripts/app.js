'use strict'

/**
 * send ajax request to test1.iframe.com:8888
 */
$(function() {
    /*
    $.get('http://test1.iframe.com:8888/test', function(data) {
            console.log(data);
        });

    $.get('http://test1.iframe.com:8888/test/jsonp', function(data) {
            console.log(data);
        });
    */

    $.ajax({
        url: 'http://test1.iframe.com:8888/test',
        type: 'POST',
        beforeSend: function(request) {
            request.setRequestHeader('MY-NAME', 'Victor');
            request.setRequestHeader('Content-Type', 'application/xml');
        },
        success: function(data) {
            console.log(data);
        },
        error: function(error) {
            console.log(error);
        }
    });
});

