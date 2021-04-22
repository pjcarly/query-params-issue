import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('static');
  this.route('dynamic', function () {
    this.route('index', {
      path: '/',
    });
    this.route('view', {
      path: ':id/view',
    });
  });
  this.route('queryparam');
});
