import { Footer, Header, ThemeProviderComponent } from "@/components";
import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dev Blog: Empires and Embers",
  description: "Blog chronicling the development of Empires and Embers",
  other: {
    "theme-color": "rgb(255,255,255),rgb(24,24,27,1)",
    "color-scheme": "light dark",
    "twitter:card": "summary_large_image",
    "twitter:image":
      "https://pbs.twimg.com/profile_images/1663775518427344897/x_E7ceTt_400x400.jpg",
    "og:image":
      "https://pbs.twimg.com/profile_images/1663775518427344897/x_E7ceTt_400x400.jpg",
    "og:type": "website",
    "og:url": "https://justinturney.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProviderComponent>
          <div className="dark:bg-dark">
            {" "}
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProviderComponent>
      </body>
    </html>
  );
}
