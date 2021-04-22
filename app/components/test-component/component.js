import Component from '@glimmer/component';
import { queryParam } from "ember-query-params-service";

export default class TestComponent extends Component {
  @queryParam first;
  @queryParam second;
}