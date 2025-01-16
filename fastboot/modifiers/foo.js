import { modifier } from 'ember-modifier';
// Uncommenting this fixes the problem
// import 'fastboot-embroider-repro/modifiers/foo.css';

export default modifier(function foo(/* element, params, hash*/) {
  console.log('fastboot overriden foo');
});
