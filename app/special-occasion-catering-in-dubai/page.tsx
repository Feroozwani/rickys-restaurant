import PageLayout from '@/components/PageLayout'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Special Occasion Catering Dubai | Ricky's Restaurant",
  description: "Premium special occasion catering in Dubai. Anniversaries, graduations, and milestone celebrations.",
}

export default function SpecialOccasionPage() {
  return (
    <PageLayout title="Special Occasion Catering" tag="Catering"
      breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Private Catering', href: '/private-catering' }, { label: 'Special Occasion', href: '/special-occasion-catering-in-dubai' }]}>
      <div className="page-content">
        <div className="page-grid">
          <div>
            <h2>Special Occasion Catering</h2>
            <p>We know you have been looking for a committed special occasion catering company for your special day. Having special event catering professionals is like a cherry on top, ensuring your big day is adorned with delicious food. One of the leading providers of such exceptional service is Ricky's Restaurant Catering.</p>
            <h3>Special Occasion Catering Services in Dubai</h3>
            <p>Ricky's Restaurant Catering is a high-end, Dubai-based special occasion catering company that combines elegance and quality for the ultimate guest experience. We offer culinary services of the highest caliber to bring your ideas to life.</p>
            <p>Providing clients with delectable menus to suit every taste is the hallmark of our catering services. Using the finest ingredients, our chefs craft exquisite flavor combinations for you.</p>
            <h3>We Make Your Event Special</h3>
            <p>While organizing an event may seem effortless, it is a tedious job that requires days of planning, organizing, shopping, managing, and executing. When it comes to handling the most important element of the event — the food — Ricky's Restaurant takes charge.</p>
            <h3>Explore Our Culinary Offerings</h3>
            <p>Our clients often rave about our exceptional food and flawless catering execution. Here's a glimpse of the diverse cuisines we provide:</p>
            <ul>
              <li>Asian</li>
              <li>Middle Eastern / Arabic</li>
              <li>International</li>
              <li>Mediterranean</li>
              <li>Continental</li>
            </ul>
            <Link href="/contact-us" className="btn btn--gold" style={{ marginTop: 24, display: 'inline-flex' }}>Contact Us</Link>
          </div>
          <div>
            <img src="https://rickyrestaurants.com/wp-content/uploads/2024/05/1524212633950-1024x682.jpg" alt="Special Occasion Catering" loading="lazy" className="page-img" />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
