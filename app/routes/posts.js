import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    per_page: {
      refreshModel: true
    },
    page: {
      refreshModel: true
    }
  },

  model(params) {
    return this.get('store').query('post', params);
  },

  // setupController(controller, model) {
  //   // Call _super for default behavior
  //   this._super(controller, model);
  //   console.log(model);
  //   // Implement your custom setup after
  //   this.controllerFor('application').set('totalPages', 4);
  // }
});
