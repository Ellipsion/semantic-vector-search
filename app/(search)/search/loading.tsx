import { FC } from "react";

const Loading: FC = () => {
  return (
    <ul className="py-4 divide-y divide-zinc-100 bg-background shadow-md rounded">
      {new Array(3).fill(null).map((_, idx) => (
        <li key={idx} className="mx-auto py-4 px-8 flex space-x-4">
          <div className="relative flex items-center bg-accent rounded-lg h-24 w-24 md:h-40 md:w-40 animate-pulse"></div>
          <div className="w-full flex-1 space-y-2 py-1">
            <div className="bg-accent w-1/2 mb-2 md:mb-10 h-4 rounded animate-pulse"></div>
            <div className="bg-accent w-full h-3 rounded animate-pulse"></div>
            <div className="bg-accent w-full h-3 rounded animate-pulse"></div>
            <div className="bg-accent w-full hidden md:block h-3 rounded animate-pulse"></div>

            <div className="bg-accent mt-3 md:mt-6 w-1/4 h-4 rounded animate-pulse"></div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Loading;
