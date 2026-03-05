import PageLayout from '@/components/PageLayout'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Staff Catering Dubai | Ricky's Restaurant",
  description: "Professional staff catering services in Dubai. Nutritious meals for your team by Ricky's Restaurant.",
}

export default function StaffCateringPage() {
  return (
    <PageLayout title="Staff Catering" tag="Corporate Catering"
      breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Corporate Catering', href: '/corporate-catering-in-dubai' }, { label: 'Staff Catering', href: '/staff-catering' }]}>
      <div className="page-content">
        <div className="page-grid">
          <div>
            <h2>Staff Catering</h2>
            <p>Ricky's Restaurant is a leading catering company in Dubai, renowned for providing exceptional staff catering services. We understand that staff catering is crucial for maintaining employee satisfaction, and we offer a variety of menu options tailored to meet diverse dietary requirements and allergies.</p>
            <p>By providing nutritionally balanced yet delectable food, our top-notch staff catering services can enhance the well-being of your employees. This, in turn, positively impacts their productivity and the overall work environment.</p>
            <h3>Staff Catering Services in Dubai</h3>
            <p>At Ricky's Restaurant, our mission is to provide staff catering services that offer healthy food options without compromising on taste. But our commitment goes beyond just the food. We strive to deliver excellent service by meticulously managing every detail, from meal preparation to delivery and logistics.</p>
            <h3>We Take Care of Your Staff</h3>
            <p>At Ricky's Restaurant, we prioritize your company's needs. Our detail-oriented planners and chefs are dedicated to crafting a service that reflects your requirements. Passion and excellence are at the heart of our company's philosophy.</p>
            <p>We understand the importance of keeping your employees healthy and productive. Healthy employees are less likely to get sick and are at a lower risk of developing chronic diseases, which can help reduce health insurance costs for employers.</p>
            <p>Catered lunches save employees time and energy, allowing them to stay at the office rather than dining out or taking extended lunch breaks. Additionally, our staff catering services promote social interaction among employees. Providing breakfast or lunch at the office can significantly improve office culture and boost employee morale.</p>
            <Link href="/contact-us" className="btn btn--gold" style={{ marginTop: 16, display: 'inline-flex' }}>Contact Us</Link>
          </div>
          <div>
            <img src="https://rickyrestaurants.com/wp-content/uploads/2024/05/catering-2.png" alt="Staff Catering Dubai" loading="lazy" className="page-img" />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
