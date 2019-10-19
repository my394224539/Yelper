import Controller from '@ember/controller';
import { throttle } from '@ember/runloop';

export default Controller.extend({
  queryParams: ['term','locaion','price'],
  term: null,location:null,price:null,
  actions: {
    updateTerm() {
      debugger;
      throttle(() => {
        this.set('term');
      }, 1000);
    },
    updateLocation() {
        debugger;
        throttle(() => {
          this.set('location');
        }, 1000);
    },
      updatePrice() {
        debugger;
        throttle(() => {
          this.set('price');
        }, 1000);
    }
  }
});