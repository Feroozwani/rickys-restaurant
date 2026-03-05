import PageLayout from '@/components/PageLayout'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Birthday Party Catering Dubai | Ricky's Restaurant",
  description: "Make your birthday unforgettable with Ricky's premium catering. Custom menus and professional service throughout Dubai.",
}

export default function BirthdayPartyCateringPage() {
  return (
    <PageLayout title="Birthday Party Catering" tag="Private Catering"
      breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Private Catering', href: '/private-catering' }, { label: 'Birthday Party Catering', href: '/birthday-party-catering-in-dubai' }]}>
      <div className="page-content">
        <div className="page-grid">
          <div>
            <h2>Birthday Party Catering in Dubai</h2>
            <p>Celebrate your birthday in style with Ricky's Restaurant's premium catering service. Whether you're planning an intimate gathering or a lavish party, we create the perfect culinary experience to match your vision.</p>
            <p>From kids' birthday parties to milestone celebrations, our team designs custom menus that delight every guest. We handle everything from setup to service so you can focus on enjoying your special day.</p>
            <h3>Birthday Catering Packages Include</h3>
            <ul>
              <li>Custom themed menu design</li>
              <li>Finger food, buffet or sit-down options</li>
              <li>Themed dessert tables available</li>
              <li>Full equipment and setup provided</li>
              <li>Professional service staff</li>
              <li>Halal-certified food options</li>
            </ul>
            <p>We cater to venues across Dubai — from homes and hotel ballrooms to beach venues and rooftop parties. No venue is too big or too small.</p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 32 }}>
              <Link href="/contact-us" className="btn btn--gold">Plan My Party</Link>
              <Link href="/kids-party-catering-in-dubai" className="btn btn--outline">Kids Party Catering</Link>
            </div>
          </div>
          <div>
            <img src="https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/blog-image-3-qpe6onxpr7qzf57tz0koeemfo50wiwn7c6etrxbik8.jpg" alt="Birthday Party Catering Dubai" loading="lazy" className="page-img" />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
