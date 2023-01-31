import { Handle, NodeProps, Position } from "reactflow";

import cc from "classcat";

type CustomNodeData = {
  columns: CustomColumns[];
};

type CustomColumns = {
  name: string;
  type: string;
  isPrimaryKey: boolean;
  isIdentity?: boolean;
  isNull?: boolean;
};

export default function CustomNode({ data }: NodeProps<CustomNodeData>) {
  const dataSorted = data?.columns.sort((a, b) =>
    a.isPrimaryKey === b.isPrimaryKey
      ? 0
      : !!a.isPrimaryKey && !b.isPrimaryKey
      ? -1
      : 1
  );

  const indexForSeparator = dataSorted
    .map((x) => !!x.isPrimaryKey)
    .lastIndexOf(true);

  return (
    <>
      <span className="pl-2 text-slate-700">Endereco</span>
      <div
        className="grid grid-flow-row bg-slate-50 text-slate-900 rounded p-2 shadow-lg cursor-pointer"
        style={{
          gridTemplateColumns: "repeat(3, auto)",
        }}
      >
        {dataSorted.map((x, index) => {
          const styles = cc({
            "border-b border-slate-300": indexForSeparator === index,
            "hover:bg-blue-300 transition-colors": true,
          });

          return (
            <>
              <div className={"pr-2 p-1 relative " + styles}>{x.name}</div>
              <div className={"pr-2 p-1 " + styles}>
                {x.type}{" "}
                {x.isIdentity && (
                  <span className="text-orange-400 font-semibold">UNIQUE</span>
                )}
              </div>
              <div className={"p-1 " + styles}>{x.isPrimaryKey && "PK"}</div>
            </>
          );
        })}
      </div>
    </>
  );
}

// export default function CustomNode({ data }: NodeProps<CustomNodeData>) {
//   const [identifyColumns, normalColumns] = data?.columns.reduce(
//     (acc, actual) => {
//       if (actual.isPrimaryKey) {
//         return [[...acc[0], actual], acc[1]];
//       }

//       return [acc[0], [...acc[1], actual]];
//     },
//     [[] as CustomColumns[], [] as CustomColumns[]]
//   );

//   const a = data?.columns.sort((a, b) => a.isPrimaryKey === b.isPrimaryKey ? 0 : !!a.isPrimaryKey && !b.isPrimaryKey ? -1 : 1)
//     .reduce((acc, value) => {
//       let names = acc[0];
//       let types = acc[1];
//       let keys = acc[2];

//       return [[...names, value], [...types, value], [...keys, value]];
//     }, [[], [], []])

//   console.log(identifyColumns, normalColumns);

//   return (
//     <>
//       <div className="grid grid-flow-col bg-slate-50 text-slate-900 rounded p-2 shadow-lg">
//         <div className="grid auto-rows-max">
//           {identifyColumns.map((column, index) => (
//             <div
//               key={column.name}
//               className={
//                 cc({
//                   "border-b border-slate-300":
//                     identifyColumns.length === index + 1,
//                 }) + " pr-2 relative"
//               }
//             >
//               {column.name}
//             </div>
//           ))}
//           {/* <div className="pr-2 border-b border-slate-300 relative">
//             IdPerson
//             <Handle
//               className="w-full h-full absolute bg-transparent"
//               // style={targetHandleStyle}
//               position={Position.Left}
//               type="target"
//             />
//           </div> */}
//           <div className="pr-2">Name</div>
//           <div className="pr-2">LastName</div>
//         </div>
//         <div className="grid auto-rows-max">
//           <div className="pr-2 border-b border-slate-300">int UNIQUE</div>
//           <div className="pr-2">varchar(30)</div>
//           <div className="pr-2">varchar(30)</div>
//         </div>
//         <div className="grid auto-rows-max">
//           <div className="border-b border-slate-300">AK</div>
//         </div>
//         <Handle
//           className="targetHandle"
//           style={{ zIndex: 2 }}
//           position={Position.Right}
//           type="source"
//         />
//       </div>
//     </>
//   );
// }
