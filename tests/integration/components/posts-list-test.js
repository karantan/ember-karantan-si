import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

module('Integration | Component | posts-list', function(hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function () {
    this.post = EmberObject.create({
      title: 'test-title',
      content: '<div>test-content</div>'
    });
  });

  test('should display post details', async function(assert) {
    await render(hbs`{{posts-list post=post}}`);
    assert.equal(
      this.$('h2').text(), 'test-title', 'Title: test-title');
    assert.equal(
      this.$('p').text().trim(), 'test-content', 'Content: test-content');
    assert.equal(
      this.$('p div').text().trim(), 'test-content', 'Content: test-content');
  });
});
