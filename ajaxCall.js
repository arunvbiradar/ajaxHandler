// main.js

// Create a function for AjaxHandler
function getTodos() {
    // Custom headers for a specific AJAX call
    var customHeaders = {
      'Authorization': 'Bearer yourAccessToken',
      'Custom-Header': 'custom-value',
    };
    
    // Custom options for a specific AJAX call
    var customOptions = {
      mode: 'cors',
    };
    
    // Make a GET request using the AjaxHandler with custom headers and options
    AjaxHandler.get('https://jsonplaceholder.typicode.com/todos', customHeaders, customOptions)
      .done(function (data) {
        // Handle successful response
        console.log('API Response:', data);
      })
      .fail(function (jqXHR, textStatus, errorThrown) {
        // Handle error
        console.error('Error:', errorThrown);
      });
}
// Create a function for AjaxHandler
function getPosts() {
    // Custom headers for a specific AJAX call
    var customHeaders = {
      'Authorization': 'Bearer yourAccessToken',
      'Custom-Header': 'custom-value',
    };
    
    // Custom options for a specific AJAX call
    var customOptions = {
      mode: 'cors',
    };
    
    // Make a GET request using the AjaxHandler with custom headers and options
    AjaxHandler.get('https://jsonplaceholder.typicode.com/posts', customHeaders, customOptions)
      .done(function (data) {
        // Handle successful response
        console.log('API Response:', data);
      })
      .fail(function (jqXHR, textStatus, errorThrown) {
        // Handle error
        console.error('Error:', errorThrown);
      });
}
