JavaTopics = new Mongo.Collection('JavaTopics');
JavaScriptTopics = new Mongo.Collection('JavaScriptTopics');
PythonTopics = new Mongo.Collection('PythonTopics');
ScalaTopics = new Mongo.Collection('ScalaTopics');

var javaID = 0;
var javaScriptID = 0;
var PythonID = 0;
var ScalaID = 0;

Template.javaTopicForm.events({
  'click #submit-btn': function(event, template){
    let topicName = template.find('#topicName').value;
    let topicDifficulty = template.find('topicDifficulty').value;
    let description = template.find('#description').value;
    javaID = (javaID + 1);
    let topic = {
      topicName: topicName,
      topicDifficulty: topicDifficulty,
      description: description,
      javaID: javaID
      }
    JavaTopics.insert(topic);  
    alert("New Entry: " + topic.topicName + ", " + topic.topicDifficulty);
    }
  }
});

Template.javaScriptTopicForm.events({
  'click #submit-btn': function(event, template){
    let topicName = template.find('#topicName').value;
    let topicDifficulty = template.find('topicDifficulty').value;
    let description = template.find('#description').value;
    javaID = (javaID + 1);
    let topic = {
      topicName: topicName,
      topicDifficulty: topicDifficulty,
      description: description,
      javaScriptID: javaScriptID
      }
    JavaScriptTopics.insert(topic);  
    alert("New Entry: " + topic.topicName + ", " + topic.topicDifficulty);
    }
  }
});

Template.scalaTopicForm.events({
  'click #submit-btn': function(event, template){
    let topicName = template.find('#topicName').value;
    let topicDifficulty = template.find('topicDifficulty').value;
    let description = template.find('#description').value;
    scalaID = (scalaID + 1);
    let topic = {
      topicName: topicName,
      topicDifficulty: topicDifficulty,
      description: description,
      scalaID: scalaID
      }
    ScalaTopics.insert(topic);  
    alert("New Entry: " + topic.topicName + ", " + topic.topicDifficulty);
    }
  }
});

Template.pythonTopicForm.events({
  'click #submit-btn': function(event, template){
    let topicName = template.find('#topicName').value;
    let topicDifficulty = template.find('topicDifficulty').value;
    let description = template.find('#description').value;
    pythonID = (pythonID + 1);
    let topic = {
      topicName: topicName,
      topicDifficulty: topicDifficulty,
      description: description,
      pythonID: pythonID
      }
    PythonTopics.insert(topic);  
    alert("New Entry: " + topic.topicName + ", " + topic.topicDifficulty);
    }
  }
});
