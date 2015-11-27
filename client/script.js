JavaTopics = new Mongo.Collection('JavaTopics');
Template.topicForm.events({
  'click #submit-btn': function(event, template){
    template.find()
    let topicName = template.find('#topicName').value;
    let topicDifficulty = template.find('#topicDifficulty').value;
    let tags = template.find('#tags').value;

    let topic = {
      topicName: topicName,
      topicDifficulty: topicDifficulty,
      tags: tags,
      }
    JavaTopics.insert(topic);
    alert("New Entry: " + topic.topicName + ", " + topic.topicDifficulty);
  }
});