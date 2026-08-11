import ProductCard from "./ProductCard";
import { products } from "./products";

export default function FeaturedProducts() {
  return (
    <section
      id="products"
      className="py-28"
    >
      <div className="container mx-auto px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span
            className="
            rounded-full
            border
            border-cyan-500/30
            bg-cyan-500/10
            px-4
            py-2
            text-sm
            font-semibold
            uppercase
            tracking-widest
            text-cyan-400
          "
          >
            Our Products
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Building Intelligent Digital Products
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            We create modern software platforms, AI solutions,
            analytics tools and knowledge products that solve
            real-world problems across industries.
          </p>
        </div>

        {/* Cards */}

        <div
          className="
          grid
          gap-8
          md:grid-cols-2
          xl:grid-cols-3
        "
        >
          {products.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}