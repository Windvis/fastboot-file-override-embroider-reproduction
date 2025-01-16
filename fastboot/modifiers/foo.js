import { modifier } from 'ember-modifier';

export default modifier(function foo(/* element, params, hash*/) {
  console.log('fastboot overriden foo');
});
