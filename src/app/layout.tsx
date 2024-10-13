import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

/*{// Adding new fonts with specific weights
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",  // Assuming it covers 100 to 900
});}*/


// Adding the uploaded fonts with specific weights
const psCommonsBold = localFont({
  src: "./fonts/PS Commons Bold-normal-400-100.ttf",
  variable: "--font-ps-commons-bold",
  weight: "700",  // Bold font (weight typically 700)
});

const psCommonsMedium = localFont({
  src: "./fonts/PS Commons Medium-normal-400-100.ttf",
  variable: "--font-ps-commons-medium",
  weight: "500",  // Medium font (weight typically 500)
});

const psCommons = localFont({
  src: "./fonts/PS Commons-normal-400-100.ttf",
  variable: "--font-ps-commons",
  weight: "400",  // Normal font (weight typically 400)
});

const psDemiBold = localFont({
  src: "./fonts/PS TT Commons DemiBold-normal-400-100.ttf",
  variable: "--font-ps-demi-bold",
  weight: "600",  // DemiBold font (weight typically 600)
});

const psLight = localFont({
  src: "./fonts/PS TT Commons Light-normal-400-100.ttf",
  variable: "--font-ps-light",
  weight: "300",  // Light font (weight typically 300)
});

export const metadata: Metadata = {
  title: "Innovyasa",
  description:
    "To deliver IT services, software development, tech training, and edu-tech solutions, while offering student internships that bridge academic knowledge with practical industry experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${psCommonsBold.variable} 
          ${psCommonsMedium.variable} 
          ${psCommons.variable} 
          ${psDemiBold.variable} 
          ${psLight.variable} 
          antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
