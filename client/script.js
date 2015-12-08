JavaTopics = new Mongo.Collection('JavaTopics');
JavaScriptTopics = new Mongo.Collection('JavaScriptTopics');
PythonTopics = new Mongo.Collection('PythonTopics');
ScalaTopics = new Mongo.Collection('ScalaTopics');

var javaID = 0;
var javaScriptID = 0;
var PythonID = 0;
var ScalaID = 0;

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

Template.javaTopicForm.events({
  'click #submit-btn': function(event, template){
    let topicName = template.find('#topicName').value;
    let topicDifficulty = template.find('#topicDifficulty').value;
    let description = template.find('#description').value;
    javaID = (javaID + 1);
    let topic = {
      topicName: topicName,
      topicDifficulty: topicDifficulty,
      description: description,
      javaID: javaID
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
    javaScriptID = (javaScriptID + 1);
    let topic = {
      topicName: topicName,
      topicDifficulty: topicDifficulty,
      description: description,
      javaScriptID: javaScriptID
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
    scalaID = (scalaID + 1);
    let topic = {
      topicName: topicName,
      topicDifficulty: topicDifficulty,
      description: description,
      scalaID: scalaID
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
    pythonID = (pythonID + 1);
    let topic = {
      topicName: topicName,
      topicDifficulty: topicDifficulty,
      description: description,
      pythonID: pythonID
      }
    PythonTopics.insert(topic);  
    Router.go('/topicReader');
    }
  });

Template.topicReader.rendered = function () {
      var z = document.createElement('p');
      var x = document.createElement('p');
      x.setAttribute('content', 'myTitle');
      x.style.background = 'black';
      x.style.color = 'white';
    z.setAttribute('content', 'myTopic');
    var topicHTML = JavaTopics.findOne();
    x.innerHTML = topicHTML.topicName;
    z.innerHTML = topicHTML.description;
    z.style.background = 'red';
    z.style.color = 'white';
      var mainBody = document.getElementById("body");
      mainBody.appendChild(x);
      mainBody.appendChild(z);
}