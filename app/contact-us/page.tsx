"use client";

import { useState } from "react";
import PageLayout from "@/components/PageLayout";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    guests: "",
    date: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageLayout
      title="Contact Us"
      tag="Get In Touch"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Contact Us", href: "/contact-us" },
      ]}
    >
      <div className="section section--dark">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 20,
              marginBottom: 80,
            }}
          >
            {[
              {
                label: "Address",
                value:
                  "Shop No. 5, Marina Pearl View Hotel Apt., Waterfront Al Masara Street, Dubai Marina",
                icon: (
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                ),
                sub: <circle cx="12" cy="10" r="3" />,
              },
              {
                label: "Phone",
                value: "+971 54 339 2616\n+971 4 514 7066",
                icon: (
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37a2 2 0 0 1 1.99-2H6.6a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.92a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                ),
              },
              {
                label: "Email",
                value: "director@rickyrestaurants.com",
                icon: (
                  <>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </>
                ),
              },
              {
                label: "Opening Hours",
                value: "Every Day\n7:30 AM – 12:00 AM",
                icon: (
                  <>
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </>
                ),
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid #1e1e1e",
                  borderTop: "3px solid #c8a96e",
                  padding: "28px 24px",
                }}
              >
                <div
                  style={{ display: "flex", gap: 14, alignItems: "flex-start" }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      background: "rgba(200,169,110,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#c8a96e"
                      strokeWidth="1.5"
                    >
                      {item.icon}
                      {item.sub}
                    </svg>
                  </div>
                  <div>
                    <span className="info-label">{item.label}</span>
                    <div
                      className="info-value"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {item.value}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "grid", gap: 64 }}>
            <style>{`@media(min-width:768px){.contact-grid{grid-template-columns:1.1fr 0.9fr !important;}}`}</style>
            <div
              className="contact-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr", gap: 64 }}
            >
              <div>
                <span className="section-tag">Reservation</span>
                <h2 className="section-title" style={{ marginBottom: 8 }}>
                  Make a Reservation
                </h2>
                <div className="section-divider" />
                <p
                  style={{
                    color: "#555",
                    fontSize: 14,
                    lineHeight: 1.8,
                    marginBottom: 36,
                    marginTop: 16,
                  }}
                >
                  Fill out the form below and our team will get back to you
                  within 24 hours to confirm your booking.
                </p>

                {submitted ? (
                  <div
                    style={{
                      background: "rgba(200,169,110,0.08)",
                      border: "1px solid rgba(200,169,110,0.3)",
                      padding: "36px 32px",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                    <h3
                      style={{
                        color: "#fff",
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 24,
                        marginBottom: 12,
                      }}
                    >
                      Reservation Sent!
                    </h3>
                    <p style={{ color: "#777", fontSize: 14, lineHeight: 1.8 }}>
                      Thank you for your enquiry. Our team will contact you
                      within 24 hours to confirm your booking details.
                    </p>
                  </div>
                ) : (
                  <div className="form-grid">
                    <input
                      className="form-field"
                      type="text"
                      placeholder="Your Full Name *"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                    />
                    <input
                      className="form-field"
                      type="email"
                      placeholder="Email Address *"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                    />
                    <input
                      className="form-field"
                      type="tel"
                      placeholder="Phone Number *"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                    />
                    <input
                      className="form-field"
                      type="number"
                      placeholder="Number of Guests"
                      value={form.guests}
                      onChange={(e) =>
                        setForm({ ...form, guests: e.target.value })
                      }
                    />
                    <input
                      className="form-field"
                      type="date"
                      placeholder="Preferred Date"
                      value={form.date}
                      onChange={(e) =>
                        setForm({ ...form, date: e.target.value })
                      }
                    />
                    <select
                      className="form-field"
                      value={form.subject}
                      onChange={(e) =>
                        setForm({ ...form, subject: e.target.value })
                      }
                      style={{ cursor: "pointer" }}
                    >
                      <option value="" disabled>
                        Select Service
                      </option>
                      <option value="dine-in">Dine-In Reservation</option>
                      <option value="wedding">Wedding Catering</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="yacht">Yacht Party</option>
                      <option value="private">Private Catering</option>
                      <option value="other">Other</option>
                    </select>
                    <textarea
                      className="form-field full"
                      placeholder="Your Message or Special Requirements..."
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                    />
                    <div className="full">
                      <button
                        className="btn btn--gold"
                        onClick={handleSubmit}
                        style={{ width: "100%", justifyContent: "center" }}
                      >
                        Send Reservation Request
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <line x1="22" y1="2" x2="11" y2="13" />
                          <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <span className="section-tag">Find Us</span>
                <h2 className="section-title" style={{ marginBottom: 24 }}>
                  Dubai Marina
                </h2>
                <div
                  style={{
                    marginBottom: 24,
                    overflow: "hidden",
                    border: "1px solid #2a2a2a",
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.9258574707736!2d55.1337!3d25.0778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA0JzQwLjEiTiA1NcKwMDgnMDEuMyJF!5e0!3m2!1sen!2sae!4v1234567890"
                    width="100%"
                    height="300"
                    style={{
                      border: "none",
                      display: "block",
                      filter: "invert(90%) hue-rotate(180deg)",
                    }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ricky's Restaurant location"
                  />
                </div>

                <a
                  href="https://wa.me/971543392616"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    background: "rgba(37,211,102,0.08)",
                    border: "1px solid rgba(37,211,102,0.2)",
                    padding: "20px 24px",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(37,211,102,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(37,211,102,0.08)";
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      background: "#25D366",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <div
                      style={{
                        color: "#25D366",
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: 2,
                        textTransform: "uppercase",
                        marginBottom: 4,
                      }}
                    >
                      Chat on WhatsApp
                    </div>
                    <div style={{ color: "#777", fontSize: 13 }}>
                      +971 54 339 2616
                    </div>
                  </div>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#25D366"
                    strokeWidth="2"
                    style={{ marginLeft: "auto" }}
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
