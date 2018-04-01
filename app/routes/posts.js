import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    // return this.get('store').query('post', { favorite: true });
    return this.store.query('post', {per_page: 10});
  }
});
