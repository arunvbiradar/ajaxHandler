// AjaxHandler.js
const AjaxHandler = {
    get: function (url, headers = {}, options = {}) {
      var self = this;
      return $.ajax({
        url: url,
        method: 'GET',
        headers: $.extend({}, self.getDefaultHeaders(), headers),
        ...options,
      });
    },  
    post: function (url, data, headers = {}, options = {}) {
      var self = this;
      return $.ajax({
        url: url,
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        headers: $.extend({}, self.getDefaultHeaders(), headers),
        ...options,
      });
    },  
    getDefaultHeaders: function () {
      return {
        'Content-Type': 'application/json',
        // Add any other common headers here
      };
    },
  };
  
  // Attach AjaxHandler to the global object
  window.AjaxHandler = AjaxHandler; // For the browser environment
  // For Node.js, you can use 'global.AjaxHandler = AjaxHandler;'
  
  