import Link from "next/link";
import Container from "@/components/shared/Container";
import {
  researchCategories,
  researchResources,
} from "@/lib/research";

function categorySlug(category: string) {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export default function ResearchPage() {
  return (
    <main>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="border-b border-white/10 py-24">

        <Container>

          <div className="max-w-4xl">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              InvincibleTech Research
            </p>

            <h1 className="mt-5 text-5xl font-black tracking-tight md:text-7xl">
              Research.
              <span className="block bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Knowledge.
              </span>
              <span className="block">
                Digital Resources.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
              Explore academic research, analytical resources, datasets,
              programming materials, research methods, templates and
              knowledge resources across multiple disciplines.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="#catalogue"
                className="rounded-xl bg-teal-500 px-6 py-3 font-semibold text-white transition hover:bg-teal-400"
              >
                Explore Research
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-slate-200 transition hover:bg-white/10"
              >
                Request Research
              </Link>

            </div>

          </div>

        </Container>

      </section>


      {/* =====================================================
          CATEGORIES
      ===================================================== */}

      <section className="py-20">

        <Container>

          <div className="mb-10">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Explore
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">
              Research Categories
            </h2>

          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {researchCategories.map((category) => (

              <Link
                key={category}
                href={`#${categorySlug(category)}`}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-300 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10 hover:text-white"
              >
                {category}
              </Link>

            ))}

          </div>

        </Container>

      </section>


      {/* =====================================================
          CATALOGUE
      ===================================================== */}

      <section
        id="catalogue"
        className="border-t border-white/10 py-20"
      >

        <Container>

          <div className="mb-12">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Research Library
            </p>

            <h2 className="mt-3 text-4xl font-bold text-white">
              Featured Research Resources
            </h2>

            <p className="mt-4 max-w-2xl text-slate-400">
              Browse selected research and academic resources from the
              InvincibleTech knowledge library.
            </p>

          </div>


          {/* Resource Grid */}

          <div className="grid gap-6 md:grid-cols-2">

            {researchResources.map((resource) => (

              <article
                key={resource.id}
                id={categorySlug(resource.category)}
                className="group rounded-3xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.07]"
              >

                {/* Header */}

                <div className="flex items-start justify-between gap-4">

                  <div>

                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                      {resource.category}
                    </span>

                    <h3 className="mt-5 text-xl font-bold leading-8 text-white">
                      {resource.title}
                    </h3>

                  </div>

                  <span className="shrink-0 rounded-lg bg-white/10 px-2 py-1 text-xs text-slate-400">
                    {resource.format}
                  </span>

                </div>


                {/* Metadata */}

                <div className="mt-4 flex flex-wrap gap-2">

                  <span className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-400">
                    {resource.level}
                  </span>

                  <span className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-400">
                    {resource.type}
                  </span>

                </div>


                {/* Description */}

                <p className="mt-5 text-sm leading-7 text-slate-400">
                  {resource.description}
                </p>


                {/* Tags */}

                <div className="mt-5 flex flex-wrap gap-2">

                  {resource.tags.slice(0, 4).map((tag) => (

                    <span
                      key={tag}
                      className="rounded-full border border-white/5 bg-slate-900/70 px-3 py-1 text-xs text-slate-400"
                    >
                      {tag}
                    </span>

                  ))}

                </div>


                {/* Bottom */}

                <div className="mt-7 flex flex-col gap-5 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">

                  {/* Price */}

                  <div>

                    <p className="text-xs text-slate-500">
                      Starting price
                    </p>

                    <p className="mt-1 font-semibold text-white">
                      ${resource.basePrice?.toFixed(2)} USD
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {resource.access}
                    </p>

                  </div>


                  {/* Actions */}

                  <div className="flex flex-wrap gap-3">

                    <Link
                      href={`/research/${resource.id}`}
                      className="inline-flex items-center rounded-xl bg-teal-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-400"
                    >
                      View Resource
                      <span className="ml-2 transition group-hover:translate-x-1">
                        →
                      </span>
                    </Link>

                    {resource.requestSimilar && (

                      <Link
                        href="/contact"
                        className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
                      >
                        Request Similar
                      </Link>

                    )}

                  </div>

                </div>

              </article>

            ))}

          </div>

        </Container>

      </section>


      {/* =====================================================
          RESEARCH REQUEST
      ===================================================== */}

      <section className="border-t border-white/10 py-24">

        <Container>

          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-8 md:p-12">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Can't find what you need?
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Request Similar Research
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-slate-400">
              Tell us what you are researching, your academic level,
              discipline, scope and requirements. Our research support
              workflow can help identify related resources or determine
              the appropriate next step.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-xl bg-teal-500 px-6 py-3 font-semibold text-white transition hover:bg-teal-400"
            >
              Start a Research Request
            </Link>

          </div>

        </Container>

      </section>

    </main>
  );
}