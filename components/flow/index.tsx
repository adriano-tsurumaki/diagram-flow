import "reactflow/dist/style.css";

import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Node,
  NodeChange,
  applyNodeChanges,
} from "reactflow";
import { useCallback, useState } from "react";

import CustomNode from "./custom-node";
import DiagramControls from "./diagram-controls";
import table from "@/components/mock/table1";

const nodeTypes = {
  custom: CustomNode,
};

export default function Flow() {
  const [nodes, setNodes] = useState<Node[]>([
    {
      id: "1",
      type: "custom",
      data: table,
      position: { x: 200, y: 200 },
    },
  ]);

  const onNodesChange = useCallback((changes: NodeChange[]) => {
    setNodes((nds) => applyNodeChanges(changes, nds));
  }, []);

  return (
    <ReactFlow
      nodes={nodes}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      fitView
    >
      <DiagramControls />
      <Background
        style={{
          backgroundColor: "#DEE4E7",
        }}
        size={1}
        color="#DEE4E7"
      />
      <MiniMap />
    </ReactFlow>
  );
}
