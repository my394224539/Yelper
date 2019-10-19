import Route from '@ember/routing/route';
import { queryManager } from 'ember-apollo-client';
import query from 'yelper/gql/queries/businessDetail';

export default Route.extend({
  apollo: queryManager(),
  model(params) {
    const variables = { id: params.id };
    return this.apollo.watchQuery({ query, variables }, 'business');
  }
});