import { Resizable } from "re-resizable";

export default function SideBarProps() {
  return (
    <Resizable
      className="overflow-hidden"
      defaultSize={{
        width: "16.666667%",
        height: "auto",
      }}
      maxWidth={"25%"}
      minWidth={"16.666667%"}
      handleClasses={{
        top: "pointer-events-none",
        bottom: "pointer-events-none",
        right: "pointer-events-none",
        topRight: "pointer-events-none",
        topLeft: "pointer-events-none",
        bottomRight: "pointer-events-none",
        bottomLeft: "pointer-events-none",
      }}
    >
      <div className="bg-slate-800 h-full text-white overflow-auto">
        <div>SideBar Properties</div>
      </div>
    </Resizable>
  );
}
