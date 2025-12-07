export default function SponsorsPage() {

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:mt-55 ">
            <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
                  Current sponsorships for our workshops and speakers.
            </h2>

            <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32 ">
                <div className="flex items-center justify-center">
                    <img src="https://keynote.tailwindui.com/_next/static/media/transistor.a1e38d49.svg" alt="Transistor" width="158" height="48" />
                </div>
                     <div className="flex items-center justify-center">
                    <img src="https://keynote.tailwindui.com/_next/static/media/tuple.2f54ed03.svg" alt="Transistor" width="158" height="48" />
                </div>
                     <div className="flex items-center justify-center">
                    <img src="https://keynote.tailwindui.com/_next/static/media/statickit.2e06fcea.svg" alt="Transistor" width="158" height="48" />
                </div>
                     <div className="flex items-center justify-center">
                    <img src="https://keynote.tailwindui.com/_next/static/media/mirage.e12f40ad.svg" alt="Transistor" width="158" height="48" />
                </div>
                     <div className="flex items-center justify-center">
                    <img src="https://keynote.tailwindui.com/_next/static/media/laravel.6faebf7c.svg" alt="Transistor" width="158" height="48" />
                </div>
                     <div className="flex items-center justify-center">
                    <img src="https://keynote.tailwindui.com/_next/static/media/statamic.923101b6.svg" alt="Transistor" width="158" height="48" />
                </div>
            </div>

        </div>
    )

}