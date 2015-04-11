import Ember from 'ember';

export default function initializeDeprecationWarning() {
  var stringFmt = Ember.String.fmt;
  var stringFmtDeprecationWarning = function (...args) {
    Ember.deprecate('Use of Ember.String.fmt is deprecated. Use ES6 template strings instead: https://babeljs.io/docs/learn-es6/#template-strings');
    return stringFmt.apply(this, args);
  };
  Ember.String.fmt = stringFmtDeprecationWarning;
}
