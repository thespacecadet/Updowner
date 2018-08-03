import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return $.get('https://updown.io/api/checks?api-key=ro-pz3x1zy4ae63yhygraqe'); //simple api call, hard coded
  }
});
