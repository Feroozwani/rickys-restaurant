import Navbar from "./Navbar";
import Footer from "./Footer";
import { ScrollToTop, WhatsAppFloat } from "./ClientUtils";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  tag?: string;
  breadcrumb?: { label: string; href: string }[];
}

export default function PageLayout({
  children,
  title,
  tag,
  breadcrumb,
}: PageLayoutProps) {
  return (
    <>
      <Navbar />
      <main>
        <div className="page-hero">
          {tag && <span className="page-hero__tag">{tag}</span>}
          <h1 className="page-hero__title">{title}</h1>
          {breadcrumb && (
            <p className="page-hero__breadcrumb">
              {breadcrumb.map((item, i) => (
                <span key={item.href}>
                  {i > 0 && <span>/</span>}
                  {i === breadcrumb.length - 1 ? (
                    <span style={{ color: "#666" }}>{item.label}</span>
                  ) : (
                    <a href={item.href}>{item.label}</a>
                  )}
                </span>
              ))}
            </p>
          )}
        </div>
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </>
  );
}
