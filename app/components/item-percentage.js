import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleDetails () {
      this.toggleProperty('showDetails');
    }
  },
  isImportant: Ember.computed.gte('percentage', 50),
  percentage : Ember.computed('itemPrice', 'orderPrice', function () {
    return Math.round(this.get('itemPrice') / this.get('orderPrice') * 100);
  })
});
