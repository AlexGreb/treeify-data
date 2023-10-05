const symbols = {
    spacerNoNeighbour: '   ',
    spacerNeighbour: '│  ',
    keyNoNeighbour: '└─ ',
    keyNeighbour: '├─ ',
};
function isLastChild(node, parent, childrenProp) {
    return parent[childrenProp][parent[childrenProp].length - 1] === node;
}
function treeifyData(obj,  prop = 'name', childrenProp = 'items', depth) {
    function traversal(node, parent, root, result = [], startPath = '', curDepth = 1) {
        console.log(node.name, depth);
        if(!node.hasOwnProperty(prop)) return;
        if(parent === node) {
            result.push(node[prop]);
        } else {
            if(!isLastChild(node, parent, childrenProp)) {
                result.push(startPath + symbols.keyNeighbour + node[prop]);
            } else {
                result.push(startPath + symbols.keyNoNeighbour + node[prop]);
            }

            if(node.hasOwnProperty(childrenProp) && node[childrenProp].length) {
                if(isLastChild(node, parent, childrenProp)) {
                    startPath += symbols.spacerNoNeighbour;
                } else {
                    startPath += symbols.spacerNeighbour;
                }
            }
        }
        if(node.hasOwnProperty(childrenProp) && node[childrenProp].length) {
            const stack = [...node[childrenProp]];
            while (stack.length) {
                const currentNode = stack.shift();
                if(!(curDepth >= depth)) {
                    traversal(currentNode, node, root, result, startPath, curDepth+1);
                }
            }
        }
        return result;
    }
    return traversal(obj, obj, obj)?.join('\n');
}
export default treeifyData;