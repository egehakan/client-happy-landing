import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
// import { SocialProof } from "@/components/landing/social-proof"
import { ProblemSolution } from "@/components/landing/problem-solution"
import { FeaturesBento } from "@/components/landing/features-bento"
import { HowItWorks } from "@/components/landing/how-it-works"
import { AppPreview } from "@/components/landing/app-preview"
// import { Testimonials } from "@/components/landing/testimonials"
// import { Stats } from "@/components/landing/stats"
import { FAQ } from "@/components/landing/faq"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      {/* <SocialProof /> */}
      <ProblemSolution />
      <FeaturesBento />
      <HowItWorks />
      <AppPreview />
      {/* <Testimonials /> */}
      {/* <Stats /> */}
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  )
}
