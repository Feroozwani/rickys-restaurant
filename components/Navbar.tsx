"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const [privateOpen, setPrivateOpen] = useState(false);
  const [corporateOpen, setCorporateOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setCateringOpen(false);
    setPrivateOpen(false);
    setCorporateOpen(false);
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
      <div className="nav-inner">
        {/* Logo */}
        <Link href="/" className="nav-logo">
          <img
            src="https://rickyrestaurants.com/wp-content/uploads/2024/05/rickylogo-1024x230.png"
            alt="Ricky's Restaurant"
            style={{ height: 40, width: "auto" }}
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="nav-links">
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

        {/* Desktop Reservation Button */}
        <Link
          href="/contact-us"
          className="btn btn--gold nav-reserve-btn"
          style={{ padding: "10px 28px", fontSize: 11 }}
        >
          Reservation
        </Link>

        {/* Hamburger — mobile only */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
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
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* ── MOBILE MENU DRAWER ───────────────────────── */}
      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>
        {/* Home */}
        <Link
          href="/"
          className={`mob-link ${isActive("/") ? "mob-link--active" : ""}`}
        >
          Home
        </Link>

        {/* About */}
        <Link
          href="/about-us"
          className={`mob-link ${isActive("/about-us") ? "mob-link--active" : ""}`}
        >
          About Us
        </Link>

        {/* Menu */}
        <Link
          href="/menu"
          className={`mob-link ${isActive("/menu") ? "mob-link--active" : ""}`}
        >
          Menu
        </Link>

        {/* Catering accordion */}
        <button
          className={`mob-link mob-accordion ${isCateringActive ? "mob-link--active" : ""}`}
          onClick={() => setCateringOpen(!cateringOpen)}
        >
          <span>Catering</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            style={{
              transform: cateringOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.25s",
              flexShrink: 0,
            }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {cateringOpen && (
          <div className="mob-submenu">
            {/* Private Catering sub-group */}
            <button
              className={`mob-sublink mob-accordion ${privateOpen ? "mob-sublink--open" : ""}`}
              onClick={() => setPrivateOpen(!privateOpen)}
            >
              <span>▸ Private Catering</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{
                  transform: privateOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s",
                }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {privateOpen &&
              [
                { l: "Wedding Catering", h: "/wedding-catering-in-dubai" },
                {
                  l: "Birthday Party Catering",
                  h: "/birthday-party-catering-in-dubai",
                },
                { l: "Yacht Party Catering", h: "/yacht-party-catering" },
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
                <Link
                  key={n.h}
                  href={n.h}
                  className={`mob-deeplink ${isActive(n.h) ? "mob-link--active" : ""}`}
                >
                  {n.l}
                </Link>
              ))}

            {/* Corporate sub-group */}
            <button
              className={`mob-sublink mob-accordion ${corporateOpen ? "mob-sublink--open" : ""}`}
              onClick={() => setCorporateOpen(!corporateOpen)}
            >
              <span>▸ Corporate Catering</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{
                  transform: corporateOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s",
                }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {corporateOpen &&
              [
                { l: "Staff Catering", h: "/staff-catering" },
                { l: "Business Party Catering", h: "/business-party-catering" },
              ].map((n) => (
                <Link
                  key={n.h}
                  href={n.h}
                  className={`mob-deeplink ${isActive(n.h) ? "mob-link--active" : ""}`}
                >
                  {n.l}
                </Link>
              ))}
          </div>
        )}

        {/* Contact */}
        <Link
          href="/contact-us"
          className={`mob-link ${isActive("/contact-us") ? "mob-link--active" : ""}`}
        >
          Contact Us
        </Link>

        {/* CTA */}
        <div style={{ padding: "16px 20px 24px" }}>
          <Link
            href="/contact-us"
            className="btn btn--gold"
            style={{
              display: "block",
              textAlign: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            Make a Reservation
          </Link>
        </div>
      </div>
    </nav>
  );
}
