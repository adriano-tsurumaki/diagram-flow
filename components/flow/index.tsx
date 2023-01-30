import { useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  BackgroundVariant,
  Panel,
} from "reactflow";
import "reactflow/dist/style.css";
import DiagramControls from "./diagram-controls";

export default function Flow() {
  return (
    <ReactFlow
      nodes={[
        {
          id: "1",
          data: { Label: "a" },
          position: { x: 100, y: 100 },
        },
      ]}
    >
      <DiagramControls />
      <Background
        style={{
          backgroundColor: "#DEE4E7",
        }}
        size={1}
        color="#DEE4E7"
      />
      <Controls />
    </ReactFlow>
  );
}
