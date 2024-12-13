import FootNav from "./FooterNav";
import "./globals.css";
import "./layout.css";

export const metadata = {
  title: "Calgary Public Washrooms",
  description: "I like to potty!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="screen">
        {children}
        <footer>
          <FootNav options={[ 
            { name: "List View", path: "/list" },
            { name: "Map View", path: "/map" }
          ]}/>
        </footer>
      </body>
    </html>
  );
}
