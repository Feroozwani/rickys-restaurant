import PageLayout from '@/components/PageLayout'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Corporate Catering Dubai | Ricky's Restaurant",
  description: "Professional corporate catering in Dubai for business events, staff parties, meetings and conferences.",
}

const items = [
  { title: 'Staff Catering', href: '/staff-catering', img: 'https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/event-detail-img-1-qpe6omzvkdpp3j974i61twuz2r5jb7jh01rcancwqg.jpg', desc: 'Nutritious, tasty meals for your team delivered on time, every time.' },
  { title: 'Business Party Catering', href: '/business-party-catering', img: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/seminarcatering.avif', desc: 'Impress clients and colleagues with premium corporate event catering.' },
]

export default function CorporateCateringPage() {
  return (
    <PageLayout title="Corporate Catering in Dubai" tag="Corporate Catering"
      breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Corporate Catering', href: '/corporate-catering-in-dubai' }]}>
      <div className="page-content">
        <p style={{ color: '#888', fontSize: 16, lineHeight: 1.9, maxWidth: 700, marginBottom: 48 }}>
          Ricky's Restaurant provides professional corporate catering solutions in Dubai. We understand that corporate events reflect your company's values and culture, which is why we deliver nothing but the best.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
          {items.map(item => (
            <Link key={item.href} href={item.href} className="service-card">
              <div className="service-card__img gal-item">
                <img src={item.img} alt={item.title} loading="lazy" />
              </div>
              <div className="service-card__body">
                <h3 className="service-card__title">{item.title}</h3>
                <p className="service-card__desc">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}
