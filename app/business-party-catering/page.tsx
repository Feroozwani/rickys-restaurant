import PageLayout from '@/components/PageLayout'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Business Party Catering Dubai | Ricky's Restaurant",
  description: "Professional business party catering for corporate celebrations and meetings in Dubai.",
}

export default function BusinessPartyCateringPage() {
  return (
    <PageLayout title="Business Party Catering Services" tag="Corporate Catering"
      breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Corporate Catering', href: '/corporate-catering-in-dubai' }, { label: 'Business Party Catering', href: '/business-party-catering' }]}>
      <div className="page-content">
        <div className="page-grid">
          <div>
            <h2>Business Party Catering in Dubai</h2>
            <p>Corporate events and meetings reflect your work culture and professionalism, so it's crucial to trust only experienced and reliable business meeting catering service providers. No matter the requirements of your event, Ricky's Restaurant Catering can bring a touch of elegance and sophistication to your business gatherings.</p>
            <p>Boost productivity at your next business meeting with our delectable food offerings. From early morning meetings to formal lunches and corporate dinners, our diverse range of services ensures your event is both impressive and successful.</p>
            <h3>Business Party Catering</h3>
            <p>At Ricky's Restaurant, our business meeting catering team, composed of skilled chefs and meticulous event planners, is dedicated to elevating the quality of your corporate events with exquisite food and presentation.</p>
            <p>Whether you seek classic crowd-pleasers, innovative flavors, simple breakfasts, or signature dishes crafted from high-quality ingredients, we guarantee an unforgettable experience.</p>
            <p>Our experts in business meeting catering understand that precise coordination is essential for quality service. For every corporate event, we aim to exceed client expectations by providing customized services tailored to specific needs. Our commitment extends beyond serving exceptional food; we offer comprehensive catering solutions designed to enhance your event.</p>
            <Link href="/contact-us" className="btn btn--gold" style={{ marginTop: 16, display: 'inline-flex' }}>Contact Us</Link>
          </div>
          <div>
            <img src="https://rickyrestaurants.com/wp-content/uploads/2024/05/seminarcatering.avif" alt="Business Party Catering Dubai" loading="lazy" className="page-img" />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
