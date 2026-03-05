import Link from "next/link";

const galleryImgs = [
  "https://rickyrestaurants.com/wp-content/uploads/2024/05/foot-img-1.jpg",
  "https://rickyrestaurants.com/wp-content/uploads/2024/05/foot-img-3.jpg",
  "https://rickyrestaurants.com/wp-content/uploads/2024/05/foot-img-2.jpg",
  "https://rickyrestaurants.com/wp-content/uploads/2024/05/foot-img-4.jpg",
];

const services = [
  { l: "Yacht Party Catering In Dubai", h: "/yacht-party-catering" },
  { l: "Birthday Party Catering", h: "/birthday-party-catering-in-dubai" },
  { l: "Wedding Catering in Dubai", h: "/wedding-catering-in-dubai" },
  { l: "Business Party Catering", h: "/business-party-catering" },
  { l: "Private Catering", h: "/private-catering" },
  { l: "Kids Party Catering", h: "/kids-party-catering-in-dubai" },
];

const quickLinks = [
  { l: "Home", h: "/" },
  { l: "About Us", h: "/about-us" },
  { l: "Menu", h: "/menu" },
  { l: "Reservation", h: "/contact-us" },
  { l: "Contact Us", h: "/contact-us" },
  { l: "Privacy Policy", h: "/privacy-policy" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0a0a0a", paddingTop: 80 }}>
      <div
        style={{
          height: 2,
          background:
            "linear-gradient(90deg, transparent, #c8a96e 30%, #c8a96e 70%, transparent)",
        }}
      />
      <div className="container" style={{ paddingTop: 64 }}>
        <div className="footer-grid" style={{ paddingBottom: 64 }}>
          <div>
            <Link href="/">
              <img
                src="https://rickyrestaurants.com/wp-content/uploads/2024/05/rickylogo-1024x230.png"
                alt="Ricky's Restaurant"
                loading="lazy"
                style={{ height: 44, width: "auto", marginBottom: 22 }}
              />
            </Link>
            <p
              style={{
                color: "#444",
                fontSize: 13,
                lineHeight: 1.9,
                marginBottom: 28,
              }}
            >
              Ricky&apos;s Restaurant — one of Dubai&apos;s finest dining and
              event catering services. We serve with passion, quality and
              dedication.
            </p>
            <div style={{ display: "flex", gap: 8, marginBottom: 32 }}>
              {[
                {
                  href: "https://www.facebook.com/rickysrestaurant/",
                  label: "Facebook",
                  icon: (
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  ),
                  filled: true,
                },
                {
                  href: "https://www.linkedin.com/in/ricky-restaurant-5015661a5/",
                  label: "LinkedIn",
                  icon: (
                    <>
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </>
                  ),
                  filled: true,
                },
                {
                  href: "https://www.instagram.com/rickysrestaurantdxb/",
                  label: "Instagram",
                  icon: (
                    <>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </>
                  ),
                  filled: false,
                },
              ].map(({ href, icon, label, filled }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social"
                  aria-label={label}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill={filled ? "currentColor" : "none"}
                    stroke={filled ? "none" : "currentColor"}
                    strokeWidth="2"
                  >
                    {icon}
                  </svg>
                </a>
              ))}
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid #1e1e1e",
                borderLeft: "3px solid #c8a96e",
                padding: "14px 18px",
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#c8a96e"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <div>
                <div
                  style={{
                    color: "#444",
                    fontSize: 9,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    marginBottom: 2,
                  }}
                >
                  Opening Hours
                </div>
                <div style={{ color: "#ccc", fontSize: 13, fontWeight: 700 }}>
                  7:30 AM – 12:00 AM
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="footer-heading">Contact Us</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div
                style={{ display: "flex", gap: 14, alignItems: "flex-start" }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    background: "rgba(200,169,110,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#c8a96e"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span style={{ color: "#444", fontSize: 13, lineHeight: 1.8 }}>
                  Shop No. 5, Marina Pearl View Hotel Apt., Waterfront Al Masara
                  Street, Dubai Marina
                </span>
              </div>
              {[
                { href: "tel:+971543392616", text: "+971 54 339 2616" },
                { href: "tel:+97145147066", text: "+971 4 514 7066" },
              ].map((item) => (
                <div
                  key={item.href}
                  style={{ display: "flex", gap: 14, alignItems: "center" }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      background: "rgba(200,169,110,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#c8a96e"
                      strokeWidth="2"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37a2 2 0 0 1 1.99-2H6.6a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.92a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <a
                    href={item.href}
                    className="footer-link"
                    style={{ fontSize: 13 }}
                  >
                    {item.text}
                  </a>
                </div>
              ))}
              <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    background: "rgba(200,169,110,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#c8a96e"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <a
                  href="mailto:director@rickyrestaurants.com"
                  className="footer-link"
                  style={{ fontSize: 13 }}
                >
                  director@rickyrestaurants.com
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="footer-heading">Services</h3>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              {services.map((s) => (
                <li
                  key={s.h}
                  style={{ display: "flex", alignItems: "flex-start", gap: 12 }}
                >
                  <span className="footer-dot" style={{ marginTop: 6 }} />
                  <Link href={s.h} className="footer-link">
                    {s.l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                marginBottom: 36,
              }}
            >
              {quickLinks.map((q) => (
                <li
                  key={q.l}
                  style={{ display: "flex", alignItems: "flex-start", gap: 12 }}
                >
                  <span className="footer-dot" style={{ marginTop: 6 }} />
                  <Link href={q.h} className="footer-link">
                    {q.l}
                  </Link>
                </li>
              ))}
            </ul>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 4,
              }}
            >
              {galleryImgs.map((img, i) => (
                <div
                  key={i}
                  className="gal-item"
                  style={{ aspectRatio: "1", overflow: "hidden" }}
                >
                  <img
                    src={img}
                    alt={`Ricky's Restaurant ${i + 1}`}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid #141414",
          padding: "20px 0",
          background: "#060606",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <p style={{ color: "#2a2a2a", fontSize: 12 }}>
            © {new Date().getFullYear()} Ricky&apos;s Restaurant. All Rights
            Reserved.
          </p>
          <div style={{ display: "flex", gap: 28 }}>
            {[
              { l: "Privacy Policy", h: "/privacy-policy" },
              { l: "Terms & Conditions", h: "/contact-us" },
              { l: "Sitemap", h: "/" },
            ].map((item) => (
              <Link
                key={item.l}
                href={item.h}
                style={{ color: "#2a2a2a", fontSize: 11, letterSpacing: 0.5 }}
                className="footer-bottom-link"
              >
                {item.l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
