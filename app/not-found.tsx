import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { WhatsAppFloat, ScrollToTop } from '@/components/ClientUtils'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="not-found">
        <div>
          <div className="not-found__code">404</div>
          <h1 className="not-found__title">Page Not Found</h1>
          <p className="not-found__text">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" className="btn btn--gold">Back to Home</Link>
            <Link href="/contact-us" className="btn btn--outline">Contact Us</Link>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </>
  )
}
