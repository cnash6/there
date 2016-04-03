'use strict';

/**
 * @ngdoc function
 * @name thereApp.controller:SessionCtrl
 * @description
 * # SessionCtrl
 * Controller of the thereApp
 */
angular.module('thereApp')
  	.controller('SessionCtrl', function ($scope, $rootScope, $location, $http, auth) {

  		// $http({
  		//     method : "GET",
  		//     url : "https://refugeehackthere.herokuapp.com/generatesession"
  		// }).then(function mySucces(response) {
  		//     console.log(response);
  		// }, function myError(response) {
  		//     console.log(response.statusText);
  		// });
		var apikey = '45548832';
		var sessionId = '2_MX40NTU0ODgzMn5-MTQ1OTYwNDg0NDg0N35EU3U1cktYY2lhTEJHc3VPQTNXNFY4NGR-UH4';

		if($location.search().sessionid) {
			sessionId = $location.search().sessionid;
		}

    auth.setSessionId(sessionId);

		var user = auth.getCurrentUser();
		if(!user) {
			user = {
				name: "fallback user",
				role: "client"
			}
		}
		console.log(user);


  		$http({
  		    method : "GET",
  		    url : "https://refugeehackthere.herokuapp.com/gettoken",
  		    params: {
  		    	sessionid: sessionId,
  		    	role: user.role
  		    }
  		}).then(function mySucces(response) {
  		    var token = response.data.token;
  		    initSession(apikey, sessionId, token)

  		}, function myError(response) {
  		    console.log(response.statusText);
  		    var token = 'T1==cGFydG5lcl9pZD00NTU0ODgzMiZzaWc9M2EzMzhhOWUxYWJjNDYzOTZhZmNkMTQ5YjY1N2U0MjQ4YjlkNzYyOTpyb2xlPXB1Ymxpc2hlciZzZXNzaW9uX2lkPTJfTVg0ME5UVTBPRGd6TW41LU1UUTFPVFl3TkRnME5EZzBOMzVFVTNVMWNrdFlZMmxoVEVKSGMzVlBRVE5YTkZZNE5HUi1VSDQmY3JlYXRlX3RpbWU9MTQ1OTYwNTUwNiZub25jZT0wLjI3NzgzNzkxODQ5MTY1ODImZXhwaXJlX3RpbWU9MTQ1OTY5MTkwNg==';
  		    initSession(apikey, sessionId)

  		});



	  	//console.log($location.search());

		function initSession(apikey, sessionid, token) {
			var session = OT.initSession(apikey, sessionId);
			$rootScope.session = session;
			session.on({
			  streamCreated: function(event) {
			  	var data = event.stream.connection.data;
			  	console.log(data);
			  	if (data == "interpreter") {
			  		session.subscribe(event.stream, 'theirCamDiv', {
						width: '100%',
				      	height: '100%'
			  		  	//insertMode: 'append'
			  		});
			  	} else {
			  		session.subscribe(event.stream, 'mainCamDiv', {
			  			width: '100%',
				      	height: '100%',
				      	insertMode: 'replace'
			  		});
			  	}

			  }
			});
			session.connect(token, function(error) {
				if (error) {
				  console.log(error.message);
				} else {
				  	session.publish('myCamDiv', {
				      width: '100%',
				      height: '100%'
				    });
				}
			});
		}

		$scope.startArchive = function() {

			if($(".glyphicon-record").length > 0) {
				$(".record-btn-icon").removeClass("glyphicon-record");
				$(".record-btn-icon").addClass("glyphicon-stop");
			} else {
				$(".record-btn-icon").removeClass("glyphicon-stop");
				$(".record-btn-icon").addClass("glyphicon-record");
			}
			
			// $http({
			//     method : "GET",
			//     url : "https://refugeehackthere.herokuapp.com/startArchive",
	  // 		    params: {
	  // 		    	sessionid: sessionId
	  // 		    }
			// }).then(function mySucces(response) {
			//     console.log(response);

			// }, function myError(response) {
			//     console.log(response.statusText);
		

			// });
		}

  	});
