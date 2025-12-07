import Bg from "/bg1.jpg";

export default function Main() {
  return (
    <section
      className="relative w-full bg-[#e8eefb] overflow-hidden"
      style={{
        backgroundImage: `url(${Bg})`,
        border: "0px solid transparent",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "left",
      }}
    >
      <div className="div-con h-[100%] w-[100%]">
        {/* HEADER */}
        <header className="relative z-50 flex-none lg:pt-11">
          <div className="flex flex-col md:flex-row items-center justify-between px-8 py-6 mx-auto max-w-7xl sm:px-6 lg:px-20 gap-6">
            {/* DATE — FIRST IN MOBILE */}
            <div className="order-1  w-full md:w-auto lg:order-2 md:order-2">
              <p className="flex flex-wrap items-center gap-2 text-blue-600 text-[15px] font-mono">
                <span>04-06</span>
                <span>of</span>
                <span>April,</span>
                <span>2002</span>
                <span>
                  <svg width="14" height="14" viewBox="0 0 20 20">
                    <rect
                      x="7"
                      y="7"
                      width="10"
                      height="10"
                      fill="#1E6BFF"
                      transform="rotate(45 10 10)"
                      rx="2"
                    />
                  </svg>
                </span>
                <span>Los</span>
                <span>Angeles,</span>
                <span>CA</span>
              </p>
            </div>

            {/* LOGO + TITLE — SECOND IN MOBILE */}
            <div className="flex items-center gap-3 order-2 md:order-1 lg:order-1">
              <svg
                className="h-12 w-auto text-slate-900"
                viewBox="0 0 48 48"
                fill="currentColor"
              >
                <path
                  fill="#3b82F6"
                  d="M1.172 21.172a4 4 0 000 5.656l20 20a4 4 0 105.656-5.656l-20-20a4 4 0 00-5.656 0z"
                />
                <path
                  fill="#93C5FD"
                  d="M26.828 6.828a4 4 0 10-5.656-5.656l-19 19A3.987 3.987 0 015 19a3.98 3.98 0 012.827 1.172L10.657 23 26.828 6.828z"
                />
              </svg>
              <p className="text-2xl font-semibold text-[#0f172a]">
                DeceptiConf
              </p>
            </div>

            {/* DESKTOP BUTTON ONLY */}
            <div className="w-full md:w-auto order-3 hidden md:block">
              <a
                href="#"
                className="w-full block text-center bg-blue-600 text-white font-semibold
                  hover:bg-blue-500 hover:shadow-lg px-6 py-4 md:px-4 md:py-3
                  rounded-2xl text-lg md:text-base"
              >
                Get your ticket
              </a>
            </div>
          </div>
        </header>

        {/* HERO CONTENT */}
        <div className="relative z-10 max-w-4xl mx-auto pt-24 pb-20 px-8">
          {/* Title */}
          <h1 className="font-display text-5xl font-bold tracking-tight text-blue-600 sm:text-7xl">
            A design conference
            <br />
            for the dark side.
          </h1>

          {/* Paragraphs */}
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900 mb-10">
            <p>
              The next generation of web users are tech-savvy and suspicious.
              They know how to use dev tools, they can detect a phishing scam
              from a mile away, and they certainly aren’t accepting any checks
              from Western Union.
            </p>

            <p>
              At DeceptiConf you’ll learn about the latest dark patterns being
              developed to trick even the smartest visitors, and you’ll learn
              how to deploy them without ever being detected.
            </p>
          </div>

          {/* MOBILE BUTTON BELOW PARAGRAPHS */}
          <div className="block md:hidden mt-6">
            <a
              href="#"
              className="w-full block text-center bg-blue-600 text-white font-semibold
                hover:bg-blue-500 hover:shadow-lg px-6 py-4 rounded-2xl text-lg"
            >
              Get your ticket
            </a>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:flex md:items-start md:gap-20 text-sm mt-10">
            <div className="mb-6 md:mb-0">
              <p className="text-blue-600 font-mono">Speakers</p>
              <p className="text-2xl font-bold text-blue-900">18</p>
            </div>

            <div className="mb-6 md:mb-0">
              <p className="text-blue-600 font-mono">People Attending</p>
              <p className="text-2xl font-bold text-blue-900">2,091</p>
            </div>

            <div className="mb-6 md:mb-0">
              <p className="text-blue-600 font-mono">Venue</p>
              <p className="text-2xl font-bold text-blue-900">Staples Center</p>
            </div>

            <div>
              <p className="text-blue-600 font-mono">Location</p>
              <p className="text-2xl font-bold text-blue-900">Los Angeles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
