eventsApp.factory('eventData', function () {
    return {
        //data bindings
        event: {
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
    };
});