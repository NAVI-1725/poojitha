// components/SeoSchema.tsx
export default function SeoSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Penumarthi Poojitha Nagavalli",
          url: "https://poojitha-nagavalli.vercel.app/",
          jobTitle: "Agricultural Research Scholar",
          affiliation: {
            "@type": "CollegeOrUniversity",
            name: "Dr. YSR Horticultural University, Andhra Pradesh",
          },
          alumniOf: [
            "Dr. YSR Horticultural University",
            "Career Point Junior College, Rajahmundry",
            "SSVN High School, Rajahmundry",
          ],
          sameAs: [
            "https://www.linkedin.com/in/poojitha-nagavalli-penumarthi-a57777240/",
            "https://www.researchgate.net/profile/Poojitha-Penumarthi",
          ],
          knowsAbout: [
            "Horticulture",
            "Climate-Resilient Agriculture",
            "Sustainable Farming",
            "Agroecology",
            "Food Processing",
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Rajahmundry",
            addressRegion: "Andhra Pradesh",
            addressCountry: "India",
          },
        }),
      }}
    />
  );
}
