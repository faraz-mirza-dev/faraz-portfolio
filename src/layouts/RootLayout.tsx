import { Outlet } from "react-router-dom";
import ClientInit from "@/components/common/ClientInit/ClientInit";
import Footer from "@/components/common/Footer/Footer";
import Navbar from "@/components/common/Navbar/Navbar";
import RtlTransitionProvider from "@/components/providers/RtlTransitionProvider";
import ScrollToTop from "@/layouts/ScrollToTop";

export default function RootLayout() {
  return (
    <RtlTransitionProvider
      initialRtl={false}
      chrome={
        <>
          <ScrollToTop />
          <ClientInit />
          <Navbar />
        </>
      }
      main={<Outlet />}
      footer={<Footer />}
    />
  );
}
