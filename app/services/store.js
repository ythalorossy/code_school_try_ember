import Ember from 'ember';
import LineItem from 'woodland/models/line-item';
import Order from 'woodland/models/order';
import Product from 'woodland/models/product';

const products = [
  Product.create({title: 'Tent', price: 10, description:'description ... . '}),
  Product.create({title: 'Sleeping...', price: 20, description:'description ... . '}),
  Product.create({title: 'Flashling...', price: 30, description:'description ... . '}),
  Product.create({title: 'First-Ai...', price: 40, description:'description ... . '}),
];

const orders = [
  Order.create({ id: '123', name: 'Blaise Blobfish',
    items : [
      LineItem.create({product: products[0], quantity: 4}),
      LineItem.create({product: products[1], quantity: 2}),
      LineItem.create({product: products[2], quantity: 6}),
      LineItem.create({product: products[3], quantity: 2}),
    ]
  })
];

export default Ember.Service.extend({
  getOrderById(id){
    return orders.findBy('id', id);
  },
  getOrders () {
    return orders;
  },
  getProducts () { return products; },
  newOrder () {
    return Order.create({
      items : products.map((product) => {
        return  LineItem.create({
          product : product
        });
      })
    });
  },
  saveOrder (order) {
    order.set('id', 9999);
    orders.pushObject(order);
  }
});
