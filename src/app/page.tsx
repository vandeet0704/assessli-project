// Purpose: This file is the main page of the application.

// Form Component
import { ContactForm } from "@/components/Form";

// UI components from ShadCN.
import { NavMenu } from "@/components/nav";
import { Label } from "@/components/ui/label";

// Next.js Image component
import Image from "next/image";

// Home Page
export default function Home() {
  return (
    <main>
      <div className="relative z-10">
        {/* Navigation Menu */}
        <NavMenu />
      </div>
      <div className="hidden md:flex fixed inset-y-0 right-0 -z-1 items-center justify-end">
        {/* Background Image */}
        <Image
          src="/background.svg"
          alt="bg"
          objectFit="cover"
          width={800}
          height={800}
          quality={100}
          className="z-0"
        />
      </div>
      <div className="p-12 md:p-18 lg:p-24 z-1 relative">
        <div className="flex flex-col items-start z-2">
          <Label className="text-base sm:text-xl font-light foreground-secondary z-2">still have questions?</Label>
          <Label className="text-5xl sm:text-6xl font-bold foreground-secondary z-2">Contact Us...</Label>
        </div>
        <div className="py-8 z-2 w-full">
          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </main>
  );
}