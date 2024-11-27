
import { Navbar } from "./_components/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="h-[50px] fixed inset-x-0 top-0 w-full z-50 bg-transparent">
        <Navbar />
      </div>
      <main className="pt-[50px] h-full ">{children}</main>
    </div>
  );
};

export default DashboardLayout;