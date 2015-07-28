angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Chetan Giridhar',
    lastText: 'Exploring MicroServices for Cloud with Apache Thrift and Python',
    desc: 'Many web applications start off as a monolithic code base, then move to a more distributed system. Large reports could take several minutes (and, sometimes, hours!) to complete, and users would become impatient waiting for their browser to finally display the result or the website would have already crossed limitations of how many requests it can handle. Service Oriented Architecture or MicroServices present a cleaner alternative to make system more distributed and adapt to current needs of the cloud. Not only does this improve scalability & resiliency, but it makes services independent entities operating on their own - which essentially means freedom of language & deployment. However in this model - the contract (also called as interface) between services is well understood and maintained. Apache Thrift, an open sourced framework demo Facebook, helps you in defining an Interface Definition Language file that help you: 1. Strict contract across services 2. Easy proof of concept with stubs 3. Freedom to still implement your own business logic 4. Minimise design level confusions  During the talk we would discuss about • Issues with monolithic web architecture • SOA and Microservices • Apache thrift • Example implementation with use case • Discuss about performance of Apache Thrift',
    face: '../img/speaker/0.jpg',
    loc: 'The HP Room',
    time: '',
    likes: 15,
    comm: 1,
    col: 'positive',
    icon: 'ion-ios-people'
  }, {
    id: 1,
    name: 'Colin Moore-Hill',
    lastText: 'Deploy flask application single step',
    desc: 'It is intended that the viewer will understand basics of creating a dev env and show it going live. To go from nothing to a deployed flask application with neo4j database in one step using docker-create to heroku.  Might also include docker machine and swarm.',
    face: '../img/speaker/1.jpg',
    loc: 'The HP Room',
    time: '11:10',
    likes: 11,
    comm: 100,
    col: 'assertive',
    icon: 'ion-university'
  },{
    id: 2,
    name: 'Heeren Sharma',
    lastText: 'Designing, Developing and Deploying resilient data pipelines using Python and Docker-Compose',
    desc: "I have had experience of developing data piplines in Python based on huge volumes of unstructured events, processing them and storing them in NoSQL solutions like Redis both for fun and profit . Developing and Deploying aggresievely while maintaining the uptime of the system and it's various components was a key metric. Learning from mistakes and failures, I wish to share my story of how docker made my and can make your life easy and sane. With advent of docker, bridge between development and deployment has been wonderfully shortened. This talk will be centered around orchestrating different docker containers using docker-compose and how it facilitates the designing of whole system architecture by taking use case of a data pipeline. After giving the first overview of the docker-compose, my experience of developing data pipeline will be shared. And in the end, a short live demo (hack session - designing and development) will be presented so as to grasp the concept of realizing this whole approach and take away hopefully to your production systems.",
    face: '../img/speaker/2.jpg',
    loc: 'The HP Room',
    time: '11:40',
    likes: 21,
    comm: 11,
    col: 'energized',
    icon: 'ion-erlenmeyer-flask'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})


    .factory('Talks', function() {
      // Might use a resource here that returns a JSON array

      // Some fake testing data
      var talks = [{
        id: 0,
        name: 'Chetan Giridhar',
        lastText: 'Exploring MicroServices for Cloud with Apache Thrift and Python',
        desc: 'Many web applications start off as a monolithic code base, then move to a more distributed system. Large reports could take several minutes (and, sometimes, hours!) to complete, and users would become impatient waiting for their browser to finally display the result or the website would have already crossed limitations of how many requests it can handle. Service Oriented Architecture or MicroServices present a cleaner alternative to make system more distributed and adapt to current needs of the cloud. Not only does this improve scalability & resiliency, but it makes services independent entities operating on their own - which essentially means freedom of language & deployment. However in this model - the contract (also called as interface) between services is well understood and maintained. Apache Thrift, an open sourced framework demo Facebook, helps you in defining an Interface Definition Language file that help you: 1. Strict contract across services 2. Easy proof of concept with stubs 3. Freedom to still implement your own business logic 4. Minimise design level confusions  During the talk we would discuss about • Issues with monolithic web architecture • SOA and Microservices • Apache thrift • Example implementation with use case • Discuss about performance of Apache Thrift',
        face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
      }, {
        id: 1,
        name: 'Colin Moore-Hill',
        lastText: 'Deploy flask application single step',
        desc: 'It is intended that the viewer will understand basics of creating a dev env and show it going live. To go from nothing to a deployed flask application with neo4j database in one step using docker-create to heroku.  Might also include docker machine and swarm.',
        face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
      },{
        id: 2,
        name: 'Heeren Sharma',
        lastText: 'Designing, Developing and Deploying resilient data pipelines using Python and Docker-Compose',
        desc: "I have had experience of developing data piplines in Python based on huge volumes of unstructured events, processing them and storing them in NoSQL solutions like Redis both for fun and profit . Developing and Deploying aggresievely while maintaining the uptime of the system and it's various components was a key metric. Learning from mistakes and failures, I wish to share my story of how docker made my and can make your life easy and sane. With advent of docker, bridge between development and deployment has been wonderfully shortened. This talk will be centered around orchestrating different docker containers using docker-compose and how it facilitates the designing of whole system architecture by taking use case of a data pipeline. After giving the first overview of the docker-compose, my experience of developing data pipeline will be shared. And in the end, a short live demo (hack session - designing and development) will be presented so as to grasp the concept of realizing this whole approach and take away hopefully to your production systems.",
        face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
      }, {
        id: 3,
        name: 'Mike Harrington',
        lastText: 'This is wicked good ice cream.',
        face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
      }];

      return {
        all: function() {
          return talks;
        },
        get: function(talkId) {
          for (var i = 0; i < chats.length; i++) {
            if (talks[i].id === parseInt(talkId)) {
              return talks[i];
            }
          }
          return null;
        }
      };
    })







.factory('LocationsService', [ function() {

  var locationsObj = {};

  locationsObj.savedLocations = [
    {
      name : "PyConUk, Coventry",
      lat : 52.402956,
      lng : -1.503969
    },
    {
      name : "London, England",
      lat : 52.402956,
      lng : -0.126236
    },
    {
      name : "Paris, France",
      lat : 48.864716,
      lng : 2.349014
    },
    {
      name : "Moscow, Russia",
      lat : 55.752121,
      lng : 37.617664
    },
    {
      name : "Rio de Janeiro, Brazil",
      lat : -22.970722,
      lng : -43.182365
    },
    {
      name : "Sydney, Australia",
      lat : -33.865143,
      lng : 151.209900
    }

  ];

  return locationsObj;

}])

.factory('InstructionsService', [ function() {

  var instructionsObj = {};

  instructionsObj.instructions = {
    newLocations : {
      text : 'To add a new location, tap and hold on the map',
      seen : false
    }
  };

  return instructionsObj;

}]);
