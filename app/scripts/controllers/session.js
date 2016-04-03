'use strict';

/**
 * @ngdoc function
 * @name thereApp.controller:SessionCtrl
 * @description
 * # SessionCtrl
 * Controller of the thereApp
 */
angular.module('thereApp')
  .controller('SessionCtrl', function () {

      var apiKey = '45548832';
      var sessionId = '2_MX40NTU0ODgzMn5-MTQ1OTYwNDg0NDg0N35EU3U1cktYY2lhTEJHc3VPQTNXNFY4NGR-UH4';
      var token = 'T1==cGFydG5lcl9pZD00NTU0ODgzMiZzaWc9M2EzMzhhOWUxYWJjNDYzOTZhZmNkMTQ5YjY1N2U0MjQ4YjlkNzYyOTpyb2xlPXB1Ymxpc2hlciZzZXNzaW9uX2lkPTJfTVg0ME5UVTBPRGd6TW41LU1UUTFPVFl3TkRnME5EZzBOMzVFVTNVMWNrdFlZMmxoVEVKSGMzVlBRVE5YTkZZNE5HUi1VSDQmY3JlYXRlX3RpbWU9MTQ1OTYwNTUwNiZub25jZT0wLjI3NzgzNzkxODQ5MTY1ODImZXhwaXJlX3RpbWU9MTQ1OTY5MTkwNg==';
      var session = OT.initSession(apiKey, sessionId);

      session.on({
          streamCreated: function(event) {
            session.subscribe(event.stream, 'myCamDiv', {
              insertMode: 'append'
            });
          }
      });
      session.connect(token, function(error) {
        if (error) {
          console.log(error.message);
        } else {
          	session.publish('theirCamDiv', {
              width: '100%',
              height: '600px'
            });
        }
      });


  });
