import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ScrollToTop,
  WhatsAppFloat,
  Counter,
  TestimonialSlider,
  AnimateOnScroll,
} from "@/components/ClientUtils";

const cateringItems = [
  {
    title: "Wedding Catering",
    href: "/wedding-catering-in-dubai",
    img: "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/4f70ac522dd448dc88c9f57887596a26-qpe6omzvkdpp3j974i61twuz2r5jb7jh01rcancwqg.jpg",
  },
  {
    title: "Special Occasion",
    href: "/special-occasion-catering-in-dubai",
    img: "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/catering-2-qpe6omzvkdpp3j974i61twuz2r5jb7jh01rcancwqg.png",
  },
  {
    title: "Birthday Party Catering",
    href: "/birthday-party-catering-in-dubai",
    img: "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/blog-image-3-qpe6onxpr7qzf57tz0koeemfo50wiwn7c6etrxbik8.jpg",
  },
  {
    title: "Kids Party Catering",
    href: "/kids-party-catering-in-dubai",
    img: "https://rickyrestaurants.com/wp-content/uploads/2024/05/kidsparty.avif",
  },
  {
    title: "Staff Party Catering",
    href: "/staff-catering",
    img: "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/event-detail-img-1-qpe6omzvkdpp3j974i61twuz2r5jb7jh01rcancwqg.jpg",
  },
  {
    title: "Yacht Party Catering",
    href: "/yacht-party-catering",
    img: "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/Yacht-Catering-qpe6omzvkdpp3j974i61twuz2r5jb7jh01rcancwqg.png",
  },
];

const menuItems = [
  {
    name: "Caesar Salad",
    desc: "Crisp romaine lettuce with creamy Caesar dressing, Parmesan and croutons",
    img: "https://rickyrestaurants.com/wp-content/uploads/2024/05/Caesar-Salad-768x512.jpg",
  },
  {
    name: "Hummus",
    desc: "Smooth chickpea hummus with extra virgin olive oil and warm pita bread",
    img: "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/hummus-index-6463bace4bba5-qpe6omzucix9hj3gplavpu0m1exwngbr496658vopc.jpeg",
  },
  {
    name: "Tahina",
    desc: "Rich tahini sauce with sesame paste, garlic, lemon juice and olive oil",
    img: "https://rickyrestaurants.com/wp-content/uploads/2024/05/Tahina-300x200.jpg",
  },
  {
    name: "Mutton Kofta",
    desc: "Juicy seekh kebabs seasoned with aromatic spices and grilled to perfection",
    img: "https://rickyrestaurants.com/wp-content/uploads/2024/05/muttonkofta-300x200.jpg",
  },
  {
    name: "Chicken Skewers",
    desc: "Tender marinated chicken skewers grilled to juicy perfection",
    img: "https://rickyrestaurants.com/wp-content/uploads/2024/05/hm-img-5-300x242.jpg",
  },
  {
    name: "Grilled Chicken Bone",
    desc: "Bone-in grilled chicken seasoned to perfection with savory flavor",
    img: "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/Grilled-Chicken-Thighs-Square-new-480x270-1-qpe6omzucix9hj3gplavpu0m1exwngbr496658vopc.jpeg",
  },
  {
    name: "Pasta (White or Pink)",
    desc: "Al dente pasta with creamy white or tangy pink sauce, topped with Parmesan",
    img: "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/PinkSaucePasta02-qpe6omzucix9hj3gplavpu0m1exwngbr496658vopc.jpg",
  },
  {
    name: "Seasoned Rice",
    desc: "Fluffy rice infused with aromatic herbs and spices",
    img: "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/seasoned-rice-qpe6omzt4o543tlvgprxvb396zydmn3mj7bx0bny70.jpg",
  },
];

