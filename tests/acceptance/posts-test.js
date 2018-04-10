import { module, test, stop } from 'qunit';
import { click, visit, currentURL, find, findAll } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';


module.only('Acceptance | posts', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting / redirects to /posts', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/posts');
  });

  test('visiting /posts and seeing posts', async function(assert) {
    await visit('/posts');
    assert.equal(currentURL(), '/posts');
    assert.equal(this.element.querySelector('h1').textContent, 'Posts');
    assert.equal(this.element.querySelectorAll('h2').length, 3);
    assert.equal(this.element.querySelector('h2').textContent, 'News 1');
    assert.equal(this.element.querySelector('p').textContent, 'Content 1');
  });

  test('visiting /posts?page=2', async function(assert) {
    await visit('/posts?page=2');
    assert.equal(currentURL(), '/posts?page=2');
    assert.equal(this.element.querySelector('h1').textContent, 'Posts');
    assert.equal(this.element.querySelectorAll('h2').length, 1);
    assert.equal(this.element.querySelector('h2').textContent, 'News 2');
    assert.equal(this.element.querySelector('p').textContent, 'Content 2');
  });
});
