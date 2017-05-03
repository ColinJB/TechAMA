import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestion: false,

  actions: {
    editFormShow(){
      this.set('updateQuestion',true);
    },

    editQuestion(question){
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        notes: this.get('notes'),
      };
      this.set('updateQuestion',false);
      this.sendAction('editQuestion', question, params);
    }
  }
});
