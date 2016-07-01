'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {

        //various directives on the view
        $scope.sortorder = 'name';
        $scope.snippet = '<span style="color:red">hi there</span>';
        $scope.boolValue = true;
     //   $scope.mystyle = {color: 'red'};
        $scope.myclass = "blue";
        $scope.buttonDisabled = true;

        //data bindings
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/1/2013',
            time: '10:30am',
            location: {
                address: 'Google Headquarters',
                city: 'Mountain View',
                province: 'CA'
            }, 
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    duration: 1,
                    level: 'Advanced',
                    abstract: 'In this session you will learn the ins and outs of directives!',
                    upVoteCount: 0
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'John Doe',
                    duration: 2,
                    level: 'Introductory',
                    abstract: 'Learn what they do, how they do, and how to get them to work for you',
                    upVoteCount: 0
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorName: 'Jane Doe',
                    duration: 4,
                    level: 'Intermediate',
                    abstract: 'Controllers are the beginning of everything in Angular. Learn how to craft controllers that will win the respect of your friends and family!',
                    upVoteCount: 0
                }
            ]
        }

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };

    }
    
);