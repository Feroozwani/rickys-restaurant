'use client'

import { useState } from 'react'
import PageLayout from '@/components/PageLayout'
import Link from 'next/link'

const packages = [
  {
    id: 'feast', name: "RICKY'S GRILL FEAST", badge: 'Most Popular',
    items: [
      { name: 'Caesar Salad', desc: 'Crisp romaine lettuce tossed with creamy Caesar dressing, Parmesan cheese, and homemade croutons', img: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/Caesar-Salad-768x512.jpg' },
      { name: 'Hummus', desc: 'Smooth and savory chickpea hummus, drizzled with extra virgin olive oil, served with warm pita bread', img: 'https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/hummus-index-6463bace4bba5-qpe6omzucix9hj3gplavpu0m1exwngbr496658vopc.jpeg' },
      { name: 'Tahina', desc: 'Rich and velvety tahini sauce made with sesame paste, garlic, lemon juice, and a hint of olive oil', img: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/Tahina-300x200.jpg' },
      { name: 'Mutton Kofta (Seekh Kabab)', desc: 'Juicy mutton seekh kebabs, expertly seasoned with aromatic spices and grilled to perfection', img: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/muttonkofta-300x200.jpg' },
      { name: 'Chicken Skewers', desc: 'Tender chicken skewers marinated in a flavorful blend of spices, grilled to juicy perfection', img: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/hm-img-5-300x242.jpg' },
      { name: 'Grilled Chicken Bone', desc: 'Grilled chicken bone-in, seasoned to perfection and bursting with savory flavor', img: 'https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/Grilled-Chicken-Thighs-Square-new-480x270-1-qpe6omzucix9hj3gplavpu0m1exwngbr496658vopc.jpeg' },
      { name: 'Pasta (White or Pink)', desc: 'Al dente pasta served with your choice of creamy white sauce or tangy pink sauce, topped with freshly grated Parmesan', img: 'https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/PinkSaucePasta02-qpe6omzucix9hj3gplavpu0m1exwngbr496658vopc.jpg' },
      { name: 'Seasoned Rice', desc: 'Fluffy seasoned rice, infused with aromatic herbs and spices', img: 'https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/seasoned-rice-qpe6omzt4o543tlvgprxvb396zydmn3mj7bx0bny70.jpg' },
      { name: 'Potato Wedges', desc: 'Crispy potato wedges, seasoned to perfection and served with your choice of dipping sauce', img: 'https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/potatow-qpe6omzt4o543tlvgprxvb396zydmn3mj7bx0bny70.jpg' },
      { name: 'French Fries', desc: 'Golden French fries, perfectly crispy on the outside and fluffy on the inside', img: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/frenchfries-300x200.jpeg' },
    ]
  },
  {
    id: 'paradise', name: "RICKY'S GRILL PARADISE", badge: '',
    items: [
      { name: 'Caesar Salad', desc: 'Crisp romaine lettuce tossed with creamy Caesar dressing, Parmesan cheese, and homemade croutons', img: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/Caesar-Salad-768x512.jpg' },
      { name: 'Hummus', desc: 'Smooth and savory chickpea hummus, drizzled with extra virgin olive oil, served with warm pita bread', img: 'https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/hummus-index-6463bace4bba5-qpe6omzucix9hj3gplavpu0m1exwngbr496658vopc.jpeg' },
      { name: 'Tahina', desc: 'Rich and velvety tahini sauce made with sesame paste, garlic, lemon juice, and a hint of olive oil', img: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/Tahina-300x200.jpg' },
      { name: 'Mutton Kofta (Seekh Kabab)', desc: 'Juicy mutton seekh kebabs, expertly seasoned with aromatic spices and grilled to perfection', img: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/muttonkofta-300x200.jpg' },
      { name: 'Chicken Skewers', desc: 'Tender chicken skewers marinated in a flavorful blend of spices, grilled to juicy perfection', img: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/hm-img-5-300x242.jpg' },
      { name: 'Grilled Chicken Bone', desc: 'Grilled chicken bone-in, seasoned to perfection and bursting with savory flavor', img: 'https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/Grilled-Chicken-Thighs-Square-new-480x270-1-qpe6omzucix9hj3gplavpu0m1exwngbr496658vopc.jpeg' },
      { name: 'Pasta (White or Pink)', desc: 'Al dente pasta served with your choice of creamy white sauce or tangy pink sauce', img: 'https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/PinkSaucePasta02-qpe6omzucix9hj3gplavpu0m1exwngbr496658vopc.jpg' },
      { name: 'Seasoned Rice', desc: 'Fluffy seasoned rice, infused with aromatic herbs and spices', img: 'https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/seasoned-rice-qpe6omzt4o543tlvgprxvb396zydmn3mj7bx0bny70.jpg' },
      { name: 'Potato Wedges or French Fries', desc: 'Crispy potato wedges or golden French fries, seasoned to perfection', img: 'https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/potatow-qpe6omzt4o543tlvgprxvb396zydmn3mj7bx0bny70.jpg' },
      { name: 'Grilled Salmon and Seabass', desc: 'Grilled salmon and seabass fillets, delicately seasoned and cooked to perfection', img: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/Grilled-Salmon-and-Seabass-300x197.jpg' },
    ]
  },
  {
    id: 'extravaganza', name: "RICKY'S EXTRAVAGANZA", badge: 'Premium',
    items: [
      { name: 'Caesar Salad', desc: 'Crisp romaine lettuce with creamy Caesar dressing, Parmesan and homemade croutons', img: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/Caesar-Salad-768x512.jpg' },
      { name: 'Hummus', desc: 'Smooth chickpea hummus drizzled with extra virgin olive oil, with warm pita bread', img: 'https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/hummus-index-6463bace4bba5-qpe6omzucix9hj3gplavpu0m1exwngbr496658vopc.jpeg' },
      { name: 'Tahina', desc: 'Rich tahini sauce with sesame paste, garlic, lemon juice, and olive oil', img: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/Tahina-300x200.jpg' },
      { name: 'Mutton Kofta (Seekh Kabab)', desc: 'Juicy mutton seekh kebabs seasoned with aromatic spices and grilled to perfection', img: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/muttonkofta-300x200.jpg' },
      { name: 'Chicken Skewers', desc: 'Tender marinated chicken skewers grilled to juicy perfection', img: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/hm-img-5-300x242.jpg' },
      { name: 'Slightly Fried Calamari', desc: 'Tender calamari rings lightly fried to crispy perfection, served with zesty marinara sauce', img: 'https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/fried-calamari-recipe-snippet-qpe6omzucix9hj3gplavpu0m1exwngbr496658vopc.jpg' },
      { name: 'Grilled Tiger Prawns', desc: 'Juicy grilled tiger prawns, seasoned to perfection and served with a side of your choice', img: 'https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/Grilled-Tiger-Prawns-qpe6omzucix9hj3gplavpu0m1exwngbr496658vopc.jpg' },
      { name: 'Grilled Chicken Bone', desc: 'Grilled chicken bone-in, seasoned to perfection and bursting with savory flavor', img: 'https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/Grilled-Chicken-Thighs-Square-new-480x270-1-qpe6omzucix9hj3gplavpu0m1exwngbr496658vopc.jpeg' },
      { name: 'Pasta (White or Pink)', desc: 'Al dente pasta with your choice of creamy white sauce or tangy pink sauce', img: 'https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/PinkSaucePasta02-qpe6omzucix9hj3gplavpu0m1exwngbr496658vopc.jpg' },
      { name: 'Seasoned Rice', desc: 'Fluffy seasoned rice infused with aromatic herbs and spices', img: 'https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/seasoned-rice-qpe6omzt4o543tlvgprxvb396zydmn3mj7bx0bny70.jpg' },
      { name: 'Grilled Salmon and Seabass', desc: 'Grilled salmon and seabass fillets, delicately seasoned and cooked to perfection', img: 'https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/Grilled-Salmon-and-Seabass-qpe6omzt4o543tlvgprxvb396zydmn3mj7bx0bny70.jpg' },
      { name: 'Shrimp EGG Fried Rice', desc: 'Flavorful shrimp fried rice with succulent shrimp, fresh vegetables, and scrambled eggs', img: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/Shrimp-EGG-Fried-Rice-300x225.jpg' },
    ]
  },
  {
    id: 'international', name: "RICKY'S INTERNATIONAL", badge: 'Luxury',
    items: [
      { name: 'Caesar Salad', desc: 'Crisp romaine lettuce with creamy Caesar dressing, Parmesan and homemade croutons', img: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/Caesar-Salad-768x512.jpg' },
      { name: 'Hummus', desc: 'Smooth chickpea hummus drizzled with extra virgin olive oil, with warm pita bread', img: 'https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/hummus-index-6463bace4bba5-qpe6omzucix9hj3gplavpu0m1exwngbr496658vopc.jpeg' },
      { name: 'Tahina', desc: 'Rich tahini sauce with sesame paste, garlic, lemon juice, and olive oil', img: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/Tahina-300x200.jpg' },
      { name: 'Mutton Kofta (Seekh Kabab)', desc: 'Juicy mutton seekh kebabs seasoned with aromatic spices and grilled to perfection', img: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/muttonkofta-300x200.jpg' },
      { name: 'Chicken Skewers', desc: 'Tender marinated chicken skewers grilled to juicy perfection', img: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/hm-img-5-300x242.jpg' },
      { name: 'Slightly Fried Calamari', desc: 'Tender calamari rings lightly fried to crispy perfection, served with zesty marinara sauce', img: 'https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/fried-calamari-recipe-snippet-qpe6omzucix9hj3gplavpu0m1exwngbr496658vopc.jpg' },
      { name: 'Grilled Tiger Prawns', desc: 'Juicy grilled tiger prawns, seasoned to perfection', img: 'https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/Grilled-Tiger-Prawns-qpe6omzucix9hj3gplavpu0m1exwngbr496658vopc.jpg' },
      { name: 'Grilled Chicken Bone', desc: 'Grilled chicken bone-in, seasoned to perfection and bursting with savory flavor', img: 'https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/Grilled-Chicken-Thighs-Square-new-480x270-1-qpe6omzucix9hj3gplavpu0m1exwngbr496658vopc.jpeg' },
      { name: 'Pasta (White or Pink)', desc: 'Al dente pasta with your choice of creamy white sauce or tangy pink sauce', img: 'https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/PinkSaucePasta02-qpe6omzucix9hj3gplavpu0m1exwngbr496658vopc.jpg' },
      { name: 'Seasoned Rice', desc: 'Fluffy seasoned rice infused with aromatic herbs and spices', img: 'https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/seasoned-rice-qpe6omzt4o543tlvgprxvb396zydmn3mj7bx0bny70.jpg' },
      { name: 'Grilled Salmon and Seabass', desc: 'Grilled salmon and seabass fillets, delicately seasoned and cooked to perfection', img: 'https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/Grilled-Salmon-and-Seabass-qpe6omzt4o543tlvgprxvb396zydmn3mj7bx0bny70.jpg' },
      { name: 'Shrimp EGG Fried Rice', desc: 'Flavorful shrimp fried rice with succulent shrimp, fresh vegetables, and scrambled eggs', img: 'https://rickyrestaurants.com/wp-content/uploads/2024/05/Shrimp-EGG-Fried-Rice-300x225.jpg' },
    ]
  },
]

export default function MenuPage() {
  const [active, setActive] = useState('feast')
  const [form, setForm] = useState({ firstName: '', lastName: '', mobile: '', email: '', guests: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const pkg = packages.find(p => p.id === active)!

  return (
    <PageLayout title="Catering Menu" tag="Our Menu"
      breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Menu', href: '/menu' }]}>
      <div className="page-content">
        <p style={{ color: '#888', fontSize: 16, lineHeight: 1.9, maxWidth: 720, marginBottom: 48 }}>
          Choose from our four carefully curated catering packages — each crafted with the finest ingredients and served with impeccable presentation. All packages are fully customisable to suit your event requirements.
        </p>

        <div className="menu-tabs">
          {packages.map(p => (
            <button key={p.id} onClick={() => setActive(p.id)} className={`menu-tab${active === p.id ? ' active' : ''}`}>
              {p.name}
              {p.badge && active === p.id && <span style={{ marginLeft: 8, background: 'rgba(255,255,255,0.2)', padding: '2px 8px', fontSize: 9, letterSpacing: 1 }}>{p.badge}</span>}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40, paddingBottom: 24, borderBottom: '1px solid #222' }}>
          <div style={{ width: 4, height: 44, background: '#c8a96e', flexShrink: 0 }} />
          <div>
            <h2 style={{ margin: 0, fontSize: 'clamp(18px,3vw,28px)', fontFamily: "'Playfair Display',serif", color: '#fff' }}>{pkg.name}</h2>
            <p style={{ color: '#555', fontSize: 13, margin: '4px 0 0' }}>{pkg.items.length} Items Included</p>
          </div>
          {pkg.badge && <span style={{ marginLeft: 'auto', background: '#c8a96e', color: '#fff', padding: '4px 14px', fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', flexShrink: 0 }}>{pkg.badge}</span>}
        </div>

        <div className="menu-grid">
          {pkg.items.map(item => (
            <div key={item.name} className="menu-item">
              <div className="menu-item__img"><img src={item.img} alt={item.name} loading="lazy" /></div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, marginBottom: 6 }}>
                  <span className="menu-item__name">{item.name}</span>
                  <span className="menu-item__dots" />
                </div>
                <p className="menu-item__desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderTop: '3px solid #c8a96e', padding: '48px 40px', marginTop: 80, maxWidth: 700 }}>
          <span style={{ display: 'block', color: '#c8a96e', fontSize: 11, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', marginBottom: 12 }}>Reservation</span>
          <h2 style={{ fontFamily: "'Playfair Display',serif", color: '#fff', marginBottom: 8 }}>Book a Table</h2>
          <p style={{ color: '#666', fontSize: 14, marginBottom: 28 }}>Ready to enjoy a great meal? Make your reservation today.</p>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '32px 0' }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
              <h3 style={{ color: '#fff', fontFamily: "'Playfair Display',serif", marginBottom: 8 }}>Reservation Submitted!</h3>
              <p style={{ color: '#666', fontSize: 14 }}>We will contact you within 24 hours to confirm.</p>
            </div>
          ) : (
            <>
              <div className="form-grid">
                <input className="form-field" placeholder="First Name" value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} aria-label="First Name" />
                <input className="form-field" placeholder="Last Name" value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} aria-label="Last Name" />
                <input className="form-field full" placeholder="Mobile Number" type="tel" value={form.mobile} onChange={e => setForm({ ...form, mobile: e.target.value })} aria-label="Mobile" />
                <input className="form-field full" placeholder="Email Address" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} aria-label="Email" />
                <input className="form-field full" placeholder="Number of Guests" type="number" min="1" value={form.guests} onChange={e => setForm({ ...form, guests: e.target.value })} aria-label="Guests" />
                <textarea className="form-field full" placeholder="Comments or Special Requests" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} aria-label="Message" />
              </div>
              <button className="btn btn--gold" style={{ marginTop: 20 }} onClick={() => setSubmitted(true)}>Submit Reservation</button>
            </>
          )}
        </div>

        <div style={{ marginTop: 48, textAlign: 'center' }}>
          <p style={{ color: '#555', marginBottom: 16, fontSize: 15 }}>Interested in a full catering package for your event?</p>
          <Link href="/catering-inquiry-form" className="btn btn--outline">Submit Catering Inquiry</Link>
        </div>
      </div>
    </PageLayout>
  )
}
