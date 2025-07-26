import type { Metadata } from "next";
import "./globals.css";
import NavMenu from "./NavMenu";

export const metadata: Metadata = {
  title: "Fun Time Tools",
  description: "A bright and fun website with small tools",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const htmlStyle: React.CSSProperties = {
    height: "100%",
  };

  const bodyStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    margin: 0,
    backgroundColor: "#000",
    color: "#fff",
  };

  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    padding: "30px 0 10px",
    backgroundColor: "#000",
    color: "#FFD700",
    fontSize: "42px",
    fontWeight: "bold",
    fontFamily: "Arial, sans-serif",
  };

  const contentStyle: React.CSSProperties = {
    flex: 1, // this pushes footer to the bottom
    paddingBottom: "20px",
  };

  const footerStyle: React.CSSProperties = {
    textAlign: "center",
    padding: "15px 0",
    fontSize: "14px",
    color: "#aaa",
    backgroundColor: "#000",
    fontFamily: "Arial, sans-serif",
    borderTop: "1px solid #444",
  };

  return (
    <html lang="en" style={htmlStyle}>
      <body style={bodyStyle}>
        {/* Website Header */}
        <div style={headerStyle}>⭐ Fun Time Tools ⭐</div>

        {/* Navigation Menu */}
        <NavMenu />

        {/* Page Content */}
        <div style={contentStyle}>{children}</div>

        {/* Sticky Footer */}
        <footer style={footerStyle}>
          © 2025 Fun Time Tools. Built with ❤️ for fun and learning.
        </footer>
      </body>
    </html>
  );
}
