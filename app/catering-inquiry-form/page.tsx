'use client'
import { useState } from 'react'
import PageLayout from '@/components/PageLayout'

export default function CateringInquiryPage() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', eventType: '', date: '', guests: '', venue: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  return (
    <PageLayout title="Catering Inquiry" tag="Get in Touch"
      breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Catering Inquiry', href: '/catering-inquiry-form' }]}>
      <div className="page-content" style={{ maxWidth: 700 }}>
        <h2>Tell Us About Your Event</h2>
        <p>Fill in the details below and our catering team will reach out to you within 24 hours to discuss your requirements.</p>

        {submitted ? (
          <div style={{ background: 'rgba(200,169,110,0.08)', border: '1px solid rgba(200,169,110,0.3)', padding: '48px 32px', textAlign: 'center', marginTop: 32 }}>
            <div style={{ fontSize: 56, marginBottom: 20 }}>✅</div>
            <h3 style={{ color: '#fff', fontFamily: "'Playfair Display',serif", fontSize: 28, marginBottom: 12 }}>Inquiry Submitted!</h3>
            <p style={{ color: '#777', fontSize: 15, lineHeight: 1.8 }}>Thank you for reaching out. Our catering team will contact you within 24 hours to discuss your event requirements.</p>
          </div>
        ) : (
          <>
            <div className="form-grid" style={{ marginTop: 32 }}>
              <input className="form-field" placeholder="First Name *" value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} aria-label="First Name" />
              <input className="form-field" placeholder="Last Name *" value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} aria-label="Last Name" />
              <input className="form-field full" placeholder="Email Address *" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} aria-label="Email" />
              <input className="form-field" placeholder="Mobile Number *" type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} aria-label="Phone" />
              <input className="form-field" placeholder="Event Type (Wedding, Corporate...)" value={form.eventType} onChange={e => setForm({ ...form, eventType: e.target.value })} aria-label="Event Type" />
              <input className="form-field" placeholder="Expected Date" type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} aria-label="Event Date" />
              <input className="form-field full" placeholder="Number of Guests" type="number" value={form.guests} onChange={e => setForm({ ...form, guests: e.target.value })} aria-label="Guests" />
              <input className="form-field full" placeholder="Venue / Location" value={form.venue} onChange={e => setForm({ ...form, venue: e.target.value })} aria-label="Venue" />
              <textarea className="form-field full" placeholder="Additional details, dietary requirements, special requests..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} aria-label="Message" />
            </div>
            <button className="btn btn--gold" style={{ marginTop: 20 }} onClick={() => setSubmitted(true)}>Submit Inquiry</button>
          </>
        )}
      </div>
    </PageLayout>
  )
}
