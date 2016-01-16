JavaTopics = new Mongo.Collection('JavaTopics');
JavaScriptTopics = new Mongo.Collection('JavaScriptTopics');
PythonTopics = new Mongo.Collection('PythonTopics');
ScalaTopics = new Mongo.Collection('ScalaTopics'); 

Meteor.subscribe('JavaTopics');

JavaTopics.allow({
 insert: function(){
 return true;
 },
 update: function(){
 return true;
 },
 remove: function(){
 return true;
 }
});

var javaID = 0;
var javaScriptID = 0;
var pythonID = 0;
var scalaID = 0;

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

Template.javaTopicForm.events({
  'click #submitTopic': function(event, template){
    let topicName = template.find('#topicName').value;
    let topicDifficulty = template.find('#topicDifficulty').value;
    let description = template.find('#description').value;
    let responses = "Bulletin Responses:";
    let authorName = Meteor.user().username;
    javaID = (javaID + 1);
    let topic = {
      topicName: topicName,
      topicDifficulty: topicDifficulty,
      description: description,
      javaID: javaID,
      responses: responses,
      authorName: authorName
      }
    JavaTopics.insert(topic);
    Router.go('/javaNews'); 
    }
  });

Template.javaScriptTopicForm.events({
  'click #submit-btn': function(event, template){
    let topicName = template.find('#topicName').value;
    let topicDifficulty = template.find('#topicDifficulty').value;
    let description = template.find('#description').value;
    let responses = "Bulletin Responses:";
    let authorName = Meteor.user().username;
    javaScriptID = (javaScriptID + 1);
    let topic = {
      topicName: topicName,
      topicDifficulty: topicDifficulty,
      description: description,
      javaScriptID: javaScriptID,
      responses: responses,
      authorName: authorName
      }
    JavaScriptTopics.insert(topic); 
    Router.go('/javascriptNews');
      }
  });

Template.scalaTopicForm.events({
  'click #submit-btn': function(event, template){
    let topicName = template.find('#topicName').value;
    let topicDifficulty = template.find('#topicDifficulty').value;
    let description = template.find('#description').value;
    let responses = "Bulletin Responses:";
    let authorName = Meteor.user().username;
    scalaID = (scalaID + 1);
    let topic = {
      topicName: topicName,
      topicDifficulty: topicDifficulty,
      description: description,
      scalaID: scalaID,
      responses: responses,
      authorName: authorName
      }
    ScalaTopics.insert(topic);  
    Router.go('/scalaNews');
    }
  });

Template.pythonTopicForm.events({
  'click #submit-btn': function(event, template){
    let topicName = template.find('#topicName').value;
    let topicDifficulty = template.find('#topicDifficulty').value;
    let description = template.find('#description').value;
    let responses = "Bulletin Responses:"; 
    let authorName = Meteor.user().username;
    pythonID = (pythonID + 1);
    let topic = {
      topicName: topicName,
      topicDifficulty: topicDifficulty,
      description: description,
      pythonID: pythonID,
      responses: responses,
      authorName: authorName
      }
    PythonTopics.insert(topic);  
    Router.go('/pythonNews');
    }
  });

Template.easyPost.events({
  'click #submitBtn': function(event, template){
    console.log("hello");
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10) {dd='0'+dd} 
    if(mm<10) {mm='0'+mm} 
    today = mm+'/'+dd+'/'+yyyy;
    passedResponse = today + " --- " + document.getElementById("reply").value;
    Meteor.call('addResponse', passedResponse, chosenTopic.topicName);
    Router.go("/languages");
    }
  });

Template.mediumPost.events({
  'click #submitBtn': function(event, template){
    console.log("hello");
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10) {dd='0'+dd} 
    if(mm<10) {mm='0'+mm} 
    today = mm+'/'+dd+'/'+yyyy;
    passedResponse = today + " --- " + document.getElementById("reply").value;
    Meteor.call('addResponse', passedResponse, chosenTopic.topicName);
    Router.go("/languages");
    }
  });

Template.hardPost.events({
  'click #submitBtn': function(event, template){
    console.log("hello");
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10) {dd='0'+dd} 
    if(mm<10) {mm='0'+mm} 
    today = mm+'/'+dd+'/'+yyyy;
    passedResponse = today + " --- " + document.getElementById("reply").value;
    Meteor.call('addResponse', passedResponse, chosenTopic.topicName);
    Router.go("/languages");
    }
  });

