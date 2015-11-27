JavaTopics = new Mongo.Collection('JavaTopics');
Template.topicForm.events({
  'click #submit-btn': function(event, template){
    let topicName = template.find('#topicName').value;
    let topicDifficulty = template.find('topicDifficulty').value;
    let tags = template.find('#tags').value;
    let description = template.find('#description').value;

    let topic = {
      topicName: topicName,
      topicDifficulty: topicDifficulty,
      tags: tags,
      description: description
      }
    if (description != null) {JavaTopics.insert(topic);
    alert("New Entry: " + topic.topicName + ", " + topic.topicDifficulty);
    }
  }
});