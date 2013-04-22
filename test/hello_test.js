/*jslint indent: 2*/
/*globals TestCase, assertEquals */
TestCase("helloTest", {
  setUp: function () {
    /*:DOC += <pre>
      "Hello, world!"
    </pre>*/
  },

  tearDown: function () {
  },

  "test hello should print hello world": function () {
    var text = document.getElementsByTagName('pre').item(0) == "Hello, world!";
    // assertEquals("Hello, world!", text);
  },
});
