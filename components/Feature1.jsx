/* This example requires Tailwind CSS v2.0+ */
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  MailIcon,
  ScaleIcon
} from '@heroicons/react/outline'

const transferFeatures = [
  {
    id: 1,
    name: 'Over 60+ techniques',
    description:
      'Videos are TikTok-sized in topics like having impact in meetings, being more visible in your organisation and networking (gulp). New drops of topics and techniques over time.',
    icon: GlobeAltIcon
  },
  {
    id: 2,
    name: 'Community of introverts',
    description:
      'Having impact as an introvert in a world that desires the extrovert ideal is hard. TQAs community provides a safe place for introverts to share and practice. Peers provide support and partners keep you accountable. You are not alone; together, we are stronger. ',
    icon: ScaleIcon
  },
  {
    id: 3,
    name: 'Coaching 1:1 or in groups',
    description:
      'Sometimes we need a little help. Coaching sessions are available 1:1 or in groups at additional cost when you need it.',
    icon: LightningBoltIcon
  }
]
const communicationFeatures = [
  {
    id: 1,
    name: 'Mobile notifications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: AnnotationIcon
  },
  {
    id: 2,
    name: 'Reminder emails',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: MailIcon
  }
]

export default function Feature() {
  return (
    <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="relative">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          How it works
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
          We offer introverts practical, actionable techniques that are easy to apply. 
          </p>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Transfer funds world-wide
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              minima sequi recusandae, porro maiores officia assumenda aliquam
              laborum ab aliquid veritatis impedit odit adipisci optio iste
              blanditiis facere. Totam, velit.
            </p>

            <dl className="mt-10 space-y-10">
              {transferFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {item.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <img
              className="relative mx-auto"
              width={490}
              src="https://tailwindui.com/img/features/feature-example-1.png"
              alt=""
            />
          </div>
        </div>

      </div>
    </div>
  )
}