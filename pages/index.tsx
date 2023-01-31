import Flow from "@/components/flow";
import { ReactFlowProvider } from "reactflow";
import SideBarContent from "@/components/sidebar-content";
import SideBarProps from "@/components/sidebar-props";
import TopBar from "@/components/topbar";

export default function Home() {
  return (
    <div>
      <ReactFlowProvider>
        <div className="flex flex-col h-full">
          <div className="flex-none">
            <TopBar />
          </div>
          <div className="flex-1 min-h-0 flex flex-row">
            <SideBarContent />
            <Flow />
            <SideBarProps />
          </div>
        </div>
      </ReactFlowProvider>
    </div>
  );
}
