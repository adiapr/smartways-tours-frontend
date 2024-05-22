import dynamic from "next/dynamic";
import InvoiceComponent from "@/components/invoice/Invoice";

export const metadata = {
  title: "Invoice | Smartway adalah travel agen profesional yang berdiri sejak 2016 dibawah naungan PT. Bagus Bahagia Bersama (BBB Group).",
  description: "GoTrip - Travel & Tour React NextJS Template",
};

const Invoice = () => {
  return (
    <>
      <InvoiceComponent />
    </>
  );
};

export default dynamic(() => Promise.resolve(Invoice), { ssr: false });
