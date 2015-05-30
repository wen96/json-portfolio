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

angular.module('typeform-challenge')
.controller('MainCtrl', ['$scope', '$http', function($scope, $http){
	/* Ugly way to get that working. If I have to change any code here, I'll improve it!
	 Yes, I know, it is a better way solve that with resolve/promisses/interceptors/Resources
	 but this way is quicker! */
	$scope.solveChallenge = function(){
		// Yes, I know, it is best to save the url in a constants.js file
		$http.get('http://aerial-valor-93012.appspot.com/challenge').success(function(token){
			$scope.token = token;
			var total = 0;
			$.each(token.values, function() {
			    total += this;
			});
			$http.get('http://aerial-valor-93012.appspot.com/challenge/' + token.token +'/' + total).success(
				function(answer){
					$scope.answer = answer;
			});
			// This is one of the ugliest code I wrote... hahaha IS FUNNY!
		});
	};
}]);