import { LandingHeader } from '@/components/landing/LandingHeader'
import { Hero } from '@/components/landing/Hero'
import { WhatWeSolve } from '@/components/landing/WhatWeSolve'
import { Story } from '@/components/landing/Story'
import { WeeklyBuilds } from '@/components/landing/WeeklyBuilds'
import { Services } from '@/components/landing/Services'
import { Process } from '@/components/landing/Process'
import { Audience } from '@/components/landing/Audience'
import { FAQ } from '@/components/landing/FAQ'
import { Contact } from '@/components/landing/Contact'
import { LandingFooter } from '@/components/landing/LandingFooter'

export default function Home() {
  return (
    <>
      <LandingHeader />
      <main className="flex flex-col min-h-screen">
        <Hero />
        <WhatWeSolve />
        <Story />
        <WeeklyBuilds />
        <Services />
        <Process />
        <Audience />
        <FAQ />
        <Contact />
      </main>
      <LandingFooter />
    </>
  )
}
