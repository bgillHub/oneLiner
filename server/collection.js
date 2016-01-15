
Meteor.methods({
  addResponse: function(reply, nameOf){
  	let originalResponse = JavaTopics.findOne({topicName:nameOf}).responses;
    let newResponse =  originalResponse + "*****" + reply;
    console.log(newResponse);
    JavaTopics.update(
      {topicName:nameOf},
      {$set: {responses: newResponse}});
    },
    changeModalTitle: function(){
    	
    }
});