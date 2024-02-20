import Footer from "@/components/Footer";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>
        <div className="h-[90vh]">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
