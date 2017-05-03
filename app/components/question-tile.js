import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestion: false,
  actions: {
    delete(question) {
      if(confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    editQuestion(question, params){
      this.sendAction('editQuestion', question, params);
    }
  }
});
