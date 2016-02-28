import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('orders', function () {
    this.route('order', { path : '/:order_id' });
  });

  this.route('polls', function () {
    this.route('poll', {path : '/:poll_id'});
  });
});

export default Router;
