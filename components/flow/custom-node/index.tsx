import { NodeProps } from "reactflow";

type CustomNodeData = {
  columns: {
    name: string;
    type: string;
    isPrimaryKey: boolean;
    isIdentity?: boolean;
    isNull?: boolean;
  }[];
};

export default function CustomNode(props: NodeProps<CustomNodeData>) {
  return (
    <>
      <div className="grid grid-flow-col bg-slate-50 text-slate-900 rounded p-2">
        <div className="grid auto-rows-max">
          <div className="pr-2 border-b border-slate-300">IdPerson</div>
          <div className="pr-2">Name</div>
          <div className="pr-2">LastName</div>
        </div>
        <div className="grid auto-rows-max">
          <div className="pr-2 border-b border-slate-300">int UNIQUE</div>
          <div className="pr-2">varchar(30)</div>
          <div className="pr-2">varchar(30)</div>
        </div>
        <div className="grid auto-rows-max">
          <div className="border-b border-slate-300">AK</div>
        </div>
      </div>
    </>
  );
}
