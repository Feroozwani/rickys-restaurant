import PageLayout from '@/components/PageLayout'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Kids Party Catering Dubai | Ricky's Restaurant",
  description: "Expert kids party catering in Dubai. Fun, safe and delicious children's party food by Ricky's Restaurant.",
}

export default function KidsPartyCateringPage() {
  return (
    <PageLayout title="Kids Party Catering" tag="Catering"
      breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Private Catering', href: '/private-catering' }, { label: "Kids Party Catering", href: '/kids-party-catering-in-dubai' }]}>
      <div className="page-content">
        <div className="page-grid">
          <div>
            <h2>Kids Party Catering in Dubai</h2>
            <p>Finding a kids party catering company can be overwhelming, with a lengthy checklist and selective food choices to consider. When selecting the team to support you for such an event, you need kids party food catering partners who can offer complete catering solutions.</p>
            <p>The good news is, your search for a reliable kids party catering partner ends here with Ricky's Restaurant. We specialize in providing custom-built solutions for each party. Additionally, we offer a special kids menu that will add more excitement to your child's special day.</p>
            <h3>Expert Children's Party Food Catering Services</h3>
            <p>Ricky's Restaurant has successfully executed numerous projects, providing us with the expertise to discern between kids party catering and standard catering services. Children are among our most challenging yet cherished clients.</p>
            <p>Ricky's Restaurant has consistently supported various kids party food catering events, understanding the unique needs and potential concerns associated with children-centric gatherings.</p>
            <h3>Elevate Your Child's Party Experience!</h3>
            <p>At Ricky's Restaurant, we specialize in making every kids party unique and unforgettable. Our kids party catering service is tailored to accommodate various menu sizes, cultural preferences, party themes, and guest numbers.</p>
            <p>By efficiently addressing any potential bottlenecks, we ensure that every party is not just enjoyable but truly amazing. Our approach goes beyond simply providing delicious food and ensuring a joyful atmosphere; we also prioritize eliminating any possible mishaps to guarantee a seamless experience for both hosts and guests.</p>
            <Link href="/contact-us" className="btn btn--gold" style={{ marginTop: 16, display: 'inline-flex' }}>Contact Us</Link>
          </div>
          <div>
            <img src="https://rickyrestaurants.com/wp-content/uploads/2024/05/kidsparty.avif" alt="Kids Party Catering Dubai" loading="lazy" className="page-img" />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
