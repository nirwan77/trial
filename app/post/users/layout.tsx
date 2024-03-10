"use client";

import React from 'react';
import Footer from "@/components/Footer";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
      <section>
        {/* Include shared UI here e.g., a header or sidebar */}
        <div>{children}</div>
        <Footer />
      </section>
  );
}
