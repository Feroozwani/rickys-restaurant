import PageLayout from '@/components/PageLayout'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About Us | Ricky's Restaurant Dubai",
  description: "Learn about Ricky's Restaurant — Dubai's finest dining and catering service, serving culinary excellence since 2009.",
}

export default function AboutPage() {
  return (
    <PageLayout title="About Us" tag="About Us"
      breadcrumb={[{ label: 'Home', href: '/' }, { label: 'About Us', href: '/about-us' }]}>
      <div className="page-content">
        <div className="page-grid">
          <div>
            <h2>Welcome to Ricky's Restaurant</h2>
            <p>Welcome to Ricky's Restaurant, where culinary excellence meets unparalleled service. Situated in the vibrant heart of Dubai, Ricky's Restaurant is renowned for its exquisite dining experiences, offering a diverse menu that caters to both local and international palates.</p>

            <h3>Our Culinary Philosophy</h3>
            <p>At Ricky's Restaurant, we believe that great food starts with the finest ingredients. Our chefs are dedicated to sourcing the best produce, meats, and seafood from trusted suppliers. This commitment to quality ensures that every dish is prepared with care and precision.</p>

            <h3>Diverse Menu</h3>
            <p>Our menu is a celebration of culinary diversity, offering a wide range of options to suit every taste. From rich, aromatic Asian delicacies and vibrant Middle Eastern specialties to classic Mediterranean fare and innovative international cuisine, we have something for everyone.</p>

            <h3>Exceptional Catering Services</h3>
            <p>In addition to our restaurant dining, Ricky's Restaurant is proud to offer comprehensive catering services for all occasions. Whether you're planning a corporate event, a wedding, or a private party, our catering team is here to make your event special.</p>
            <p>With tailored menus, impeccable service, and a focus on every detail, we bring the same level of excellence to our catered events as we do in our restaurant.</p>
            <Link href="/contact-us" className="btn btn--gold" style={{ marginTop: 8, display: 'inline-flex' }}>Contact Us</Link>
          </div>

          <div>
            <img src="https://rickyrestaurants.com/wp-content/uploads/2024/05/img-3.jpg" alt="Ricky's Restaurant Dubai" loading="lazy" className="page-img" />

            <h3>Our Team</h3>
            <p>Our team at Ricky's Restaurant is our greatest asset. From our talented chefs to our friendly and professional staff, everyone is dedicated to making your visit enjoyable. We take pride in our warm hospitality and strive to create a welcoming environment.</p>

            <h3>Commitment to Excellence</h3>
            <p>At Ricky's Restaurant, we are committed to maintaining the highest standards in everything we do. From the freshness of our ingredients to the elegance of our presentation and the attentiveness of our service, we aim to exceed your expectations every time you visit.</p>

            <h3>Visit Us</h3>
            <p>Join us at Ricky's Restaurant and discover why we are a favourite among Dubai's dining enthusiasts. Whether you're looking for a casual meal with friends, a romantic dinner, or a place to celebrate a special occasion — Ricky's is the perfect choice.</p>

            <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderLeft: '4px solid #c8a96e', padding: '24px', marginTop: 24 }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 12 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="2" style={{ flexShrink: 0, marginTop: 2 }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span style={{ color: '#888', fontSize: 14 }}>Shop No. 5, Marina Pearl View Hotel Apt., Waterfront Al Masara Street, Dubai Marina</span>
              </div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 8 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="2" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span style={{ color: '#888', fontSize: 14 }}>Open: <strong style={{ color: '#ccc' }}>7:30 AM – 12:00 Midnight</strong></span>
              </div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="2" style={{ flexShrink: 0 }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37a2 2 0 0 1 1.99-2H6.6a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.92a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:+971543392616" style={{ color: '#888', fontSize: 14 }}>+971 54 339 2616</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
