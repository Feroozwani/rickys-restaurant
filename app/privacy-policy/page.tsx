import PageLayout from '@/components/PageLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Privacy Policy | Ricky's Restaurant Dubai",
}

export default function PrivacyPolicyPage() {
  return (
    <PageLayout
      title="Privacy Policy"
      tag="Legal"
      breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy', href: '/privacy-policy' }]}
    >
      <div className="page-content" style={{ maxWidth: 800, margin: '0 auto' }}>
        <h2>Privacy Policy</h2>
        <p>Last updated: {new Date().getFullYear()}</p>
        <h3>Information We Collect</h3>
        <p>
          We collect information you provide directly to us, such as when you make a reservation, submit a catering inquiry, or contact us via our website. This may include your name, email address, phone number, and event details.
        </p>
        <h3>How We Use Your Information</h3>
        <p>
          We use the information we collect to process your reservations and catering inquiries, communicate with you about our services, and improve our website and offerings.
        </p>
        <h3>Data Security</h3>
        <p>
          We take reasonable measures to help protect your personal information from loss, theft, misuse and unauthorized access. However, no internet transmission is completely secure.
        </p>
        <h3>Contact Us</h3>
        <p>
          If you have any questions about this Privacy Policy, please contact us at director@rickyrestaurants.com or call +971 54 339 2616.
        </p>
      </div>
    </PageLayout>
  )
}
