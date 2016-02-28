import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return [
      {
        id: params.poll_id,
        question: 'This is poll #' + params.poll_id
      }
    ].findBy('id', params.poll_id);
  }
});
