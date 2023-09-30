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
---

### :fire: My Stats :

[![GitHub Streak](http://github-readme-streak-stats.herokuapp.com?user=AlexGreb&theme=dark&hide_border=true)](https://git.io/streak-stats)


[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=AlexGreb&layout=compact&theme=vision-friendly-dark)](https://github.com/anuraghazra/github-readme-stats)

<div align="center">
  <img src="https://media.giphy.com/media/M9gbBd9nbDrOTu1Mqx/giphy.gif" width="100"/>
</div>
<div align="center">
  <img src="https://komarev.com/ghpvc/?username=AlexGreb&style=flat-square&color=blue" alt=""/>  
</div>
