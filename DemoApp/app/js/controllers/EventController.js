'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData) {

        //various directives on the view
        $scope.sortorder = 'name';
        $scope.snippet = '<span style="color:red">hi there</span>';
        $scope.boolValue = true;
        $scope.myclass = "blue";
        $scope.buttonDisabled = true;
        eventData.getEvent(function(event){
            $scope.event = event;
        });

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };

    }

);