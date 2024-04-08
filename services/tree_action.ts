import { Node } from '@/interfaces/ui_tree';

function updateObj(root: Node, path: string[], update: Partial<Node>): void {
    let currentNode: Node | undefined = root;

    // Traverse through the path
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

    // Update the value of the node with the given update object
    if (currentNode) {
        Object.assign(currentNode, update);
    }
}
