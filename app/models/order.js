import Ember from 'ember';

export default Ember.Object.extend({
  itemPrices : Ember.computed.mapBy('items', 'price'),
  price : Ember.computed.sum('itemPrices')
});
