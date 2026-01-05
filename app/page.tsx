export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-6">
      {/* Overall layout: 2/3 main content on left, 1/3 sidebar on right */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* LEFT 2/3: Slider + two main content columns + bottom ads */}
        <section className="md:col-span-2 space-y-6">
          {/* Slider */}
          <div className="h-64 bg-slate-200 rounded-md flex items-center justify-center">
            <span className="text-slate-600">
              SLIDER – Featured 5 articles
            </span>
          </div>

          {/* Two content columns under slider */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* LEFT COLUMN (under slider): High School Sports, Education, Letters, Paid Ad, Page Valley Livin, Health */}
            <div className="space-y-4">
              {/* High School Sports */}
              <div className="bg-white rounded-md border border-slate-200 p-3">
                <h2 className="text-sm font-semibold text-slate-900">
                  High School Sports
                </h2>
                <div className="h-px bg-red-600 mt-1 mb-2" />
                <div className="h-32 bg-slate-100 rounded mb-2 flex items-center justify-center text-xs text-slate-500">
                  IMAGE
                </div>
                <p className="text-sm text-slate-700">Article text placeholder.</p>
              </div>

              {/* Education */}
              <div className="bg-white rounded-md border border-slate-200 p-3">
                <h2 className="text-sm font-semibold text-slate-900">
                  Education
                </h2>
                <div className="h-px bg-red-600 mt-1 mb-2" />
                <div className="h-32 bg-slate-100 rounded mb-2 flex items-center justify-center text-xs text-slate-500">
                  IMAGE
                </div>
                <p className="text-sm text-slate-700">Article text placeholder.</p>
              </div>

              {/* Letters */}
              <div className="bg-white rounded-md border border-slate-200 p-3">
                <h2 className="text-sm font-semibold text-slate-900">
                  Letters
                </h2>
                <div className="h-px bg-red-600 mt-1 mb-2" />
                <div className="h-32 bg-slate-100 rounded mb-2 flex items-center justify-center text-xs text-slate-500">
                  IMAGE
                </div>
                <p className="text-sm text-slate-700">Article text placeholder.</p>
              </div>

              {/* Paid Ad: Page County Democratic Committee */}
              <div className="bg-white rounded-md border border-slate-200 p-3">
                <h2 className="text-sm font-semibold text-slate-900">
                  Paid for by the Page County Democratic Committee
                </h2>
                <div className="h-px bg-red-600 mt-1 mb-2" />
                <div className="h-32 bg-slate-100 rounded flex items-center justify-center text-xs text-slate-500">
                  AD IMAGE (with link)
                </div>
              </div>

              {/* Page Valley Livin (main) */}
              <div className="bg-white rounded-md border border-slate-200 p-3">
                <h2 className="text-sm font-semibold text-slate-900">
                  Page Valley Livin
                </h2>
                <div className="h-px bg-red-600 mt-1 mb-2" />
                <div className="h-32 bg-slate-100 rounded mb-2 flex items-center justify-center text-xs text-slate-500">
                  IMAGE
                </div>
                <p className="text-sm text-slate-700">Article text placeholder.</p>
              </div>

              {/* Health */}
              <div className="bg-white rounded-md border border-slate-200 p-3">
                <h2 className="text-sm font-semibold text-slate-900">
                  Health
                </h2>
                <div className="h-px bg-red-600 mt-1 mb-2" />
                <div className="h-32 bg-slate-100 rounded mb-2 flex items-center justify-center text-xs text-slate-500">
                  IMAGE
                </div>
                <p className="text-sm text-slate-700">Article text placeholder.</p>
              </div>
            </div>

            {/* RIGHT COLUMN (under slider): Public Notices, County, Ad, Luray, Stanley, Outdoors */}
            <div className="space-y-4">
              {/* Public Notices – Town of Luray */}
              <div className="bg-white rounded-md border border-slate-200 p-3">
                <h2 className="text-sm font-semibold text-slate-900">
                  Public Notices – Town of Luray
                </h2>
                <div className="h-px bg-red-600 mt-1 mb-2" />
                <div className="h-32 bg-slate-100 rounded mb-2 flex items-center justify-center text-xs text-slate-500">
                  IMAGE
                </div>
                <p className="text-sm text-slate-700">Article text placeholder.</p>
              </div>

              {/* County */}
              <div className="bg-white rounded-md border border-slate-200 p-3">
                <h2 className="text-sm font-semibold text-slate-900">
                  County
                </h2>
                <div className="h-px bg-red-600 mt-1 mb-2" />
                <div className="h-32 bg-slate-100 rounded mb-2 flex items-center justify-center text-xs text-slate-500">
                  IMAGE
                </div>
                <p className="text-sm text-slate-700">Article text placeholder.</p>
              </div>

              {/* Paid Ad */}
              <div className="bg-white rounded-md border border-slate-200 p-3">
                <h2 className="text-sm font-semibold text-slate-900">
                  Paid Ad Title
                </h2>
                <div className="h-px bg-red-600 mt-1 mb-2" />
                <div className="h-32 bg-slate-100 rounded flex items-center justify-center text-xs text-slate-500">
                  AD IMAGE (with link)
                </div>
              </div>

              {/* Luray */}
              <div className="bg-white rounded-md border border-slate-200 p-3">
                <h2 className="text-sm font-semibold text-slate-900">
                  Luray
                </h2>
                <div className="h-px bg-red-600 mt-1 mb-2" />
                <div className="h-32 bg-slate-100 rounded mb-2 flex items-center justify-center text-xs text-slate-500">
                  IMAGE
                </div>
                <p className="text-sm text-slate-700">Article text placeholder.</p>
              </div>

              {/* Stanley */}
              <div className="bg-white rounded-md border border-slate-200 p-3">
                <h2 className="text-sm font-semibold text-slate-900">
                  Stanley
                </h2>
                <div className="h-px bg-red-600 mt-1 mb-2" />
                <div className="h-32 bg-slate-100 rounded mb-2 flex items-center justify-center text-xs text-slate-500">
                  IMAGE
                </div>
                <p className="text-sm text-slate-700">Article text placeholder.</p>
              </div>

              {/* Outdoors */}
              <div className="bg-white rounded-md border border-slate-200 p-3">
                <h2 className="text-sm font-semibold text-slate-900">
                  Outdoors
                </h2>
                <div className="h-px bg-red-600 mt-1 mb-2" />
                <div className="h-32 bg-slate-100 rounded mb-2 flex items-center justify-center text-xs text-slate-500">
                  IMAGE
                </div>
                <p className="text-sm text-slate-700">Article text placeholder.</p>
              </div>
            </div>
          </div>

