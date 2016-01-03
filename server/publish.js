JavaTopics = new Mongo.Collection('JavaTopics');
JavaScriptTopics = new Mongo.Collection('JavaScriptTopics');
PythonTopics = new Mongo.Collection('PythonTopics');
ScalaTopics = new Mongo.Collection('ScalaTopics');

Meteor.publish('JavaTopics', function () {
  return JavaTopics.find();
});