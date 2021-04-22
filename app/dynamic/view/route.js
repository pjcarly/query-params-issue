import Route from '@ember/routing/route';

export default class DynamicViewRoute extends Route {


  /**
   * The model hook with functionality for single entities
   * @param params The router params
   */
  async model(params) {
    return params[`id`];
  }
}