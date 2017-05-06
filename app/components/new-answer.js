import Ember from 'ember';

export default Ember.Component.extend({
  answerForm: false,

  actions: {
    showAnswerForm() {
      this.set('answerForm',true);
    },
    newAnswer() {
      var params = {
        author: this.get('answerAuthor'),
        content: this.get('answerContent'),
      };
      this.set('answerForm',false);
      this.sendAction('newAnswer',params);
    }
  }
});
