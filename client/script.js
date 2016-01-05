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
var PythonID = 0;
var ScalaID = 0;



Template.javaTopicForm.events({
  'click #submitTopic': function(event, template){
    let topicName = template.find('#topicName').value;
    let topicDifficulty = template.find('#topicDifficulty').value;
    let description = template.find('#description').value;
    let responses = "Peer Responses";
    javaID = (javaID + 1);
    let topic = {
      topicName: topicName,
      topicDifficulty: topicDifficulty,
      description: description,
      javaID: javaID,
      responses: responses
      }
    JavaTopics.insert(topic);
    Router.go('/topicReader'); 
    }
  });

Template.javaScriptTopicForm.events({
  'click #submit-btn': function(event, template){
    let topicName = template.find('#topicName').value;
    let topicDifficulty = template.find('#topicDifficulty').value;
    let description = template.find('#description').value;
    let responses = "Peer Responses";
    javaScriptID = (javaScriptID + 1);
    let topic = {
      topicName: topicName,
      topicDifficulty: topicDifficulty,
      description: description,
      javaScriptID: javaScriptID,
      responses: responses
      }
    JavaScriptTopics.insert(topic); 
    Router.go('/topicReader');
      }
  });

Template.scalaTopicForm.events({
  'click #submit-btn': function(event, template){
    let topicName = template.find('#topicName').value;
    let topicDifficulty = template.find('#topicDifficulty').value;
    let description = template.find('#description').value;
    let responses = "Peer Responses";
    scalaID = (scalaID + 1);
    let topic = {
      topicName: topicName,
      topicDifficulty: topicDifficulty,
      description: description,
      scalaID: scalaID,
      responses: responses
      }
    ScalaTopics.insert(topic);  
    Router.go('/topicReader');
    }
  });

Template.pythonTopicForm.events({
  'click #submit-btn': function(event, template){
    let topicName = template.find('#topicName').value;
    let topicDifficulty = template.find('#topicDifficulty').value;
    let description = template.find('#description').value;
    let responses = "Peer Responses"; 
    pythonID = (pythonID + 1);
    let topic = {
      topicName: topicName,
      topicDifficulty: topicDifficulty,
      description: description,
      pythonID: pythonID,
      responses: responses
      }
    PythonTopics.insert(topic);  
    Router.go('/topicReader');
    }
  });

Template.easyPost.events({
  'click #submit-btn': function(event, template){
    topic.responses = topic.responses + Date.now() + " --> " + document.getElementById("reply").value;
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
    if (this.topicDifficulty == "Easy") {return "rgb(255, 93, 10)"};
    if (this.topicDifficulty == "Medium") {return "rgb(255, 93, 10)"};
    if (this.topicDifficulty == "Hard") {return "rgb(255, 93, 10)"};
  }
});

Template.javascriptNews.helpers({
  topics: function () {
    return JavaTopics.find();
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
    return JavaTopics.find();
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
    return JavaTopics.find();
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
