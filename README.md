# treeify-data
<em>treeify-data</em> converts a JS object into a nice, visible depth-indented tree for console printing. The structure generated is similar to what you get by running the tree command on Unixy platforms.

## Usage
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
}));
```

| Prop         |                 Description                  | Default  |   Type |
|--------------|:--------------------------------------------:|:--------:|-------:|
| prop         |         Used to indicate data output         |   name   | string |
| childrenProp | Used to specify properties of child elements |  items   | string |
| depth        |                  Show depth                  | Infinity | number |

Example:

```javascript
import treeifyData from "treeify-data";
console.log(
  treeifyData({
    parent: 1,                           // 1
    childs: [{ parent: 2,                // └─  2
               childs: [ { parent: 3 },  //    ├─ 3
                       { parent: 4 }]    //    └─ 4
            }]
}, 'parent', 'childs'));
```