const testimonials = [
  {
    name: "Raymond Harper",
    role: "Graphic Designer",
    avatar:
      "https://rickyrestaurants.com/wp-content/uploads/2024/05/user-img.jpg",
    text: "The food was absolutely incredible! Ricky's catering team went above and beyond for our event. Every dish was perfectly prepared and the presentation was stunning.",
  },
  {
    name: "Sarah Johnson",
    role: "Event Planner",
    avatar:
      "https://rickyrestaurants.com/wp-content/uploads/2024/05/user-img.jpg",
    text: "Ricky's catered our corporate event and the food was outstanding. Professional service, on-time delivery, and the taste was unmatched. Highly recommend for any event!",
  },
  {
    name: "Ahmed Al-Mansouri",
    role: "Business Owner",
    avatar:
      "https://rickyrestaurants.com/wp-content/uploads/2024/05/user-img.jpg",
    text: "We hired Ricky's for our wedding and they exceeded every expectation. The variety, presentation and taste were remarkable — our guests couldn't stop complimenting!",
  },
];

const galleryImages = [
  "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/gal-img-1-qpe6omzv5160wrcjbfctasckfzqg7a67vjlezs3bwm.jpg",
  "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/gal-img-2-qpe6omzzqd57iunxp4gqa23r32j8oic5qhp6mynv2s.jpg",
  "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/gal-img-3-qpe6onxpbv7b8db65xrfva411dltez9y7o8wh21xqe.jpg",
  "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/gal-img-4-qpe6omzv5160wrcjbfctasckfzqg7a67vjlezs3bwm.jpg",
  "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/gal-img-5-qpe6omzv5160wrcjbfctasckfzqg7a67vjlezs3bwm.jpg",
  "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/gal-img-6-qpe6omzv5160wrcjbfctasckfzqg7a67vjlezs3bwm.jpg",
  "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/gal-img-7-qpe6omzzqd57iunxp4gqa23r32j8oic5qhp6mynv2s.jpg",
  "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/gal-img-8-qpe6omzv5160wrcjbfctasckfzqg7a67vjlezs3bwm.jpg",
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <section
          style={{
            minHeight: "100vh",
            background:
              "radial-gradient(ellipse at 60% 50%, #1a1a1a 0%, #0d0d0d 60%, #111 100%)",
            display: "flex",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
              backgroundRepeat: "repeat",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 1,
              background:
                "linear-gradient(90deg, transparent, rgba(200,169,110,0.4), transparent)",
            }}
          />

          <div
            className="container"
            style={{
              paddingTop: 100,
              paddingBottom: 60,
              width: "100%",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: 56,
                alignItems: "center",
              }}
            >
              <style>{`@media(min-width:1024px){.hero-grid{grid-template-columns:1.1fr 0.9fr !important;}}`}</style>
              <div className="hero-grid" style={{ display: "contents" }}>
                <div style={{ animation: "slideUp 0.8s ease forwards" }}>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 12,
                      marginBottom: 20,
                      background: "rgba(200,169,110,0.08)",
                      border: "1px solid rgba(200,169,110,0.2)",
                      padding: "8px 16px",
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "#c8a96e",
                      }}
                    />
                    <span
                      style={{
                        color: "#c8a96e",
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: 4,
                        textTransform: "uppercase",
                      }}
                    >
                      Welcome to Ricky&apos;s Restaurant
                    </span>
                  </div>

                  <h1
                    className="font-heading"
                    style={{
                      fontSize: "clamp(40px,6.5vw,76px)",
                      color: "#fff",
                      lineHeight: 1.1,
                      marginBottom: 8,
                    }}
                  >
                    Eat What
                  </h1>
                  <h1
                    className="font-heading"
                    style={{
                      fontSize: "clamp(40px,6.5vw,76px)",
                      color: "#c8a96e",
                      fontStyle: "italic",
                      lineHeight: 1.1,
                      marginBottom: 12,
                    }}
                  >
                    Makes You
                  </h1>
                  <h1
                    className="font-heading"
                    style={{
                      fontSize: "clamp(40px,6.5vw,76px)",
                      color: "#fff",
                      lineHeight: 1.1,
                      marginBottom: 40,
                    }}
                  >
                    Happy
                  </h1>

                  <p
                    style={{
                      color: "#666",
                      fontSize: 16,
                      lineHeight: 1.9,
                      maxWidth: 500,
                      marginBottom: 44,
                    }}
                  >
                    Dubai&apos;s finest restaurant &amp; catering service. From
                    intimate dinners to grand weddings — we make every occasion
                    unforgettable.
                  </p>

                  <div
                    style={{
                      display: "flex",
                      gap: 16,
                      flexWrap: "wrap",
                      marginBottom: 64,
                    }}
                  >
                    <Link href="/contact-us" className="btn btn--gold">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      Make a Reservation
                    </Link>
                    <Link href="/menu" className="btn btn--outline">
                      View Menu
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </Link>
                  </div>

                  <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                    {[
                      { icon: "🏆", text: "15+ Years Experience" },
                      { icon: "👨‍🍳", text: "25+ Expert Chefs" },
                      { icon: "🍽️", text: "120+ Dishes" },
                    ].map((item) => (
                      <div
                        key={item.text}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                        }}
                      >
                        <span style={{ fontSize: 18 }}>{item.icon}</span>
                        <span
                          style={{
                            color: "#555",
                            fontSize: 12,
                            letterSpacing: 0.5,
                          }}
                        >
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: 16,
                    justifyContent: "center",
                    position: "relative",
                    animation: "slideUp 0.8s 0.2s ease both",
                  }}
                >
                  <div style={{ width: "47%", marginTop: 60 }}>
                    <div style={{ position: "relative" }}>
                      <img
                        src="https://rickyrestaurants.com/wp-content/uploads/2024/05/img-1-676x1024.jpg"
                        alt="Ricky's Restaurant food"
                        loading="eager"
                        style={{
                          width: "100%",
                          maxHeight: 500,
                          objectFit: "cover",
                          boxShadow: "0 24px 72px rgba(0,0,0,0.7)",
                          display: "block",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      width: "47%",
                      marginBottom: 60,
                      position: "relative",
                    }}
                  >
                    <img
                      src="https://rickyrestaurants.com/wp-content/uploads/2024/05/img-2-676x1024.jpg"
                      alt="Ricky's Restaurant catering"
                      loading="eager"
                      style={{
                        width: "100%",
                        maxHeight: 500,
                        objectFit: "cover",
                        boxShadow: "0 24px 72px rgba(0,0,0,0.7)",
                        display: "block",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: -12,
                        right: -12,
                        width: "100%",
                        height: "100%",
                        border: "1.5px solid rgba(200,169,110,0.4)",
                        zIndex: -1,
                      }}
                    />

                    <div
                      style={{
                        position: "absolute",
                        top: -20,
                        left: -20,
                        background: "#c8a96e",
                        padding: "14px 18px",
                        textAlign: "center",
                        boxShadow: "0 8px 24px rgba(200,169,110,0.3)",
                      }}
                    >
                      <div
                        style={{
                          color: "#fff",
                          fontSize: 24,
                          fontFamily: "'Playfair Display', serif",
                          fontWeight: 700,
                          lineHeight: 1,
                        }}
                      >
                        25%
                      </div>
                      <div
                        style={{
                          color: "rgba(255,255,255,0.8)",
                          fontSize: 9,
                          letterSpacing: 2,
                          textTransform: "uppercase",
                          marginTop: 4,
                        }}
                      >
                        Discount
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: 32,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              opacity: 0.4,
            }}
          >
            <span
              style={{
                color: "#fff",
                fontSize: 9,
                letterSpacing: 3,
                textTransform: "uppercase",
              }}
            >
              Scroll
            </span>
            <div
              style={{
                width: 1,
                height: 40,
                background: "linear-gradient(to bottom, #c8a96e, transparent)",
              }}
            />
          </div>
        </section>

        <section className="section section--dark">
          <div className="container">
            <div style={{ display: "grid", gap: 64, alignItems: "center" }}>
              <style>{`@media(min-width:1024px){.about-inner{grid-template-columns:1fr 1fr !important;}}`}</style>
              <div
                className="about-inner"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: 64,
                  alignItems: "center",
                }}
              >
                <div
                  style={{ position: "relative", display: "none" }}
                  className="lg:block-about"
                >
                  <style>{`.lg\\:block-about{display:block !important;}@media(max-width:1023px){.lg\\:block-about{display:none !important;}}`}</style>
                  <div
                    style={{
                      position: "absolute",
                      top: -20,
                      left: -20,
                      width: 80,
                      height: 80,
                      border: "1px solid rgba(200,169,110,0.3)",
                      zIndex: 0,
                    }}
                  />
                  <img
                    src="https://rickyrestaurants.com/wp-content/uploads/2024/05/img-3.jpg"
                    alt="About Ricky's Restaurant"
                    loading="lazy"
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      position: "relative",
                      zIndex: 1,
                      boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
                      borderRight: "4px solid #c8a96e",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: -28,
                      right: -28,
                      width: "55%",
                      border: "4px solid #111",
                      zIndex: 2,
                    }}
                  >
                    <img
                      src="https://rickyrestaurants.com/wp-content/uploads/2024/05/h2-sub-img-1024x720.jpg"
                      alt="Our chefs"
                      loading="lazy"
                      style={{ width: "100%", display: "block" }}
                    />
                  </div>
                </div>

                <div>
                  <div style={{ marginBottom: 32 }}>
                    <img
                      src="https://rickyrestaurants.com/wp-content/uploads/2024/05/img-3.jpg"
                      alt="About Ricky's Restaurant"
                      loading="lazy"
                      style={{
                        width: "100%",
                        maxHeight: 320,
                        objectFit: "cover",
                        borderLeft: "4px solid #c8a96e",
                        display: "block",
                      }}
                      className="about-mobile-img"
                    />
                    <style>{`.about-mobile-img{display:block;}@media(min-width:1024px){.about-mobile-img{display:none !important;}}`}</style>
                  </div>

                  <span className="section-tag">About Us</span>
                  <h2 className="section-title" style={{ marginBottom: 20 }}>
                    Eat What Makes
                    <br />
                    <span style={{ fontStyle: "italic", color: "#c8a96e" }}>
                      You Happy
                    </span>
                  </h2>
                  <div className="section-divider" />
                  <p
                    style={{
                      color: "#666",
                      lineHeight: 2,
                      marginBottom: 18,
                      fontSize: 15,
                    }}
                  >
                    Welcome to Ricky&apos;s Restaurant, where culinary
                    excellence meets unparalleled service. Situated in the
                    vibrant heart of Dubai Marina, we are renowned for exquisite
                    dining experiences that cater to both local and
                    international palates.
                  </p>
                  <p
                    style={{
                      color: "#666",
                      lineHeight: 2,
                      marginBottom: 36,
                      fontSize: 15,
                    }}
                  >
                    Our commitment to quality and passion for food is reflected
                    in every dish we serve. From rich Asian delicacies and
                    Middle Eastern specialties to classic Mediterranean fare —
                    we have something for everyone.
                  </p>

                  <div
                    style={{
                      display: "flex",
                      gap: 16,
                      flexWrap: "wrap",
                      marginBottom: 8,
                    }}
                  >
                    <Link href="/about-us" className="btn btn--gold">
                      Discover Our Story
                    </Link>
                    <Link href="/contact-us" className="btn btn--outline">
                      Contact Us
                    </Link>
                  </div>

                  <div className="stats-row">
                    <Counter target={15} label="Years Experience" />
                    <Counter target={25} label="Trained Chefs" />
                    <Counter target={120} label="Stunning Dishes" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--card">
          <div className="container">
            <div style={{ display: "grid", gap: 56, marginBottom: 56 }}>
              <style>{`@media(min-width:768px){.catering-header{grid-template-columns:1fr 1fr !important;}}`}</style>
              <div
                className="catering-header"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: 40,
                  alignItems: "center",
                }}
              >
                <div>
                  <span className="section-tag">Catering Services</span>
                  <h2 className="section-title">
                    Organising Private &amp;
                    <br />
                    Corporate Parties
                  </h2>
                </div>
                <div>
                  <p
                    style={{
                      color: "#666",
                      lineHeight: 1.9,
                      fontSize: 15,
                      marginBottom: 16,
                    }}
                  >
                    Are you planning a private party, wedding, birthday or
                    corporate event? Treat your guests with one of the finest
                    catering services in Dubai. We handle everything — from food
                    to décor.
                  </p>
                  <p style={{ color: "#555", lineHeight: 1.9, fontSize: 15 }}>
                    Any time of the day, promptly and at the highest quality, we
                    cater the best for you. Timing is as important as the food
                    itself.
                  </p>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: 20,
              }}
            >
              {cateringItems.map((item, i) => (
                <div key={item.href} style={{ animationDelay: `${i * 0.1}s` }}>
                  <Link href={item.href} className="service-card">
                    <div className="service-card__img gal-item">
                      <img src={item.img} alt={item.title} loading="lazy" />
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)",
                          pointerEvents: "none",
                        }}
                      />
                    </div>
                    <div
                      className="service-card__body"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <h3 className="service-card__title">{item.title}</h3>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#c8a96e"
                        strokeWidth="2"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: 48 }}>
              <Link href="/private-catering" className="btn btn--outline">
                View All Catering Services
              </Link>
            </div>
          </div>
        </section>

        <section className="section section--dark">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <span
                className="section-tag"
                style={{ justifyContent: "center" }}
              >
                <span
                  style={{ display: "flex", alignItems: "center", gap: 10 }}
                >
                  Catering Menu
                </span>
              </span>
              <h2 className="section-title">Grill Feast</h2>
              <div className="section-divider section-divider--center" />
              <p
                style={{
                  color: "#555",
                  maxWidth: 520,
                  margin: "20px auto 0",
                  fontSize: 15,
                  lineHeight: 1.9,
                }}
              >
                Explore our carefully curated selection of grilled dishes,
                salads, and sides — crafted with the finest ingredients.
              </p>
            </div>

            <div className="menu-grid">
              {menuItems.map((item) => (
                <div key={item.name} className="menu-item">
                  <div className="menu-item__img">
                    <img src={item.img} alt={item.name} loading="lazy" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-end",
                        gap: 8,
                        marginBottom: 8,
                      }}
                    >
                      <span className="menu-item__name">{item.name}</span>
                      <span className="menu-item__dots" />
                    </div>
                    <p className="menu-item__desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: 56 }}>
              <Link href="/menu" className="btn btn--gold">
                Explore Full Menu
              </Link>
            </div>
          </div>
        </section>

        <section style={{ position: "relative", overflow: "hidden" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "url('https://rickyrestaurants.com/wp-content/uploads/2024/05/tes-bg-1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.85)",
            }}
          />
          <div
            className="container"
            style={{ position: "relative", paddingTop: 96, paddingBottom: 96 }}
          >
            <style>{`@media(min-width:768px){.buffet-inner{grid-template-columns:1fr 1fr !important;}}`}</style>
            <div
              className="buffet-inner"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: 56,
                alignItems: "center",
              }}
            >
              <div>
                <span className="section-tag">Buffet Dinner</span>
                <h2 className="section-title" style={{ marginBottom: 28 }}>
                  Eat Healthy
                  <br />
                  <span style={{ fontStyle: "italic", color: "#c8a96e" }}>
                    Live More
                  </span>
                </h2>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                    marginBottom: 28,
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      background: "#c8a96e",
                      color: "#fff",
                      fontSize: 44,
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      padding: "16px 28px",
                      lineHeight: 1,
                      flexShrink: 0,
                      boxShadow: "0 8px 32px rgba(200,169,110,0.3)",
                    }}
                  >
                    25%
                  </div>
                  <p
                    style={{
                      color: "#ccc",
                      fontSize: 16,
                      fontWeight: 300,
                      lineHeight: 1.6,
                    }}
                  >
                    Enjoy 25% Discount on multiple menu categories. A feast for
                    every occasion.
                  </p>
                </div>
                <p
                  style={{
                    color: "#555",
                    lineHeight: 1.9,
                    marginBottom: 36,
                    fontSize: 15,
                  }}
                >
                  Our buffet spreads are designed to delight every palate.
                  Meticulously crafted by our executive chefs, each dish tells a
                  story of flavor and tradition.
                </p>
                <Link href="/contact-us" className="btn btn--outline">
                  Book a Table
                </Link>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src="https://rickyrestaurants.com/wp-content/uploads/2024/05/blob-img-2.png"
                  alt="Buffet dinner at Ricky's"
                  loading="lazy"
                  style={{ maxWidth: 380, width: "100%" }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section section--card">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <span
                className="section-tag"
                style={{ justifyContent: "center" }}
              >
                Why Choose Us
              </span>
              <h2 className="section-title">The Ricky&apos;s Difference</h2>
              <div className="section-divider section-divider--center" />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 24,
              }}
            >
              {[
                {
                  icon: "🌟",
                  title: "Premium Quality",
                  desc: "Only the finest ingredients sourced from trusted suppliers, ensuring every bite is exceptional.",
                },
                {
                  icon: "⚡",
                  title: "On-Time Service",
                  desc: "We understand timing matters. Our team ensures punctual delivery for every event.",
                },
                {
                  icon: "🎨",
                  title: "Custom Menus",
                  desc: "Every event is unique. We craft personalized menus to match your vision and dietary needs.",
                },
                {
                  icon: "👑",
                  title: "Experienced Team",
                  desc: "15+ years of catering excellence in Dubai. Trusted by thousands of satisfied clients.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="hover-card"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid #222",
                    padding: "36px 28px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: 40, marginBottom: 20 }}>
                    {item.icon}
                  </div>
                  <h3
                    style={{
                      color: "#fff",
                      fontSize: 14,
                      fontWeight: 700,
                      letterSpacing: 1.5,
                      textTransform: "uppercase",
                      marginBottom: 14,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: "#555", fontSize: 13, lineHeight: 1.8 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          style={{
            position: "relative",
            background: "#0a0a0a",
            paddingTop: 96,
            paddingBottom: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "url('https://rickyrestaurants.com/wp-content/uploads/2024/05/tes-bg-1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.04,
            }}
          />
          <div
            className="container"
            style={{
              position: "relative",
              textAlign: "center",
              paddingBottom: 80,
            }}
          >
            <span className="section-tag" style={{ justifyContent: "center" }}>
              Testimonials
            </span>
            <h2 className="section-title" style={{ marginBottom: 12 }}>
              What Our Customers Say
            </h2>
            <div className="section-divider section-divider--center" />
            <p
              style={{
                color: "#444",
                maxWidth: 480,
                margin: "20px auto 56px",
                lineHeight: 1.9,
                fontSize: 15,
              }}
            >
              Don&apos;t just take our word for it — here&apos;s what our guests
              have to say.
            </p>
            <TestimonialSlider testimonials={testimonials} />
          </div>

          <div
            className="container"
            style={{ paddingBottom: 64, position: "relative" }}
          >
            <div className="photo-gallery">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="gal-item"
                  style={{ aspectRatio: "1", overflow: "hidden" }}
                >
                  <img
                    src={img}
                    alt={`Gallery ${i + 1}`}
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
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <Link href="/menu" className="btn btn--outline">
                View Full Menu
              </Link>
            </div>
          </div>
        </section>

        <section style={{ position: "relative", overflow: "hidden" }}>
          <img
            src="https://rickyrestaurants.com/wp-content/uploads/2024/05/sub-img-1024x576.jpg"
            alt="Food delivery Dubai"
            loading="lazy"
            style={{
              width: "100%",
              height: "clamp(280px,35vw,400px)",
              objectFit: "cover",
              display: "block",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.75)",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className="container">
              <span className="section-tag">Get Delivery</span>
              <h2 className="section-title" style={{ marginBottom: 10 }}>
                On Your Desired
              </h2>
              <h2
                className="section-title"
                style={{
                  color: "#c8a96e",
                  fontStyle: "italic",
                  marginBottom: 36,
                }}
              >
                Time
              </h2>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <Link href="/menu" className="btn btn--gold">
                  Order Now
                </Link>
                <Link href="/contact-us" className="btn btn--outline">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </>
  );
}
