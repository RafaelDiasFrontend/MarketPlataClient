import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <Container>{children}</Container>;
}
