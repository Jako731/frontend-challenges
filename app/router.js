import EmberRouter from '@ember/routing/router';
import config from 'frontend-challenges/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  // Default Route
  this.route('index', { path: '/' });

  this.route('liking-system');
  this.route('discord', function () {
    this.route('index', { path: '/' });
  });
});
