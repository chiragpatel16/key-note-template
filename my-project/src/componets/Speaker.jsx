import React from "react";

const speakers = [
  {
    name: "Steven McHail",
    role: "Designer at Globex Corporation",
    img: "./steven-mchail.webp",
  },
  {
    name: "Jaquelin Isch",
    role: "UX Design at InGen",
    img: "./jaquelin-isch.webp",
  },
  {
    name: "Dianne Guilianelli",
    role: "General Manager at Initech",
    img: "./dianne-guilianelli.webp",
  },
  {
    name: "Luis R.",
    role: "Product Designer",
    img: "./ronni-cantadore.webp",
  },
  {
    name: "Marcus H.",
    role: "Software Engineer",
    img: "./erhart-cockrin.webp",
  },
  {
    name: "Sara Q.",
    role: "Marketing Lead",
    img: "./parker-johnson.webp",
  },
];

export default function SpeakersPage() {
  return (
    <div className="px-8 md:px-24 py-16">
      {/* Title */}
      <h1 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
        Speakers
      </h1>

      <p className="mt-4 font-display text-2xl tracking-tight text-gray-900">
        Learn from the experts on the cutting-edge of deception at <br />
        the most sinister companies.
      </p>

      <div className="flex flex-col md:flex-row gap-10 mt-16">
        <div className="md:w-1/4 relative">
          {/* Vertical Line */}
          <div className="absolute left-[6px] top-0 bottom-0 h-[300px] w-px border-1 border-slate-300 bg-gray-300"></div>

          <ul className="pl-10 space-y-14">
            {/* Item 1 */}
            <li className="relative">
              {/* Diamond */}
              <div className="absolute left-[-38.8px] top-1 w-2.5 h-2.5 bg-blue-600 rotate-45"></div>

              <span className="text-sm text-blue-600 block mb-1 font-mono">
                Opening Day
              </span>
              <span className="text-2xl font-semibold text-blue-900 tracking-tight">
                April 4
              </span>
            </li>

            {/* Item 2 */}
            <li className="relative">
              <div className="absolute left-[-38.8px] top-1 w-2.5 h-2.5 bg-gray-400 rotate-45"></div>

              <span className="text-sm text-gray-600 block mb-1 font-mono">
                Speakers & Workshops
              </span>
              <span className="text-2xl font-semibold text-blue-900 tracking-tight">
                April 5
              </span>
            </li>

            {/* Item 3 */}
            <li className="relative">
              <div className="absolute left-[-38.8px] top-1 w-2.5 h-2.5 bg-gray-400 rotate-45"></div>

              <span className="text-sm text-gray-600 block mb-1 font-mono">
                Interviews
              </span>
              <span className="text-2xl font-semibold text-blue-900 tracking-tight">
                April 6
              </span>
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE SPEAKERS GRID with clip-design */}
        <div className="md:w-3/4 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12">
          {speakers.map((speaker, i) => (
            <div key={i} className="flex flex-col group">
              {/* Card */}
              <div className="group relative h-72 transform overflow-hidden rounded-4xl">
                {/* Border frame */}
                <div
                  className="
                    absolute top-0 right-4 bottom-6 left-0 
                    rounded-4xl border border-blue-300 
                    transition duration-300 group-hover:scale-95 
                    xl:right-6
                  "
                ></div>

                {/* Clip-path + background */}
                <div
                  className="absolute inset-0 bg-indigo-50"
                  style={{ clipPath: "url(#clip-shape)" }}
                >
                  {/* Speaker Image */}
                  <img
                    src={speaker.img}
                    alt={speaker.name}
                    className="
                      absolute inset-0 h-full w-full object-cover 
                      transition duration-300 group-hover:scale-110
                    "
                  />
                </div>
              </div>

              {/* Name & Role */}
              <h3 className="font-semibold text-lg mt-4">{speaker.name}</h3>
              <p className="text-gray-500 text-sm">{speaker.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Clip-path definition */}
      <svg width="0" height="0">
        <defs>
          <clipPath id="clip-shape" clipPathUnits="objectBoundingBox">
            <path d="M0,0 H1 V1 H0 Z" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
