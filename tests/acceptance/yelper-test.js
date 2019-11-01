import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { authenticateSession } from 'ember-simple-auth/test-support';
import DS from 'ember-data';
import { A } from '@ember/array';
import RSVP from 'rsvp';
import sinon from 'sinon';
import EmberObject from '@ember/object';

module('Acceptance | yelper', function(hooks) {
  setupApplicationTest(hooks);
  let sandbox = sinon.createSandbox();
  hooks.after(function() {
    sandbox.restore();
  });

  test('Logged out page is rendered correctly', async function(assert) {
    await visit('/'); 
    assert.equal(currentURL(), '/', 'we have successfully reached the main page');
    assert.dom('.sign-in').exists('the sign in button exists');
  });

  test('Loged in page is rendered correctly', async function(assert) {
    await authenticateSession({
      userId: 1,
      displayName: 'Feng'
    });
    await visit('/');
    assert.equal(currentURL(), '/', 'we have reached the main page');
    assert.dom('.sign-out').exists('the  sign out button exists');
  });

  test('favorites page is rendered correctly', async function(assert) {
    await visit('/favorites');
    assert.equal(currentURL(), '/favorites','we have successfully reached the favorites page');
  });
  test('All search bar exist', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/', 'we have reached the main page');
    assert.dom('.restaurant').exists();
    assert.dom('.location').exists();
    assert.dom('.price').exists();
  });
  test('Linkto link exist', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/', 'we have reached the main page');
    assert.dom('.linkTosearch').exists();
    assert.dom('.linkTofavorites').exists();
  });

  test('detail page is rendered correctly', async function(assert) {
    await visit('/detail/KSUkqbk7F7tXdEvWzYg8Fg');
    assert.equal(currentURL(), '/detail/KSUkqbk7F7tXdEvWzYg8Fg', 'we have successfully reached the detail page');
    const store = this.owner.lookup('service:store');

    const searchResultMOCKModel = EmberObject.create({
      business: { name: 'fake restaurant NYC' },
      favorite: false,
      yelpid: 'KSUkqbk7F7tXdEvWzYg8Fg'
    });
    sinon.stub(store, 'query').callsFake(function() {
      return DS.PromiseArray.create({
        promise: RSVP.resolve(A([searchResultMOCKModel]))
      });
    });



  });

});
