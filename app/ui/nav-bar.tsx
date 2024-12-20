'use client'

import {
  CloseButton,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { PiFlowerLotus } from 'react-icons/pi'

const assessments = [
  { name: 'Perceived Stress Scale', description: 'Stress', href: '/assessments/pss', acronym: 'PSS' },
  { name: 'Warwick-Edinburgh Mental Well-being Scale', description: 'Mental Wellbeing', href: '/assessments/wemwbs', acronym: 'WEMWBS' },
  { name: 'Generalized Anxiety Disorder-7', description: 'Anxiety', href: '/assessments/gad-7', acronym: 'GAD-7' },
  { name: 'Patient Health Questionnaire-9', description: 'Depression', href: '/assessments/phq-9', acronym: 'PHQ-9' },
]

export default function NavBar() {
  return (
    <header className="bg-zinc-900 text-zinc-200">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="text-xl font-semibold flex justify-between">
            <div className="inline-flex gap-x-2 items-end">
            <PiFlowerLotus className="hover:text-zinc-400" size={32}/>
            <p>Check In</p>
            </div>
          </Link>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold hover:underline hover:underline-offset-4">
              Assessments
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-zinc-900 shadow-lg transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {assessments.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg">
                      <p className='font-semibold'>{item.acronym}</p>
                    </div>
                    <div className="flex-auto">
                      <CloseButton as={Link} href={item.href} className="block font-semibold hover:text-zinc-400">
                        {item.name}
                        <span className="absolute inset-0" />
                      </CloseButton>
                      <p className="mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Link href="/analytics" className="text-sm/6 font-semibold hover:underline hover:underline-offset-4">
            Analytics
          </Link>
          <Link href="/about" className="text-sm/6 font-semibold hover:underline hover:underline-offset-4">
            About
          </Link>
        </PopoverGroup>
      </nav>
    </header>
  )
}
