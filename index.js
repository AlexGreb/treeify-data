const symbols = {
    spacerNoNeighbour: '   ',
    spacerNeighbour: '│  ',
    keyNoNeighbour: '└─ ',
    keyNeighbour: '├─ ',
};
function isLastChild(node, parent, childrenProp) {
    return parent[childrenProp][parent[childrenProp].length - 1] === node;
}
function treeifyData(obj,  prop = 'name', childrenProp = 'items', depth = Infinity) {
    function traversal(node, parent, result = [], startPath = '', curDepth = 1) {
        if(!node.hasOwnProperty(prop)) return;
        if(parent === node) {
            result.push(node[prop]);
        } else {
            const isLast = isLastChild(node, parent, childrenProp);
            result.push(
                startPath + (isLast ? symbols.keyNoNeighbour : symbols.keyNeighbour ) + node[prop]
            )
            if(node.hasOwnProperty(childrenProp) && node[childrenProp].length) {
                startPath += isLast ? symbols.spacerNoNeighbour : symbols.spacerNeighbour;
            }
        }
        if(node.hasOwnProperty(childrenProp) && node[childrenProp].length) {
            const stack = [...node[childrenProp]];
            while (stack.length) {
                const currentNode = stack.shift();
                if(curDepth < depth) {
                    traversal(currentNode, node, result, startPath, curDepth+1);
                }
            }
        }
        return result;
    }
    return traversal(obj, obj)?.join('\n');
}
export default treeifyData;