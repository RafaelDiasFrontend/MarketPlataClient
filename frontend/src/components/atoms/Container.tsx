import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return <div className="bg-white dark:bg-black">{children}</div>;
}
