import type { Metadata } from "next";

import { Consulting } from ".";

const title =
  "Zoho Consulting Services in Kenya | Zoho CRM & Automation Expert";
const description =
  "Zoho consulting services in Kenya for CRM setup, workflow automation, Zoho Creator apps, Zoho Books, Zoho One implementation, integrations, and business process optimization.";
const url = "https://isaacmaina.vercel.app/zoho-consulting";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Zoho Consultant Kenya",
    "Zoho Developer Kenya",
    "Zoho CRM Consultant",
    "Zoho One Implementation",
    "Zoho Consulting Services",
    "Zoho CRM Setup",
    "Zoho Creator Developer",
    "Zoho Automation Expert",
    "Zoho Partner Kenya",
  ],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title,
    description,
    url,
    siteName: "Isaac Maina",
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: "https://isaacmaina.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: "Zoho Consulting Services by Isaac Maina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://isaacmaina.vercel.app/logo.png"],
  },
};

export default function ZohoConsultingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Zoho Consulting Services by Isaac Maina",
            url,
            areaServed: ["Kenya", "Global"],
            email: "isaacmain72@gmail.com",
            telephone: "+254748923894",
            address: {
              "@type": "PostalAddress",
              addressCountry: "KE",
            },
            serviceType: [
              "Zoho CRM Consulting",
              "Zoho One Implementation",
              "Zoho Creator Development",
              "Workflow Automation",
              "Zoho Integrations",
            ],
          }),
        }}
      />
      <Consulting />
    </>
  );
}
