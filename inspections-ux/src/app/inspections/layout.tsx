import Header from "./components/Header";

export default function InspectionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-10 bg-black min-h-screen">
      <Header title="DOT Inspections" showHomeButton={true} />
      {children}
    </div>
  );
}
