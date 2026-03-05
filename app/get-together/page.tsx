import PageLayout from '@/components/PageLayout'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Get Together Catering Dubai | Ricky's Restaurant",
  description: "Casual and memorable get together catering services in Dubai. Let Ricky's Restaurant make your gathering unforgettable.",
}

export default function GetTogetherPage() {
  return (
    <PageLayout title="Get Together Catering" tag="Catering"
      breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Private Catering', href: '/private-catering' }, { label: "Get Together", href: '/get-together' }]}>
      <div className="page-content">
        <div className="page-grid">
          <div>
            <h2>Get Together Catering</h2>
            <p>Looking to elevate your next social gathering into a memorable occasion? Whether it's a casual meet-up with family or a gathering of friends, hiring the right catering professionals can make all the difference. At Ricky's Restaurant Catering, we offer top-notch services with a comprehensive approach.</p>
            <p>Our mission is to deliver a seamless experience characterized by excellence in service and delightful cuisine. Let us know your requirements, and we'll craft a plan tailored to your budget and party theme.</p>
            <h3>Get Together Catering Services</h3>
            <p>Whether it's a large gathering or an intimate affair, our attention to detail remains consistent. A get-together presents a wonderful opportunity to express gratitude to friends and family, and we excel at enhancing these moments with our exquisite menus.</p>
            <p>With a diverse selection of dishes available, you can mix and match to create a spread that delights every guest, whether it's snack box catering or a lavish feast. Our committed team of professionals ensures seamless execution and assists with all organizational aspects.</p>
            <h3>Elevate Your Get Together Party Experience!</h3>
            <p>Treat yourself and your guests to an exquisite culinary journey, where delectable flavors and captivating aromas await. Our talented chefs are masters at crafting a sensory experience that will leave everyone dazzled.</p>
            <p>The key to our success lies in using only the finest ingredients sourced sustainably from certified suppliers. Allow us to join you at your next gathering, where we'll orchestrate an unforgettable event, perfectly balancing sumptuous cuisine with unparalleled service.</p>
            <Link href="/contact-us" className="btn btn--gold" style={{ marginTop: 16, display: 'inline-flex' }}>Contact Us</Link>
          </div>
          <div>
            <img src="https://rickyrestaurants.com/wp-content/uploads/2024/05/catering-2.png" alt="Get Together Catering Dubai" loading="lazy" className="page-img" />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
