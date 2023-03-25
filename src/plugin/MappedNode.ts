import {BaseNode, UAObject} from "node-opcua";

export abstract class MappedUANode {
  node: UAObject;

  constructor(node:UAObject) {
    this.node = node;
  }

  getChildByBrowsePath(browseName: string) {
    let traversedNode: BaseNode | null = this.node;
    for (const subPath of browseName.split('/')) {
      if (!traversedNode) throw new Error('node not found');
      traversedNode = traversedNode.getChildByName(subPath);
    }
    return traversedNode;
  }
}
