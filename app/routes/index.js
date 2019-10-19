import Route from '@ember/routing/route';
import { queryManager } from 'ember-apollo-client';
import search from 'yelper/gql/queries/search';

export default Route.extend({
 
  queryParams: {
    term: {
      refreshModel: true
    },
    location:{
        refreshModel: true
    },
    price:{
        refreshModel: true
    }
  }, 

  apollo: queryManager(),

  model(params) {
    if (params.term) {
      const inputs = { term: params.term , location: params.location, price: params.price};
      return this.apollo.watchQuery(
        { query: search, variables: inputs },
        'search'
      );
    }
    
  }
});