"use client"

import { VideoCameraIcon, CodeBracketIcon, CalendarIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const features = [
  {
    name: 'Real-Time Video Calls',
    description: 'Conduct seamless, high-quality video interviews for an enhanced remote hiring experience.',
    icon: VideoCameraIcon,
  },
  {
    name: 'Collaborative Live Coding',
    description: 'Evaluate candidates with a powerful real-time coding editor supporting multiple languages.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Smart Scheduling',
    description: 'Easily schedule interviews with calendar integration and automated reminders.',
    icon: CalendarIcon,
  },
 
]

export default function Features() {
  return (
    <>
      <div className="overflow-hidden bg-black py-24 sm:py-32">
       <div className="mx-auto max-w-7xl px-6 lg:px-8">
         <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600"></h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white-900 sm:text-5xl">
                Built for Better Interviews
              </p>
              <p className="mt-6 text-lg/8 text-white-600">
                Connect with candidates effortlessly, assess skills with live coding, and streamline your hiring process—all in one platform.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-white-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white-900">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            alt="Product screenshot"
            src="/meeting.png"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
      </div>
    </>   
  )
}


