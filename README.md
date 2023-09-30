# treeify-data
<em>treeify-data</em> converts a JS object into a nice, visible depth-indented tree for console printing. The structure generated is similar to what you get by running the tree command on Unixy platforms.

## For use with node.js
First you'll want to run this command in your project's root folder:
```
$ npm install treeify-data
```

Then proceed to use it in your project:

```javascript
import treeifyData from "treeify-data";
console.log(
  treeifyData({
    name: 1,                          // 1
    items: [{ name: 2,                // └─  2
                items: [ { name: 3 }, //    ├─ 3
                         { name: 4 }] //    └─ 4
            }]
});
```
