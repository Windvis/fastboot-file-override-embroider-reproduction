import { modifier } from 'ember-modifier';
import './foo.css';

export default modifier(function foo(/* element, params, hash*/) {
  console.log('foo');
});
