/*
 * test.js
 *  - a test script for the querystring node.js module
 *
 * Chad Etzel
 *
 */


var sys = require("sys"),
    qs = require("./querystring");

var foo;

/* test 1 */
foo = qs.parse("foo[bar][][bla]=baz");

sys.puts("obj: " + JSON.stringify(foo));
sys.puts("qs:  " + qs.stringify(foo));

sys.puts('------------------');

/* test 2 */
foo = qs.parse("foo=bar&baz=bing");

sys.puts("obj: " + JSON.stringify(foo));
sys.puts("qs:  " + qs.stringify(foo));

sys.puts('------------------');

/* test 2 */
foo = qs.parse("foo=bar&foo=");

sys.puts("obj: " + JSON.stringify(foo));
sys.puts("qs:  " + qs.stringify(foo));

sys.puts('------------------');

/* test 3 */
foo = qs.parse("foo[1]=1&foo[2]=2&foo[3]=4");

sys.puts("obj: " + JSON.stringify(foo));
sys.puts("qs:  " + qs.stringify(foo));

sys.puts('------------------');

/* test 4 */
foo = qs.parse("foo[]=1&foo[]=2");

sys.puts("obj: " + JSON.stringify(foo));
sys.puts("qs:  " + qs.stringify(foo));

sys.puts('------------------');

/* test 5 */
foo = qs.parse("foo[1]=blah&foo[2]=2");

sys.puts("qs:  " + qs.stringify(foo));
sys.puts("obj: " + JSON.stringify(foo));

sys.puts('------------------');

/* test 6 */
foo = qs.parse("foo[]=1&foo[]=2&foo[]=4");

sys.puts("obj: " + JSON.stringify(foo));
sys.puts("qs:  " + qs.stringify(foo));

