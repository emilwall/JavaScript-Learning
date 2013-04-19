/*jslint indent: 2*/
/*globals TestCase, assertEquals, assertNotEquals */
TestCase("arrayTest", {
  setUp: function () {
    this.array = new Array();
  },

  tearDown: function () {
    delete this.array;
  },

  "test new array should equal literal": function () {
    assertEquals([], this.array);
  },
         
  "test new array should equal 0" : function () {
    assertEquals(0, this.array);
  },
         
  "test new array should not equal array with inital capacity" : function () {
    assertNotEquals(new Array(10), this.array);
  },
         
  "test new array should be of type object" : function () {
    assertEquals("object", typeof this.array);
  },
         
  "test prototype.toString of new array should be [object Array]" : function () {
    assertEquals("[object Array]", Object.prototype.toString.apply(this.array));
  }
         
});
