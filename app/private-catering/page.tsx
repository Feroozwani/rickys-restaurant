import PageLayout from '@/components/PageLayout'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Private Catering Dubai | Ricky's Restaurant",
  description: "Dubai's best private event catering. Wedding, birthday, yacht party and special occasion catering by Ricky's Restaurant.",
}

const items = [
  { title: 'Wedding Catering', href: '/wedding-catering-in-dubai', img: 'https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/4f70ac522dd448dc88c9f57887596a26-qpe6omzvkdpp3j974i61twuz2r5jb7jh01rcancwqg.jpg', desc: 'Make your big day unforgettable with our premium wedding catering services in Dubai.' },
  { title: 'Birthday Party Catering', href: '/birthday-party-catering-in-dubai', img: 'https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/blog-image-3-qpe6onxpr7qzf57tz0koeemfo50wiwn7c6etrxbik8.jpg', desc: 'Celebrate every birthday with delicious food and a completely hassle-free experience.' },
  { title: 'Yacht Party Catering', href: '/yacht-party-catering', img: 'https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/Yacht-Catering-qpe6omzvkdpp3j974i61twuz2r5jb7jh01rcancwqg.png', desc: 'Luxury dining on the water — the most memorable yacht parties in Dubai.' },
  { title: 'Special Occasion Catering', href: '/special-occasion-catering-in-dubai', img: 'https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/catering-2-qpe6omzvkdpp3j974i61twuz2r5jb7jh01rcancwqg.png', desc: 'Every special moment deserves extraordinary food and presentation.' },
  { title: 'Kids Party Catering', href: '/kids-party-catering-in-dubai', img: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/kidsparty.avif', desc: 'Fun, safe and delicious menus tailored perfectly for the little ones.' },
  { title: 'Get Together', href: '/get-together', img: 'https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/event-detail-img-1-qpe6omzvkdpp3j974i61twuz2r5jb7jh01rcancwqg.jpg', desc: 'Casual yet memorable social gatherings with family and friends.' },
]

const galleryImages = [
  'https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/gal-img-1-qpe6omzv5160wrcjbfctasckfzqg7a67vjlezs3bwm.jpg',
  'https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/gal-img-2-qpe6omzzqd57iunxp4gqa23r32j8oic5qhp6mynv2s.jpg',
  'https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/gal-img-3-qpe6onxpbv7b8db65xrfva411dltez9y7o8wh21xqe.jpg',
  'https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/gal-img-4-qpe6omzv5160wrcjbfctasckfzqg7a67vjlezs3bwm.jpg',
  'https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/gal-img-5-qpe6omzv5160wrcjbfctasckfzqg7a67vjlezs3bwm.jpg',
  'https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/gal-img-6-qpe6omzv5160wrcjbfctasckfzqg7a67vjlezs3bwm.jpg',
]

export default function PrivateCateringPage() {
  return (
    <PageLayout title="Private Catering" tag="Catering"
      breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Private Catering', href: '/private-catering' }]}>
      <div className="page-content">
        <div className="page-grid" style={{ marginBottom: 64 }}>
          <div>
            <h2>Organizing Private Catering in Dubai</h2>
            <p>Ricky's Restaurant is renowned as the most reliable private events catering service provider in the UAE. Our services are designed to transform your venue into a stunning experience for you and your guests.</p>
            <p>With outstanding food, creative presentation, and excellent service, our team offers a prestigious private event catering experience. Sit back, relax, and plan your guest list — we'll handle the rest.</p>
            <p>Whether you need private catering services for an intimate gathering or a large event, Ricky's Restaurant will make your occasion memorable. Creating the ultimate culinary experience with unique presentation is at the heart of our business.</p>
          </div>
          <div>
            <img src="https://rickyrestaurants.com/wp-content/uploads/2024/05/catering-3.png" alt="Private catering Dubai" loading="lazy" className="page-img" />
          </div>
        </div>

        <h3 style={{ marginBottom: 24, marginTop: 0 }}>Our Private Catering Services</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20, marginBottom: 64 }}>
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

        <h3 style={{ marginBottom: 20, marginTop: 0 }}>Professional Catering Services in Dubai</h3>
        <p>When it comes to private events catering, our experience, teamwork, and dedication set us apart. Our contemporary, full-service catering company is dedicated to providing an exceptional dining experience. You can trust that our menus will be personalized to your specific needs, ensuring excellent food and service every time.</p>

        <div className="process-steps" style={{ marginBottom: 48 }}>
          {[{ n: '01', label: 'Get in Touch' }, { n: '02', label: 'Plan Your Menu' }, { n: '03', label: 'We Prepare' }, { n: '04', label: 'You Celebrate' }].map(s => (
            <div key={s.n} className="process-step">
              <div className="process-step__num">{s.n}</div>
              <div className="process-step__label">{s.label}</div>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: 64 }}>
          <h3>Event Photo Gallery</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 8 }}>
            {galleryImages.map((img, i) => (
              <div key={i} className="gal-item" style={{ aspectRatio: '1' }}>
                <img src={img} alt={`Gallery ${i + 1}`} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>

        <Link href="/contact-us" className="btn btn--gold">Get a Free Quote</Link>
      </div>
    </PageLayout>
  )
}
