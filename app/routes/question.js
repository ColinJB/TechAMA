import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  actions: {
    destroyQuestion(model) {
      if (confirm('Are you sure you want to delete this question?')) {
        model.destroyRecord();
        this.transitionTo('index');
      }
    },
    editQuestion(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('question');
    },
    newAnswer(params) {
      var newAnswer = this.store.createRecord('answer',params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question');
    }
  },
});
