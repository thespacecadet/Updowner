import DS from 'ember-data';
// const { attr } = DS;

export default DS.Model.extend({
  token: DS.attr('string'),
  alias: DS.attr('string'),
  down: DS.attr('string'),
  uptime: DS.attr('string'),
  down_since: DS.attr('date'),


});
