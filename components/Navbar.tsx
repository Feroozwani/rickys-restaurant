"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const cateringRoutes = [
  "/private-catering",
  "/wedding-catering-in-dubai",
  "/birthday-party-catering-in-dubai",
  "/yacht-party-catering",
  "/special-occasion-catering-in-dubai",
  "/kids-party-catering-in-dubai",
  "/get-together",
  "/corporate-catering-in-dubai",
  "/staff-catering",
  "/business-party-catering",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cateringOpen, setCateringOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setCateringOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) => pathname === href;
  const isCateringActive = cateringRoutes.includes(pathname);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 80,
        }}
      >
        <Link href="/" style={{ flexShrink: 0 }}>
          <img
            src="https://rickyrestaurants.com/wp-content/uploads/2024/05/rickylogo-1024x230.png"
            alt="Ricky's Restaurant"
            style={{ height: 44, width: "auto" }}
          />
        </Link>
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: 36,
            listStyle: "none",
            margin: 0,
          }}
          className="hidden lg:flex"
        >
          <li>
            <Link
              href="/"
              className={`nav-link ${isActive("/") ? "nav-link--active" : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about-us"
              className={`nav-link ${isActive("/about-us") ? "nav-link--active" : ""}`}
            >
              About Us
            </Link>
          </li>
          <li className="has-dd">
            <Link
              href="/menu"
              className={`nav-link ${isActive("/menu") ? "nav-link--active" : ""}`}
              style={{ display: "flex", alignItems: "center", gap: 4 }}
            >
              Menu
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </Link>
            <div className="dd">
              <div className="dd-inner">
                <Link href="/menu">Catering Menu</Link>
              </div>
            </div>
          </li>

          <li className="has-dd">
            <span
              className={`nav-link ${isCateringActive ? "nav-link--active" : ""}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                cursor: "pointer",
              }}
            >
              Catering
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
            <div className="dd">
              <div className="dd-inner">
                <div className="has-sdd">
                  <Link
                    href="/private-catering"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    Private Catering
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </Link>
                  <div className="sdd">
                    <div className="sdd-inner">
                      {[
                        {
                          l: "Wedding Catering",
                          h: "/wedding-catering-in-dubai",
                        },
                        {
                          l: "Birthday Party Catering",
                          h: "/birthday-party-catering-in-dubai",
                        },
                        {
                          l: "Yacht Party Catering",
                          h: "/yacht-party-catering",
                        },
                        {
                          l: "Special Occasion",
                          h: "/special-occasion-catering-in-dubai",
                        },
                        {
                          l: "Kids Party Catering",
                          h: "/kids-party-catering-in-dubai",
                        },
                        { l: "Get Together", h: "/get-together" },
                      ].map((n) => (
                        <Link key={n.h} href={n.h}>
                          {n.l}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="has-sdd">
                  <Link
                    href="/corporate-catering-in-dubai"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    Corporate Catering
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </Link>
                  <div className="sdd">
                    <div className="sdd-inner">
                      {[
                        { l: "Staff Catering", h: "/staff-catering" },
                        {
                          l: "Business Party Catering",
                          h: "/business-party-catering",
                        },
                      ].map((n) => (
                        <Link key={n.h} href={n.h}>
                          {n.l}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <Link
              href="/contact-us"
              className={`nav-link ${isActive("/contact-us") ? "nav-link--active" : ""}`}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <Link
          href="/contact-us"
          className="hidden lg:block btn btn--gold"
          style={{ padding: "10px 28px", fontSize: 11 }}
        >
          Reservation
        </Link>
        <button
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            padding: 4,
          }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="lg:hidden"
        >
          {menuOpen ? (
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>
      {menuOpen && (
        <div
          style={{
            background: "#0d0d0d",
            borderTop: "1px solid #1e1e1e",
            maxHeight: "calc(100vh - 80px)",
            overflowY: "auto",
          }}
        >
          {[
            { l: "Home", h: "/" },
            { l: "About Us", h: "/about-us" },
            { l: "Menu", h: "/menu" },
          ].map((n) => (
            <Link
              key={n.h}
              href={n.h}
              style={{
                display: "block",
                padding: "15px 24px",
                color: isActive(n.h) ? "#c8a96e" : "#fff",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                borderBottom: "1px solid #1a1a1a",
                borderLeft: isActive(n.h)
                  ? "3px solid #c8a96e"
                  : "3px solid transparent",
                background: isActive(n.h)
                  ? "rgba(200,169,110,0.06)"
                  : "transparent",
              }}
            >
              {n.l}
            </Link>
          ))}

          <button
            onClick={() => setCateringOpen(!cateringOpen)}
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "15px 24px",
              background: isCateringActive
                ? "rgba(200,169,110,0.06)"
                : "transparent",
              border: "none",
              borderBottom: "1px solid #1a1a1a",
              borderLeft: isCateringActive
                ? "3px solid #c8a96e"
                : "3px solid transparent",
              color: isCateringActive ? "#c8a96e" : "#fff",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Catering
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{
                transform: cateringOpen ? "rotate(180deg)" : "none",
                transition: "transform 0.2s",
              }}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {cateringOpen && (
            <div style={{ background: "#141414" }}>
              {[
                { l: "Private Catering", h: "/private-catering" },
                { l: "Wedding Catering", h: "/wedding-catering-in-dubai" },
                { l: "Birthday Party", h: "/birthday-party-catering-in-dubai" },
                { l: "Yacht Party", h: "/yacht-party-catering" },
                {
                  l: "Special Occasion",
                  h: "/special-occasion-catering-in-dubai",
                },
                {
                  l: "Kids Party Catering",
                  h: "/kids-party-catering-in-dubai",
                },
                { l: "Get Together", h: "/get-together" },
                { l: "Corporate Catering", h: "/corporate-catering-in-dubai" },
                { l: "Staff Catering", h: "/staff-catering" },
                { l: "Business Party", h: "/business-party-catering" },
              ].map((n) => (
                <Link
                  key={n.h}
                  href={n.h}
                  style={{
                    display: "block",
                    padding: "11px 40px",
                    color: isActive(n.h) ? "#c8a96e" : "#666",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                    borderBottom: "1px solid #1a1a1a",
                    borderLeft: isActive(n.h)
                      ? "3px solid #c8a96e"
                      : "3px solid transparent",
                  }}
                >
                  {n.l}
                </Link>
              ))}
            </div>
          )}

          <Link
            href="/contact-us"
            style={{
              display: "block",
              padding: "15px 24px",
              color: isActive("/contact-us") ? "#c8a96e" : "#fff",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              borderBottom: "1px solid #1a1a1a",
              borderLeft: isActive("/contact-us")
                ? "3px solid #c8a96e"
                : "3px solid transparent",
            }}
          >
            Contact Us
          </Link>

          <div style={{ padding: "20px 24px" }}>
            <Link
              href="/contact-us"
              className="btn btn--gold"
              style={{
                display: "block",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              Make a Reservation
            </Link>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 1024px) {
          .hidden {
            display: none;
          }
          .lg\\:block {
            display: block !important;
          }
          .lg\\:flex {
            display: flex !important;
          }
        }
        @media (max-width: 1023px) {
          .lg\\:block {
            display: none;
          }
          .lg\\:flex {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}
