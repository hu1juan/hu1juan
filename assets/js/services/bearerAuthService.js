'use strict';

app.factory('BearerAuthInterceptor', function ($window, $q, $localStorage, NEW_CONST) {
    return {
        request: function(config) {
            config.headers = config.headers || {};
            if ($localStorage.token != null) {
              // may also use sessionStorage
                config.headers.Authorization = 'Bearer ' + $localStorage.token;
                var regex = NEW_CONST.END_POINT + "/Login?username="+NEW_CONST.USERNAME + "&password="+NEW_CONST.PASSWORD;
                if(config.url === regex){
                 delete config.headers.Authorization;
                }
            }
            return config || $q.when(config);
        },
        
        response: function(response) {
            if (response.status === 401) {
                //  Redirect user to login page / signup Page.
            }
            return response || $q.when(response);
        }
    };
});

// Register the previously created AuthInterceptor.
app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('BearerAuthInterceptor');
});