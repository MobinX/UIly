import { Node, Propaties } from '@/interfaces/ui_tree';

export function getNodeById(root: Node, id: string): Node | undefined {
    if (root.id === id) {
        return root;
    }
    if (root.children) {
        for (const child of root.children) {
            const node = getNodeById(child, id);
            if (node) {
                return node;
            }
        }
    }
    return undefined;
}
export function getNodeByPath(root: Node, path: string[]): Node | undefined {
    let currentNode: Node = root;
    if (path[0] == root.id) {
        // Traverse through the path
        path.shift();
        for (const nodeId of path) {
            // Find the child node with the given ID
            const childNode: Node | undefined = currentNode?.children?.find(node => node.id === nodeId);

            // If the child node doesn't exist, return
            if (!childNode) {
                console.error(`Node with ID ${nodeId} not found in path ${path}`);
                return;
            }

            // Update the current node to the child node
            currentNode = childNode;
        }
        path.unshift(root.id);
    }
    else {
        console.error(`root node not have  ${path[0]}`);
        return;
    }

    return currentNode;
}
export function getParentNodeById(root: Node, id: string): Node | undefined {
    let currentNode: Node | undefined = getNodeById(root, id);
    if (currentNode) {
        let parentPath = currentNode.path.slice(0, -1);
        let parentNode: Node | undefined = getNodeByPath(root, parentPath);
        if (parentNode) {
            return parentNode;
        }
    }
}
export function getParentNodeByPath(root: Node, path: string[]): Node | undefined {
    let currentNode: Node | undefined = getNodeByPath(root, path);
    if (currentNode) {
        let parentPath = path.slice(0, -1);
        let parentNode: Node | undefined = getNodeByPath(root, parentPath);
        if (parentNode) {
            return parentNode;
        }
    }
}
export function deleteNodeById(root: Node, id: string): Node | undefined {
    let currentNode: Node | undefined = getNodeById(root, id);
    if (currentNode) {
        let parentPath = currentNode.path.slice(0, -1);
        let parentNode: Node | undefined = getNodeByPath(root, parentPath);
        if (parentNode) {
            let newChildren = parentNode.children?.filter(node => node.id !== id);
            updateNode(root, parentPath, { children: newChildren });
        }
    }
    return root;
}
export function deleteNodeByPath(root: Node, path: string[]): Node | undefined {
    let currentNode: Node | undefined = getNodeByPath(root, path);
    if (currentNode) {
        let parentPath = path.slice(0, -1);
        let parentNode: Node | undefined = getNodeByPath(root, parentPath);
        if (parentNode) {
            let newChildren = parentNode.children?.filter(node => node.id !== path[path.length - 1]);
            updateNode(root, parentPath, { children: newChildren });
        }
    }
    return root;
}
export function deleteParentNodeById(root: Node, id: string): Node | undefined {
    let currentNode: Node | undefined = getParentNodeById(root, id)
    if (currentNode) {
        let resultNode: Node | undefined = deleteNodeById(root, currentNode.id);
        return root;
    }
}
export function deleteParentNodeByPath(root: Node, path: string[]): Node | undefined {
    let currentNode: Node | undefined = getParentNodeByPath(root, path)
    if (currentNode) {
        let resultNode: Node | undefined = deleteNodeById(root, currentNode.id);
        return root;
    }
}

export function updateNode(root: Node, path: string[], update: Partial<Node>): Node | undefined {
    let currentNode: Node | undefined = getNodeByPath(root, path);

    if (currentNode) {
        Object.assign(currentNode, update);
        global.Tree = root;
        window.dispatchEvent(new CustomEvent('treeUpdate', { detail: {tree:root,current:currentNode} }));
    }
    return root;
}
export function createContainerNode(root: Node, path: string[] = [], name: string, isComponent = false): Node | undefined {
    let id = Math.random().toString(36).substring(7);

    let currentNode: Node | undefined = getNodeByPath(root, path);

    if (currentNode) {
        let prevChildren: Node[] = !currentNode.children ? [] : currentNode.children;
        prevChildren.push({
            id: id,
            name,
            type: 'container',
            path: path.concat(id),
            isComponent: false,
        });
        //update the tree

        updateNode(root, path, { children: prevChildren });
        return root;
    }
}
export function createTextNode(root: Node, path: string[] = [], text: string, isComponent = false): Node | undefined {
    let id = Math.random().toString(36).substring(7);

    let currentNode: Node | undefined = getNodeByPath(root, path);

    if (currentNode) {
        let prevChildren: Node[] = !currentNode.children ? [] : currentNode.children;
        prevChildren.push({
            id: id,
            name: text,
            type: 'text',
            path: path.concat(id),
            text: text,
            isComponent: false,
        });
        //update the tree

        updateNode(root, path, { children: prevChildren });
        return root;
    }
}



