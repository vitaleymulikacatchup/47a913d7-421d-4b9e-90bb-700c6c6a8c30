"use client"
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import SplitAboutMetric from '@/components/sections/about/SplitAboutMetric';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Sparkles, Users, Award, Globe, Star, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="small"
      sizing="large"
      background="gradientBars"
      cardStyle="glass-depth"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Luxe Hotels"
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Book Now",
            href: "booking"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Luxe Hotels"
          description="Experience unparalleled elegance and comfort in our world-class accommodations"
          buttons={[
            { text: "Book Your Stay", href: "booking" },
            { text: "Explore Rooms", href: "rooms" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763843163740-o1gz3n7i.jpg"
          imageAlt="Luxury hotel lobby with modern architecture"
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAboutMetric
          title="Welcome to Luxury Hospitality"
          description={[
            "Since 1998, Luxe Hotels has been the premier destination for discerning travelers seeking exceptional hospitality. Our commitment to excellence spans 50 properties across five continents, each offering unique experiences crafted for our valued guests."
          ]}
          metrics={[
            { label: "Properties Worldwide", value: "50+" },
            { label: "Years of Excellence", value: "25+" }
          ]}
          showBorder={false}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardTwo
          title="Our Room Collections"
          description="Choose from our curated selection of premium accommodations designed for your comfort"
          tag="Featured Rooms"
          tagIcon={Sparkles}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "1",
              brand: "Standard Room",
              name: "Comfort Retreat",
              price: "$199/night",
              rating: 4,
              reviewCount: "2.3k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763843166594-xsisfxv8.jpg",
              imageAlt: "Comfortable standard hotel room with contemporary design"
            },
            {
              id: "2",
              brand: "Deluxe Room",
              name: "Premium Comfort",
              price: "$349/night",
              rating: 5,
              reviewCount: "5.8k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763843164533-dbxfl1ox.jpg",
              imageAlt: "Luxury deluxe hotel room with king bed"
            },
            {
              id: "3",
              brand: "Presidential Suite",
              name: "Ultimate Luxury",
              price: "$799/night",
              rating: 5,
              reviewCount: "3.2k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763843165831-lxsfaqmo.jpg",
              imageAlt: "Premium hotel suite with living area"
            }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardSeven
          title="World-Class Amenities"
          description="Discover our premium facilities designed to enhance your stay"
          tag="Facilities"
          textboxLayout="default"
          animationType="blur-reveal"
          features={[
            {
              id: 1,
              title: "Infinity Pool & Spa",
              description: "Relax in our rooftop infinity pool overlooking the city skyline, followed by rejuvenating spa treatments",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763843167528-ipo77r98.jpg",
              imageAlt: "Luxury hotel swimming pool with city views"
            },
            {
              id: 2,
              title: "Wellness Center",
              description: "State-of-the-art fitness facilities and wellness programs to maintain your healthy lifestyle",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763843168244-ge61nof6.jpg",
              imageAlt: "Hotel spa and wellness center"
            },
            {
              id: 3,
              title: "Fine Dining",
              description: "Experience culinary excellence at our Michelin-star restaurants with international and local cuisine",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763843168979-cjqnvfrh.jpg",
              imageAlt: "Hotel fine dining restaurant interior"
            },
            {
              id: 4,
              title: "Fitness Center",
              description: "Complete fitness facilities including personal training, yoga classes, and modern equipment",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763843169841-fqns1n4l.jpg",
              imageAlt: "Luxury hotel fitness center"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="By The Numbers"
          description="See why guests choose Luxe Hotels for their travels"
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="scale-rotate"
          metrics={[
            {
              id: "1",
              icon: Users,
              title: "Happy Guests",
              value: "500k+"
            },
            {
              id: "2",
              icon: Award,
              title: "Awards Won",
              value: "45+"
            },
            {
              id: "3",
              icon: Globe,
              title: "Destinations",
              value: "25"
            },
            {
              id: "4",
              icon: Star,
              title: "Avg Rating",
              value: "4.8/5"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="Guest Experiences"
          description="Hear what our valued guests have to say about their stays with us"
          tag="Reviews"
          textboxLayout="default"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Business Traveler",
              company: "Global Tech Corp",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763843171097-gns5mm1f.jpg",
              imageAlt: "Sarah Johnson business traveler"
            },
            {
              id: "2",
              name: "Maria Garcia",
              role: "Luxury Traveler",
              company: "Private Events",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763843171873-b5nt823o.jpg",
              imageAlt: "Maria Garcia satisfied guest"
            },
            {
              id: "3",
              name: "James Chen",
              role: "Hotel Reviewer",
              company: "Travel Magazine",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763843172530-7njdhmg7.jpg",
              imageAlt: "James Chen travel reviewer"
            },
            {
              id: "4",
              name: "Elena Rodriguez",
              role: "Wedding Planner",
              company: "Events Unlimited",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763843173193-7rdsr4w7.jpg",
              imageAlt: "Elena Rodriguez event organizer"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about your stay at Luxe Hotels"
          tag="Help"
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What is your cancellation policy?",
              content: "We offer free cancellation up to 48 hours before your check-in date. Cancellations within 48 hours are subject to one night's charge. Some special rate bookings may have different terms."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide complimentary airport shuttle service for all guests. Advance notice of 24 hours is required. Simply contact our concierge team upon booking."
            },
            {
              id: "3",
              title: "Are pets allowed in your hotel?",
              content: "We welcome well-behaved pets in select rooms for an additional fee of $50 per night. Please notify us during booking. Service animals stay free of charge."
            },
            {
              id: "4",
              title: "What amenities are included in my stay?",
              content: "All rooms include complimentary Wi-Fi, fitness center access, room service, and access to our main lobby lounge. Premium rooms include spa credits and dining vouchers."
            },
            {
              id: "5",
              title: "Do you offer group bookings?",
              content: "Absolutely. We offer special group rates and dedicated event planning for parties of 10 or more. Contact our group sales team at groups@luxehotels.com for details."
            },
            {
              id: "6",
              title: "What check-in and check-out times do you have?",
              content: "Standard check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out are available subject to availability and may incur additional fees."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get In Touch"
          description="Have questions or special requests? Our concierge team is here to help. Contact us anytime."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us how we can help...",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Luxe Hotels"
          columns={[
            {
              title: "Explore",
              items: [
                { label: "Rooms", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Gallery", href: "gallery" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Careers", href: "careers" },
                { label: "Blog", href: "blog" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact", href: "contact" },
                { label: "FAQ", href: "faq" },
                { label: "Booking Help", href: "booking-help" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "privacy" },
                { label: "Terms & Conditions", href: "terms" },
                { label: "Accessibility", href: "accessibility" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Facebook,
              href: "https://facebook.com/luxehotels",
              ariaLabel: "Follow us on Facebook"
            },
            {
              icon: Instagram,
              href: "https://instagram.com/luxehotels",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/luxehotels",
              ariaLabel: "Follow us on Twitter"
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com/company/luxehotels",
              ariaLabel: "Connect with us on LinkedIn"
            }
          ]}
          copyrightText="© Luxe Hotels, Inc. 2025. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}