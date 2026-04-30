import { SiteNav } from "@/components/portfolio/site-nav"
import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Skills } from "@/components/portfolio/skills"
import { Tools } from "@/components/portfolio/tools"
import { Works } from "@/components/portfolio/works"
import { Testimonials } from "@/components/portfolio/testimonials"
import { Contact } from "@/components/portfolio/contact"
import { SiteFooter } from "@/components/portfolio/site-footer"

export default function HomePage() {
  return (
    <div className="bg-noise relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteNav />
      <main>
        <Hero />
        <Works />
        <About />
        <Skills />
        <Tools />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
