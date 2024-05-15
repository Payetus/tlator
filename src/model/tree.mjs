export class Leaf {
    constructor(value) {
        this.value = value;
    }
}

export class TreeNode {
    constructor() {
        this.children = {};
    }
}

export const buildTree = (csvArray)  => {
    const headers = csvArray[0];
    const rootNode = new TreeNode();

    for (let i = 1; i < csvArray.length; i++) {
        const cols = csvArray[i];
        const translationId = cols[0];
        const valueObject = {};
        for (let j = 1; j < cols.length; j++) {
            valueObject[headers[j]] = cols[j];
        }
        const words = translationId.split('.');
        let currentNode = rootNode;
        for (let k = 0; k < words.length - 1; k++) {
            const word = words[k];
            if (!currentNode.children[word]) {
                currentNode.children[word] = new TreeNode();
            }
            currentNode = currentNode.children[word];
        }
        const leafNode = new Leaf(valueObject);
        const lastWord = words[words.length - 1];
        currentNode.children[lastWord] = leafNode;
    }

    return rootNode;
}