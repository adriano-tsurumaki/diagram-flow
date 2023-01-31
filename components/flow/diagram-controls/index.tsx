import { Panel, useReactFlow } from "reactflow";

import { BsTable } from "react-icons/bs";
import { ReactNode } from "react";
import table from "@/components/mock/table1";

export default function DiagramControls() {
  return (
    <Panel position="top-left">
      <div className="flex gap-1 p-3 bg-red-400 rounded-3xl">
        <ButtonMenu
          icon={<BsTable color="#0d1be4" />}
          tooltip={"Criar uma tabela"}
        />
      </div>
    </Panel>
  );
}

function ButtonMenu({
  icon,
  tooltip,
}: {
  icon: ReactNode;
  tooltip: ReactNode;
}) {
  const { addNodes } = useReactFlow();

  return (
    <div
      className="flex bg-white items-center rounded-full p-2 group relative cursor-pointer"
      onClick={(e) =>
        addNodes({
          id: "1000",
          type: "custom",
          data: table,
          position: {
            x: 0,
            y: 0,
          },
        })
      }
    >
      {icon}
      <Tooltip>{tooltip}</Tooltip>
    </div>
  );
}

function Tooltip({ children }: { children: ReactNode }) {
  return (
    <span
      className="invisible group-hover:visible opacity-0 group-hover:opacity-100 
      transition bg-blue-500 text-white p-1 rounded absolute top-full mt-2 whitespace-nowrap"
    >
      {children}
    </span>
  );
}