//random tree
export let randomTree: Node = JSON.parse(`{"id":"vj2ixi","type":"container","name":"Node_vj2ixi","path":["vj2ixi"],"isComponent":true,"children":[{"id":"adz24","type":"container","name":"Node_adz24","path":["vj2ixi","adz24"],"isComponent":false,"children":[{"id":"4o8c78","type":"text","name":"Node_4o8c78","path":["vj2ixi","adz24","4o8c78"],"isComponent":true,"propaties":{}}]},{"id":"becvgk","type":"text","name":"Node_becvgk","path":["vj2ixi","becvgk"],"isComponent":true},{"id":"l930ka","type":"container","name":"Node_l930ka","path":["vj2ixi","l930ka"],"isComponent":false,"children":[{"id":"cgispi","type":"text","name":"Node_cgispi","path":["vj2ixi","l930ka","cgispi"],"isComponent":false},{"id":"6m0r9q","type":"container","name":"Node_6m0r9q","path":["vj2ixi","l930ka","6m0r9q"],"isComponent":true,"children":[{"id":"9uoy5","type":"container","name":"Node_9uoy5","path":["vj2ixi","l930ka","6m0r9q","9uoy5"],"isComponent":false,"children":[{"id":"eim1oy","type":"container","name":"Node_eim1oy","path":["vj2ixi","l930ka","6m0r9q","9uoy5","eim1oy"],"isComponent":false,"children":[{"id":"0n42f8","type":"container","name":"Node_0n42f8","path":["vj2ixi","l930ka","6m0r9q","9uoy5","eim1oy","0n42f8"],"isComponent":false,"children":[{"id":"wjbdww","type":"container","name":"Node_wjbdww","path":["vj2ixi","l930ka","6m0r9q","9uoy5","eim1oy","0n42f8","wjbdww"],"isComponent":false,"propaties":{}},{"id":"s0bvds","type":"text","name":"Node_s0bvds","path":["vj2ixi","l930ka","6m0r9q","9uoy5","eim1oy","0n42f8","s0bvds"],"isComponent":true,"propaties":{}},{"id":"369i7","type":"text","name":"Node_369i7","path":["vj2ixi","l930ka","6m0r9q","9uoy5","eim1oy","0n42f8","369i7"],"isComponent":true}],"propaties":{}}],"propaties":{}},{"id":"52e4cd","type":"container","name":"Node_52e4cd","path":["vj2ixi","l930ka","6m0r9q","9uoy5","52e4cd"],"isComponent":true,"children":[{"id":"ozpw1g","type":"text","name":"Node_ozpw1g","path":["vj2ixi","l930ka","6m0r9q","9uoy5","52e4cd","ozpw1g"],"isComponent":true,"propaties":{}},{"id":"uded2s","type":"text","name":"Node_uded2s","path":["vj2ixi","l930ka","6m0r9q","9uoy5","52e4cd","uded2s"],"isComponent":true}],"propaties":{}}]},{"id":"jmh47v","type":"container","name":"Node_jmh47v","path":["vj2ixi","l930ka","6m0r9q","jmh47v"],"isComponent":true,"children":[{"id":"le9fy6","type":"text","name":"Node_le9fy6","path":["vj2ixi","l930ka","6m0r9q","jmh47v","le9fy6"],"isComponent":true,"propaties":{}},{"id":"i55c1i","type":"container","name":"Node_i55c1i","path":["vj2ixi","l930ka","6m0r9q","jmh47v","i55c1i"],"isComponent":false,"children":[{"id":"92blvw","type":"text","name":"Node_92blvw","path":["vj2ixi","l930ka","6m0r9q","jmh47v","i55c1i","92blvw"],"isComponent":false},{"id":"hk7klb","type":"text","name":"Node_hk7klb","path":["vj2ixi","l930ka","6m0r9q","jmh47v","i55c1i","hk7klb"],"isComponent":false,"propaties":{}},{"id":"ll1qmd","type":"text","name":"Node_ll1qmd","path":["vj2ixi","l930ka","6m0r9q","jmh47v","i55c1i","ll1qmd"],"isComponent":false,"propaties":{}}]},{"id":"80uy4n","type":"container","name":"Node_80uy4n","path":["vj2ixi","l930ka","6m0r9q","jmh47v","80uy4n"],"isComponent":true,"children":[{"id":"0q8rkj","type":"text","name":"Node_0q8rkj","path":["vj2ixi","l930ka","6m0r9q","jmh47v","80uy4n","0q8rkj"],"isComponent":true},{"id":"e6esn8","type":"container","name":"Node_e6esn8","path":["vj2ixi","l930ka","6m0r9q","jmh47v","80uy4n","e6esn8"],"isComponent":false,"children":[{"id":"ktz5ie","type":"container","name":"Node_ktz5ie","path":["vj2ixi","l930ka","6m0r9q","jmh47v","80uy4n","e6esn8","ktz5ie"],"isComponent":false,"propaties":{}},{"id":"ypw1vv","type":"text","name":"Node_ypw1vv","path":["vj2ixi","l930ka","6m0r9q","jmh47v","80uy4n","e6esn8","ypw1vv"],"isComponent":true}],"propaties":{}}]}]}]},{"id":"lzu8p","type":"text","name":"Node_lzu8p","path":["vj2ixi","l930ka","lzu8p"],"isComponent":false}]}],"propaties":{}}
`)
export function generateRandomNode(depth: number, paths: string[] = []): Node {
    const types = ["container", "text"];
    const randomType = types[Math.floor(Math.random() * types.length)];
    const id = Math.random().toString(36).substring(7);
    const name = `Node_${id}`;
    const path = paths.concat(id);
    const isComponent = Math.random() < 0.5;

    let node: Node = {
        id,
        type: randomType as "container" | "text",
        name,
        path,
        isComponent
    };

    if (randomType === "container" && depth > 0) {
        const numChildren = Math.floor(Math.random() * 3) + 1; // Generate random number of children (1 to 3)
        node.children = [];
        for (let i = 0; i < numChildren; i++) {
            node.children.push(generateRandomNode((depth - 1), path));
        }
    }

    if (Math.random() < 0.5) {
        node.propaties = generateRandomProperties();
    }

    return node;
}
function generateRandomProperties(): Propaties {
    return {}
}

