import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/shared/Container";
import { researchResources } from "@/lib/research";

interface ResearchResourcePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ResearchResourcePage({
  params,
}: ResearchResourcePageProps) {
  const { id } = await params;

  const resource = researchResources.find(
    (item) => item.id === id
  );

  if (!resource) {
    notFound();
  }

  return (
    <main>

      {/* =====================================================
          RESOURCE HEADER
      ===================================================== */}

      <section className="border-b border-white/10 py-20">

        <Container>

          <div className="max-w-4xl">

            {/* Breadcrumb */}

            <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500">

              <Link
                href="/research"
                className="transition hover:text-cyan-400"
              >
                Research Library
              </Link>

              <span>→</span>

              <span>{resource.category}</span>

            </div>


            {/* Category */}

            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
              {resource.category}
            </span>


            {/* Title */}

            <h1 className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl">
              {resource.title}
            </h1>


            {/* Description */}

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
              {resource.description}
            </p>


            {/* Metadata */}

            <div className="mt-8 flex flex-wrap gap-3">

              <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                {resource.type}
              </span>

              <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                {resource.level}
              </span>

              <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                {resource.format}
              </span>

              <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                {resource.id}
              </span>

            </div>

          </div>

        </Container>

      </section>


      {/* =====================================================
          RESOURCE CONTENT
      ===================================================== */}

      <section className="py-20">

        <Container>

          <div className="grid gap-10 lg:grid-cols-[1fr_360px]">

            {/* =================================================
                PREVIEW
            ================================================= */}

            <div>

              <div className="mb-6">

                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                  Preview
                </p>

                <h2 className="mt-3 text-3xl font-bold text-white">
                  Explore Before You Purchase
                </h2>

              </div>


              {/* Preview Box */}

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">

                <div className="p-8">

                  <p className="text-lg leading-8 text-slate-300">
                    {resource.preview ||
                      "A preview of this resource will be available soon."}
                  </p>


                  {/* Preview limitation */}

                  <div className="mt-8 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-5">

                    <p className="text-sm font-semibold text-amber-300">
                      Preview Only
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      This preview provides an overview of the resource.
                      The complete document and downloadable file are
                      available after purchase.
                    </p>

                  </div>

                </div>


                {/* Locked Content */}

                <div className="border-t border-white/10 bg-slate-950/50 p-8">

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-xl">
                      🔒
                    </div>

                    <div>

                      <p className="font-semibold text-white">
                        Full document protected
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        Purchase access to unlock the complete resource.
                      </p>

                    </div>

                  </div>

                </div>

              </div>


              {/* Tags */}

              <div className="mt-8">

                <p className="mb-3 text-sm font-semibold text-slate-300">
                  Topics covered
                </p>

                <div className="flex flex-wrap gap-2">

                  {resource.tags.map((tag) => (

                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-400"
                    >
                      {tag}
                    </span>

                  ))}

                </div>

              </div>

            </div>


            {/* =================================================
                PURCHASE CARD
            ================================================= */}

            <aside className="lg:sticky lg:top-28 lg:self-start">

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">

                <p className="text-sm text-slate-500">
                  Resource price
                </p>

                <div className="mt-2">

                  <span className="text-4xl font-black text-white">
                    ${resource.basePrice?.toFixed(2)}
                  </span>

                  <span className="ml-2 text-sm text-slate-500">
                    USD
                  </span>

                </div>


                <p className="mt-3 text-sm leading-6 text-slate-400">
                  One-time purchase for access to the complete
                  downloadable resource.
                </p>


                {/* Purchase */}

                <button
                  disabled
                  className="mt-7 w-full rounded-xl bg-teal-500 px-5 py-3.5 font-semibold text-white opacity-70"
                >
                  Purchase Resource
                </button>


                <p className="mt-3 text-center text-xs text-slate-500">
                  Secure payment will be enabled soon.
                </p>


                {/* Request Similar */}

                {resource.requestSimilar && (

                  <Link
                    href="/contact"
                    className="mt-5 block w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-center text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
                  >
                    Request Similar Research
                  </Link>

                )}


                {/* Details */}

                <div className="mt-7 border-t border-white/10 pt-6">

                  <p className="text-sm font-semibold text-white">
                    Resource details
                  </p>

                  <dl className="mt-4 space-y-4 text-sm">

                    <div className="flex justify-between gap-4">
                      <dt className="text-slate-500">
                        Category
                      </dt>

                      <dd className="text-right text-slate-300">
                        {resource.category}
                      </dd>
                    </div>

                    <div className="flex justify-between gap-4">
                      <dt className="text-slate-500">
                        Level
                      </dt>

                      <dd className="text-right text-slate-300">
                        {resource.level}
                      </dd>
                    </div>

                    <div className="flex justify-between gap-4">
                      <dt className="text-slate-500">
                        Type
                      </dt>

                      <dd className="text-right text-slate-300">
                        {resource.type}
                      </dd>
                    </div>

                    <div className="flex justify-between gap-4">
                      <dt className="text-slate-500">
                        Format
                      </dt>

                      <dd className="text-right text-slate-300">
                        {resource.format}
                      </dd>
                    </div>

                  </dl>

                </div>

              </div>

            </aside>

          </div>

        </Container>

      </section>


      {/* =====================================================
          BACK TO LIBRARY
      ===================================================== */}

      <section className="border-t border-white/10 py-16">

        <Container>

          <Link
            href="/research"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
          >
            ← Back to Research Library
          </Link>

        </Container>

      </section>

    </main>
  );
}