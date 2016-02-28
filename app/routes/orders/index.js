import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addToItemQuantity(lineItem, amount) {
      lineItem.incrementProperty('quantity', amount);
    },
    createOrder(order){
      const name = order.get('name');
      this.get('store').saveOrder(order);
      this.transitionTo('orders.order', order);
    }
  },

  model () {
    const store = this.get('store');
    return store.newOrder();
  },

  store : Ember.inject.service('store')
});
