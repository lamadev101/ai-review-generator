import SideBar from "./_components/SideBar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="grid grid-cols-12 gap-2">
      <aside className="col-span-3 fixed"><SideBar /></aside>
      <div className="col-span-9 px-6 py-4 ms-80 w-full" >{children}</div>
    </main>
  );
}
