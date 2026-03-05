import PageLayout from '@/components/PageLayout'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Wedding Catering Dubai | Ricky's Restaurant",
  description: "Premium wedding catering services in Dubai by Ricky's Restaurant. Make your big day unforgettable.",
}

export default function WeddingCateringPage() {
  return (
    <PageLayout title="Wedding Catering Services" tag="Catering"
      breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Private Catering', href: '/private-catering' }, { label: 'Wedding Catering', href: '/wedding-catering-in-dubai' }]}>
      <div className="page-content">
        <div className="page-grid">
          <div>
            <h2>Wedding Catering in Dubai</h2>
            <p>Wedding catering services in Dubai by Ricky's Restaurant ensure your big day is unforgettable. We understand that your dream celebration demands unsurpassed service with the highest quality and meticulous attention to detail. That's why our wedding catering services leave no stone unturned.</p>
            <p>Our offerings include a wide range of elements, from interactive live cooking stations to barbecue stations, beverage bars, salad stations, cold and hot appetizers, and more. Additionally, we provide a variety of setup options tailored to the type of event you are planning.</p>
            <h3>Professional Wedding Party Catering</h3>
            <p>With Ricky's Restaurant, you'll experience the best wedding catering Dubai has to offer. Simply give us a call, and rest assured that we'll handle everything. From planning and managing to executing an unforgettable event, we provide delicious food, classy décor, and a hassle-free experience.</p>
            <p>Our wedding catering services are versatile, capable of accommodating both intimate gatherings and grand celebrations. Flexibility and the highest standard of service are among our greatest strengths.</p>
            <h4>Benefits of choosing our professional wedding catering services:</h4>
            <ul>
              <li><strong>High-Quality Food:</strong> Prepared by experienced chefs.</li>
              <li><strong>Variety:</strong> A wide selection of dishes and cuisines.</li>
              <li><strong>Serving Options:</strong> Various meal styles and service options.</li>
              <li><strong>Impressive Presentation:</strong> Beautifully presented dishes.</li>
              <li><strong>Well-Trained Staff:</strong> Professional and courteous waitstaff.</li>
              <li><strong>Meal Planning Assistance:</strong> Expert help in planning and selecting meals.</li>
            </ul>
            <p>When we say we make your wedding special, we mean that your wedding day will be remembered as the best day of your life. A wedding involves many details, and Ricky's Restaurant ensures you can focus on other aspects while we handle the biggest elements: food arrangements, theme, décor, and more.</p>
            <Link href="/contact-us" className="btn btn--gold" style={{ marginTop: 16, display: 'inline-flex' }}>Contact Us</Link>
          </div>
          <div>
            <img src="https://rickyrestaurants.com/wp-content/uploads/2024/05/catering-3.png" alt="Wedding Catering Dubai" loading="lazy" className="page-img" />
            <div style={{ background: '#1a1a1a', padding: 32, marginTop: 32 }}>
              <h3 style={{ marginTop: 0 }}>Why Choose Ricky's?</h3>
              <p>We understand that a wedding is one of the most important days of your life. Our dedicated team of professional chefs and event coordinators work tirelessly to make your vision a reality. From the first consultation to the last bite, we're with you every step of the way.</p>
              <p>Contact us today to discuss your dream wedding menu and let us create an unforgettable culinary experience for you and your guests.</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
