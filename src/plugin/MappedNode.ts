import {BaseNode, DataType, UAObject, UAVariable} from "node-opcua";

function mapDataTypeUA2TS(basicDataType: DataType, value: any) {
  switch (basicDataType) {
    case DataType.LocalizedText: return value.text;
    default: return value;
  }
}

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

  protected readVariableValueByBrowsePath<T>(browsePath: string): T {
    const variableNode = this.getChildByBrowsePath(browsePath) as UAVariable;
    if (!variableNode) throw new Error(`could not find variable ${browsePath}`);

    return mapDataTypeUA2TS(variableNode.getBasicDataType(), variableNode.readValue().value.value);
  }

  public setVariableValueByBrowsePath<T>(
    browsePath: string, value: any) {
    const variableNode = this.getChildByBrowsePath(browsePath) as UAVariable;
    if (!variableNode) throw new Error(`could not find variable ${browsePath}`);
    variableNode.setValueFromSource({value, dataType: variableNode.getBasicDataType() });
  }
}
