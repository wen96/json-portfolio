// Copyright 2015 Rubén Pardo. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

angular.module('portfolio')
.factory('User', ['$resource',
 function($resource){

    function User(data){
        var self = this;
        angular.extend(self, data);

        
        self.mapedKeys = function(){
            var mapedKeys = {};
            var notMaped = ['bio', 'name', 'img', 'location', 'phone', 'social'];
            for (var key in data){
                if (notMaped.indexOf(key) < 0) {
                    mapedKeys[key] = self[key];
                }
            }
            return mapedKeys;
        };
        
    }

    angular.extend(User, $resource('assets/data.json',
        {},
        {
            'get': {
                'transformResponse': function(data){
                    var jsData = angular.fromJson(data);
                    return new User(jsData);
                }
            }
        })
    );
    return User;
}]);