Template.javaNews.events({
  'click #titleButton': function(event, template){
    console.log("Test");
    var buttonVal = event.currentTarget.innerHTML;
    console.log("Clicked on: " + buttonVal);
    chosenTopic = JavaTopics.findOne({topicName:buttonVal});
    document.getElementById("modalTitle").innerHTML = chosenTopic.topicName;
    document.getElementById("modalDescription").innerHTML = chosenTopic.description;
    },
  'click #writeResponse': function(event, template){
    console.log(chosenTopic.topicDifficulty);
    if (chosenTopic.topicDifficulty == 'Easy'){Router.go('/easyPost');}
    if (chosenTopic.topicDifficulty == 'Medium'){Router.go('/mediumPost');}
    if (chosenTopic.topicDifficulty == 'Hard') {Router.go('/hardPost');}
    } 
});



Template.topicReader.rendered = function () {
      var z = document.createElement('p');
      var x = document.createElement('p');
      var c = document.createElement('p');
      x.setAttribute('content', 'myTitle');
      x.style.background = 'black';
      x.style.color = 'white';
      c.setAttribute('content', 'myResponses');
      c.style.background = 'blue';
      c.style.color = 'white';
      z.setAttribute('content', 'myTopic');
      z.style.background = 'red';
      z.style.color = 'white';
      var topicHTML = JavaTopics.findOne();
      c.innerHTML = topicHTML.responses;
      x.innerHTML = topicHTML.topicName;
      z.innerHTML = topicHTML.description;
      var mainBody = document.getElementById("body");
      mainBody.appendChild(x);
      mainBody.appendChild(z);
      mainBody.appendChild(c);
}

Template.javaNews.loadTopic = function(){
  Meteor.defer(function () {
    var b = document.createElement('button');
    b.setAttribute('content', 'myTopic');
    b.setAttribute('class', 'btn');
    b.innerHTML = JavaTopics.find({});
    b.style.background = 'red';
    b.style.color = 'white';
    var wrapper = document.getElementById("buttonWrap");
    wrapper.appendChild(b);
  });
};


Template.javaNews.helpers({
  topics: function () {
    return JavaTopics.find();
  },
  titleFormat: function () {
    return this.topicName;
  },
  colorPicker: function () {
    if (this.topicDifficulty == "Easy") {return "white"};
    if (this.topicDifficulty == "Medium") {return "white"};
    if (this.topicDifficulty == "Hard") {return "white"};
  }
});

Template.javascriptNews.helpers({
  topics: function () {
    return JavaScriptTopics.find();
  },
  titleFormat: function () {
    return this.topicName;
  },
  colorPicker: function () {
    if (this.topicDifficulty == "Easy") {return "rgb(255, 93, 10)"};
    if (this.topicDifficulty == "Medium") {return "rgb(255, 93, 10)"};
    if (this.topicDifficulty == "Hard") {return "rgb(255, 93, 10)"};
  }
});

Template.pythonNews.helpers({
  topics: function () {
    return PythonTopics.find();
  },
  titleFormat: function () {
    return this.topicName;
  },
  colorPicker: function () {
    if (this.topicDifficulty == "Easy") {return "rgb(255, 93, 10)"};
    if (this.topicDifficulty == "Medium") {return "rgb(255, 93, 10)"};
    if (this.topicDifficulty == "Hard") {return "rgb(255, 93, 10)"};
  }
});

Template.scalaNews.helpers({
  topics: function () {
    return ScalaTopics.find();
  },
  titleFormat: function () {
    return this.topicName;
  },
  colorPicker: function () {
    if (this.topicDifficulty == "Easy") {return "rgb(255, 93, 10)"};
    if (this.topicDifficulty == "Medium") {return "rgb(255, 93, 10)"};
    if (this.topicDifficulty == "Hard") {return "rgb(255, 93, 10)"};
  }
});

Template.myPosts.helpers({
  fetchUserJavaPosts: function() {
  return JavaTopics.find({'authorName': Meteor.user().username});
  },
    fetchUserJavascriptPosts: function() {
  return JavaScriptTopics.find({'authorName': Meteor.user().username});
  },
    fetchUserScalaPosts: function() {
  return ScalaTopics.find({'authorName': Meteor.user().username});
  },
    fetchUserPythonPosts: function() {
  return PythonTopics.find({'authorName': Meteor.user().username});
  },
  displayPostNames: function() {
    return this.topicName;
  },
  displayPostResponses: function() {
    return this.responses;
  },
  userName: function() {
    return Meteor.user().username;
  }
});
