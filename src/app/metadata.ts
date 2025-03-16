import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Harris Beg | Software Engineer | ML Researcher",
  description: "Software Engineer at DoorDash with experience in Kotlin, ML research, and entrepreneurship. Caltech CS graduate with projects in healthcare AI and MRI reconstruction.",
  keywords: ["Harris Beg", "Software Engineer", "Machine Learning", "DoorDash", "Caltech", "KPCB Fellow", "skinCAM", "Grabify", "MRI reconstruction"],
  authors: [{ name: "Harris Beg" }],
  creator: "Harris Beg",
  openGraph: {
    type: "website",
    title: "Harris Beg | Software Engineer | ML Researcher",
    description: "Software Engineer at DoorDash with experience in Kotlin, ML research, and entrepreneurship. Caltech CS graduate with projects in healthcare AI and MRI reconstruction.",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Harris Beg - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harris Beg | Software Engineer | ML Researcher",
    description: "Software Engineer at DoorDash with experience in Kotlin, ML research, and entrepreneurship. Caltech CS graduate with projects in healthcare AI and MRI reconstruction.",
    images: ["/images/profile.jpg"],
    creator: "@hbg",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://harrisbeg.com", // Replace with your actual domain
  },
  metadataBase: new URL("https://harrisbeg.com"), // Replace with your actual domain
};