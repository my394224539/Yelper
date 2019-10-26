import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    save() {
      const favorite = this.store.createRecord('favorite', {
        name: this.get('model.business.name'),
        yelpid: this.get('model.business.id'),
        address: this.get('model.business.location.formatted_address'),
        phone: this.get('model.business.display_phone'),
        url: this.get('model.business.url'),
        photo: this.get('model.business.photos')
      });
      debugger;
      favorite.save().then(() => {
        this.set('model.favorite', favorite);
      });
    },
    unsave() {
      this.get('model.favorite')
        .destroyRecord()
        .then(() => {
          this.set('model.favorite', undefined);
        });
    }
  }
});