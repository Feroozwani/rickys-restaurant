import PageLayout from '@/components/PageLayout'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Yacht Catering Services Dubai | Ricky's Restaurant",
  description: "Luxury yacht catering services in Dubai by Ricky's Restaurant. Bespoke menus and impeccable service on the water.",
}

export default function YachtCateringPage() {
  return (
    <PageLayout title="Yacht Catering Services" tag="Catering"
      breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Private Catering', href: '/private-catering' }, { label: 'Yacht Party Catering', href: '/yacht-party-catering' }]}>
      <div className="page-content">
        <div className="page-grid">
          <div>
            <h2>Yacht Catering in Dubai</h2>
            <p>Welcome to Ricky's Restaurant Catering, where we redefine luxury catering services in Dubai. We are passionate about the culinary arts and committed to delivering the finest catering experiences, especially when it comes to yacht catering for Dubai clients.</p>
            <p>As specialists in yacht catering, we take pride in curating tailored menus that perfectly blend gourmet excellence with the vibrant flavors of the sea. Our dedication to culinary excellence is matched only by our meticulous planning.</p>
            <h3>Luxury Yacht Catering Services in Dubai</h3>
            <p>Indulge in the epitome of opulence with luxury yacht catering services in Dubai. Hosting a memorable event on the serene waters of Dubai offers an unmatched level of extravagance.</p>
            <h4>Luxury Yacht Parties</h4>
            <p>Elevate your celebrations to new heights with a luxury yacht party in Dubai. Imagine you and your guests aboard a gleaming vessel, surrounded by the mesmerizing Dubai skyline. Our yacht birthday party services promise an exclusive and intimate ambiance.</p>
            <h4>Yacht Catering Excellence</h4>
            <p>When it comes to catering for yacht parties, every detail matters. Our yacht catering company in Dubai prides itself on crafting exquisite menus that tantalize your taste buds while you cruise the azure waters.</p>
            <h4>Bespoke Menus</h4>
            <p>Our yacht catering services go beyond standard fare. We offer a wide array of menu options, all designed to complement your yacht experience perfectly.</p>
            <h4>Impeccable Service</h4>
            <p>At the heart of our yacht catering services is a commitment to excellence. We ensure that every aspect of your yacht charter is seamless, from planning the event to managing supplies and organizing the waitstaff.</p>
            <Link href="/contact-us" className="btn btn--gold" style={{ marginTop: 16, display: 'inline-flex' }}>Contact Us</Link>
          </div>
          <div>
            <img src="https://rickyrestaurants.com/wp-content/uploads/2024/05/Yacht-Catering.png" alt="Yacht Catering Dubai" loading="lazy" className="page-img" />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
