const symbols = {
    spacerNoNeighbour: '   ',
    spacerNeighbour: '│  ',
    keyNoNeighbour: '└─ ',
    keyNeighbour: '├─ ',
};
function isLastChild(node, parent) {
    return parent.items[parent.items.length - 1] === node;
}
function getTree(obj) {
    function traversal(node, parent, root, result = [], startPath = []) {
        if(parent === node) {
            result.push(node.name);
        } else {
            //result
            if(!isLastChild(node, parent)) {
                result.push(startPath.join('') + symbols.keyNeighbour + node.name);
            } else {
                result.push(startPath.join('') + symbols.keyNoNeighbour + node.name);
            }
            //

            //next
            if(node.items != null && node.items.length) {
                if(isLastChild(node, parent)) {
                    startPath.push(symbols.spacerNoNeighbour);
                } else {
                    startPath.push(symbols.spacerNeighbour);
                }
            }
        }
        if(node.items != null && node.items.length) {
            const stack = [...node.items];
            while (stack.length) {
                const currentNode = stack.shift();
                traversal(currentNode, node, root, result, [...startPath]);
            }
        }
        return result;
    }
    return traversal(obj, obj, obj).join('\n');
}
export default getTree;