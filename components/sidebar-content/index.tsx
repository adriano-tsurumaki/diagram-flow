import { Resizable } from "re-resizable";

export default function SideBarContent() {
  return (
    <Resizable
      className="overflow-hidden"
      maxWidth={"25%"}
      minWidth={"16.666667%"}
      handleClasses={{
        top: "pointer-events-none",
        bottom: "pointer-events-none",
        left: "pointer-events-none",
        topRight: "pointer-events-none",
        topLeft: "pointer-events-none",
        bottomRight: "pointer-events-none",
        bottomLeft: "pointer-events-none",
      }}
    >
      <div className="h-full bg-slate-800 text-white overflow-auto scroll-m-12">
        <div className="">SideBar Content</div>
        <div className="">SideBar Content</div>
        <div className="">SideBar Content</div>
        <div className="">SideBar Content</div>
        <div className="">SideBar Content</div>
        <div className="">SideBar Content</div>
        <div className="">SideBar Content</div>
        <div className="">SideBar Content</div>
        <div className="">SideBar Content</div>
        <div className="">SideBar Content</div>
        <div className="">SideBar Content</div>
        <div className="">SideBar Content</div>
        <div className="">SideBar Content</div>
        <div className="">SideBar Content</div>
        <div className="">SideBar Content</div>
        <div className="">SideBar Content</div>
        <div className="">SideBar Content</div>
        <div className="">SideBar Content</div>
        <div className="">SideBar Content</div>
        <div className="">SideBar Content</div>
        <div className="">SideBar Content</div>
        <div className="">SideBar Content</div>
        <div className="">SideBar Content</div>
        <div className="">SideBar Content</div>
        <div className="">SideBar Content</div>
        <div className="">SideBar Content</div>
        <div className="">SideBar Content</div>
        <div className="">SideBar Content</div>
      </div>
    </Resizable>
  );
}
