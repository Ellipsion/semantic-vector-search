import HomepageBg from "@/components/custom/homepage-svg";
import SearchBar from "@/components/custom/searchbar";
import { FC, ReactNode, Suspense } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative h-full w-full flex flex-col items-center gap-4">
      <div className="mx-auto fixed inset-x-0 z-50 px-3 md:px-0 max-w-2xl">
        <Suspense>
          <SearchBar />
        </Suspense>
      </div>
      <div className="mx-auto mt-20 w-full max-w-2xl flex flex-col gap-y-10">
        {children}
      </div>
    </div>
  );
};

export default Layout;
