import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  name: attr('string'),
  yelpid: attr('string'),
  address: attr('string'),
  phone: attr('string'),
  url: attr('string'),
  photo: attr('string')
});
