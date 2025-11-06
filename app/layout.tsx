import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono} from "next/font/google";
import "./globals.css";
import LightRays from '@/components//LightRays';
import Navbar from "@/components/Navbar";

const schibsted_Grotesk = Schibsted_Grotesk({
  variable: "--font-Schibsted-Grotesk",
  subsets: ["latin"],
});

const martian_Mono = Martian_Mono({
  variable: "--font-Martian-Mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevEvent",
  description: "The hub for every dev event.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${schibsted_Grotesk.variable} ${martian_Mono.variable} min-h-screen antialiased`}
      >
        <div className="absolute inset-0 t0p-0 -z-10 overflow-hidden">
          <LightRays
            raysOrigin="top-center-offset"
            raysColor="#5daaff"
            raysSpeed={1.5}
            lightSpread={0.9}
            rayLength={1.4}
            followMouse={true}
            mouseInfluence={0.02}
            noiseAmount={0.0}
            distortion={0.01}
            className="custom-rays"
          />
        </div>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
