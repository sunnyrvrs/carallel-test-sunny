import Link from 'next/link'

export default function Home() {
  return (
    <main className="">
      <div className="py-12 sm:py-20 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Chat with a Care Advocate
            </h1>
            <p className="mt-6 text-md leading-8 text-gray-600 dark:text-gray-300">
              Our highly credentialed team of Care Advocates is available on-demand to provide <br/>
              <span className="text-custom-orange dark:text-custom-orange">
                 compassionate, personalized caregiver support.
              </span>
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/library"
                className="rounded-md bg-custom-orange px-3.5 py-2.5 text-sm font-semibold text-white dark:text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom-orange"
              >
                View Library
              </Link>
              <Link
                href="/pricing"
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300"
              >
                View Pricing <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
