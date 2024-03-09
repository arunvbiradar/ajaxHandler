# AjaxHandler
[Deployed here](https://arunvbiradar.github.io/ajaxHandler/)

## Overview

`AjaxHandler` is a utility class for managing AJAX calls in a web application. The primary goal is to streamline and centralize the handling of AJAX requests across different pages, providing a structured and maintainable approach.

## Features

- **Object-Oriented Design:** Utilizes object-oriented programming principles, allowing for modular and organized code.
  
- **Centralized AJAX Handling:** Enables the centralization of AJAX call logic, reducing redundancy and making it easier to maintain.

- **Customizable Configuration:** Provides a flexible configuration for AJAX calls, allowing customization of headers, options, and handling of responses.

## Usage

1. **Include the Script:**
   Include the `AjaxHandler` script in your project.

   ```html
   <script src="path/to/ajax-handler.js"></script>
   ```

2. **Instantiate the AjaxHandler:**
   Create an instance of `AjaxHandler` and configure it with the desired base URL.

   ```javascript
   const ajaxHandler = new AjaxHandler('https://api.example.com');
   ```

3. **Make AJAX Calls:**
   Use the `ajaxHandler` instance to make AJAX calls with a simplified syntax.

   ```javascript
   ajaxHandler.get('/endpoint', onSuccess, onError);
   ```

   - `'/endpoint'`: Specify the API endpoint.
   - `onSuccess`: Callback function for a successful response.
   - `onError`: Callback function for handling errors.

## Example

```javascript
// Instantiate AjaxHandler with base URL
const ajaxHandler = new AjaxHandler('https://api.example.com');

// Make a GET request to '/data' with success and error callbacks
ajaxHandler.get('/data',
    function(data) {
        console.log('Successful response:', data);
    },
    function(error) {
        console.error('Error:', error);
    }
);
```

This example demonstrates how to use `AjaxHandler` to make a GET request with specified success and error callbacks, providing a centralized and organized approach to handling AJAX calls in your web application.