{/* Up to 5 ads stacked under the two content columns */}
<div className="space-y-4">
  {Array.from({ length: 5 }).map((_, i) => (
    <div
      key={i}
      className="bg-white rounded-md border border-slate-200 p-3"
    >
      <h2 className="text-xs font-semibold text-slate-900">
        Ad Slot {i + 1}
      </h2>
      <div className="h-px bg-red-600 mt-1 mb-2" />
      <div className="h-24 bg-slate-100 rounded flex items-center justify-center text-[10px] text-slate-500">
        AD IMAGE (with link)
      </div>
    </div>
  ))}
</div>

        </section>

        {/* RIGHT 1/3: Sidebar */}
        <aside className="space-y-4 mt-6 md:mt-0">
          {/* Town of Luray Presents */}
          <div className="bg-white rounded-md border border-slate-200 p-3">
            <h2 className="text-sm font-semibold text-slate-900">
              Town of Luray Presents
            </h2>
            <div className="h-px bg-red-600 mt-1 mb-2" />
            <div className="h-24 bg-slate-100 rounded mb-2 flex items-center justify-center text-xs text-slate-500">
              IMAGE (Town of Luray)
            </div>
            <p className="text-xs text-slate-700">
              Click on the ad above to learn more about the Town of Luray.
            </p>
          </div>

          {/* Today in History */}
          <div className="bg-white rounded-md border border-slate-200 p-3">
            <h2 className="text-sm font-semibold text-slate-900">
              Today in History
            </h2>
            <div className="h-px bg-red-600 mt-1 mb-2" />
            <div className="h-20 bg-slate-100 rounded mb-2 flex items-center justify-center text-xs text-slate-500">
              IMAGE
            </div>
            <p className="text-xs text-slate-700">Article text placeholder.</p>
          </div>

          {/* Ad */}
          <div className="bg-white rounded-md border border-slate-200 p-3">
            <h2 className="text-sm font-semibold text-slate-900">Ad Title</h2>
            <div className="h-px bg-red-600 mt-1 mb-2" />
            <div className="h-24 bg-slate-100 rounded flex items-center justify-center text-xs text-slate-500">
              AD IMAGE (with link)
            </div>
          </div>

          {/* Question of the Week */}
          <div className="bg-white rounded-md border border-slate-200 p-3">
            <h2 className="text-sm font-semibold text-slate-900">
              Question of the Week
            </h2>
            <div className="h-px bg-red-600 mt-1 mb-2" />
            <p className="text-xs text-slate-700 mb-3">
              Poll question placeholder.
            </p>
            <div className="space-y-1 text-xs">
              <button className="block w-full rounded border border-slate-300 px-2 py-1 text-left hover:bg-slate-50">
                Option 1
              </button>
              <button className="block w-full rounded border border-slate-300 px-2 py-1 text-left hover:bg-slate-50">
                Option 2
              </button>
              <button className="block w-full rounded border border-slate-300 px-2 py-1 text-left hover:bg-slate-50">
                Option 3
              </button>
            </div>
          </div>

          {/* Ad */}
          <div className="bg-white rounded-md border border-slate-200 p-3">
            <h2 className="text-sm font-semibold text-slate-900">Ad Title</h2>
            <div className="h-px bg-red-600 mt-1 mb-2" />
            <div className="h-24 bg-slate-100 rounded flex items-center justify-center text-xs text-slate-500">
              AD IMAGE (with link)
            </div>
          </div>

          {/* Salute To A Veteran */}
          <div className="bg-white rounded-md border border-slate-200 p-3">
            <h2 className="text-sm font-semibold text-slate-900">
              Salute To A Veteran
            </h2>
            <div className="h-px bg-red-600 mt-1 mb-2" />
            <div className="h-20 bg-slate-100 rounded mb-2 flex items-center justify-center text-xs text-slate-500">
              IMAGE
            </div>
            <p className="text-xs text-slate-700">Article text placeholder.</p>
          </div>

          {/* Ad */}
          <div className="bg-white rounded-md border border-slate-200 p-3">
            <h2 className="text-sm font-semibold text-slate-900">Ad Title</h2>
            <div className="h-px bg-red-600 mt-1 mb-2" />
            <div className="h-24 bg-slate-100 rounded flex items-center justify-center text-xs text-slate-500">
              AD IMAGE (with link)
            </div>
          </div>

          {/* Page Valley Livin (sidebar) */}
          <div className="bg-white rounded-md border border-slate-200 p-3">
            <h2 className="text-sm font-semibold text-slate-900">
              Page Valley Livin
            </h2>
            <div className="h-px bg-red-600 mt-1 mb-2" />
            <div className="h-24 bg-slate-100 rounded mb-2 flex items-center justify-center text-xs text-slate-500">
              IMAGE / VIDEO
            </div>
            <p className="text-xs text-slate-700">Description placeholder.</p>
          </div>

          {/* River Conditions */}
          <div className="bg-white rounded-md border border-slate-200 p-3">
            <h2 className="text-sm font-semibold text-slate-900">
              River Conditions
            </h2>
            <div className="h-px bg-red-600 mt-1 mb-2" />
            <div className="h-20 bg-slate-100 rounded mb-2 flex items-center justify-center text-xs text-slate-500">
              GRAPH / IMAGE
            </div>
            <p className="text-xs text-slate-700">Summary placeholder.</p>
          </div>

          {/* Pet Finder */}
          <div className="bg-white rounded-md border border-slate-200 p-3">
            <h2 className="text-sm font-semibold text-slate-900">
              Pet Finder
            </h2>
            <div className="h-px bg-red-600 mt-1 mb-2" />
            <div className="h-20 bg-slate-100 rounded mb-2 flex items-center justify-center text-xs text-slate-500">
              IMAGE / INFO
            </div>
            <p className="text-xs text-slate-700">Description placeholder.</p>
          </div>
        </aside>
      </div>
    </main>
  );
}
