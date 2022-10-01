export class MockOpcServer {
    addNode(browsePath: string, value: string) {
        console.log(`[opc-node] adding node:     ${browsePath}`);
    }

    addVariable(browsePath: string, value: string|number) {
        console.log(`[opc-node] adding variable: ${browsePath} -> ${value}`);
    }

    addProperty(browsePath: string, value: string|number) {
        console.log(`[opc-node] adding property: ${browsePath} -> ${value}`);
    }
}
