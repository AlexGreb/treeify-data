const symbols = {
    spacerNoNeighbour: '   ',
    spacerNeighbour: '│  ',
    keyNoNeighbour: '└─ ',
    keyNeighbour: '├─ ',
};
function isLastChild(node, parent, childrenProp) {
    return parent[childrenProp][parent[childrenProp].length - 1] === node;
}

function traversal(node, parent, depth, prop, childrenProp, result = [], startPath = '', curDepth = 1) {
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
        const queue = [...node[childrenProp]];
        while (queue.length) {
            const currentNode = queue.shift();
            if(curDepth < depth) {
                traversal(currentNode, node, depth,  prop, childrenProp, result, startPath, curDepth+1);
            }
        }
    }
    return result;
}
function treeifyData(obj,  prop = 'name', childrenProp = 'items', depth = Infinity) {
    return traversal(obj, obj, depth, prop, childrenProp)?.join('\n');
}
export default treeifyData;