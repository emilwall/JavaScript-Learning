/*jslint indent: 2*/
/*globals TestCase, assertUndefined, assertNotUndefined */
TestCase("hoistingTest", {
  setUp: function () {
    this.bar = {};
  },

  tearDown: function () {
    delete this.bar;
    delete foo;
  },

  "test variable declaration should cause hoisting": function () {
    assertUndefined(foo);
    var foo = function () { /* ... */ };
    assertNotUndefined(foo);
  },

  "test property assignment should not cause hoisting": function () {
    assertException(function () {
      assertUndefined(this.bar.baz);
    }, "TypeError"); // Said ReferenceError in TDDJS!
    
    this.bar.baz = function () { /* ... */ };
    
    assertNotUndefined(this.bar.baz);
  },     
});