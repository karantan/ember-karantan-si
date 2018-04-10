import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | posts', function(hooks) {
  setupTest(hooks);

  test('properties are initialized', function(assert) {
    assert.expect(4);

    let controller = this.owner.lookup('controller:posts');
    assert.ok(controller);

    assert.equal(controller.get('page'), 1, 'page initialized');
    assert.equal(controller.get('per_page'), 5, 'per_page initialized');
    assert.equal(controller.get('totalPages'), null, 'totalPages initialized');

  });
});
