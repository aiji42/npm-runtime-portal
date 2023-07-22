import { Header } from "@/components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 w-full">
        <Header />
      </div>
      {children}
    </div>
  );
}
