import { useMemo, useState } from 'react';
import ProductCard from '../components/ProductCard.jsx';
import SearchBar from '../components/SearchBar.jsx';
import FilterSidebar from '../components/FilterSidebar.jsx';
import products from '../data/products.js';

const Shop = () => {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({ category: 'All', price: 'All', material: 'All', rating: 'All' });
  const [sortOption, setSortOption] = useState('latest');
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
    setPage(1);
  };

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => product.name.toLowerCase().includes(search.toLowerCase()))
      .filter((product) => (filters.category === 'All' ? true : product.category === filters.category))
      .filter((product) => {
        if (filters.material === 'All') return true;
        return product.material.toLowerCase().includes(filters.material.toLowerCase());
      })
      .filter((product) => {
        if (filters.rating === 'All') return true;
        if (filters.rating === '4+') return product.rating >= 4;
        if (filters.rating === '4.5+') return product.rating >= 4.5;
        if (filters.rating === '5') return product.rating === 5;
        return true;
      })
      .filter((product) => {
        if (filters.price === 'All') return true;
        const [min, max] = filters.price.split('-');
        if (max === '+') return product.price >= Number(min);
        return product.price >= Number(min) && product.price <= Number(max);
      })
      .sort((a, b) => {
        if (sortOption === 'priceLow') return a.price - b.price;
        if (sortOption === 'priceHigh') return b.price - a.price;
        if (sortOption === 'popular') return b.rating - a.rating;
        return 0;
      });
  }, [filters, search, sortOption]);

  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);
  const visibleProducts = filteredProducts.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <main className="space-y-16 pb-20 pt-10 lg:pt-16">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-champagne/20 bg-[#0d0b09] p-10 shadow-luxury">
          <div className="grid gap-8 lg:grid-cols-[340px_minmax(0,_1fr)]">
            <aside className="space-y-8">
              <div className="glass-surface rounded-[2rem] border border-champagne/15 p-5">
                <p className="text-sm uppercase tracking-[0.35em] text-champagne/80">Search</p>
                <div className="mt-4">
                  <SearchBar value={search} onChange={setSearch} />
                </div>
              </div>

              <div className="glass-surface rounded-[2rem] border border-champagne/15 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-champagne/80">Filter collection</p>
                <div className="mt-6">
                  <FilterSidebar
                    filters={filters}
                    onFilterChange={handleFilterChange}
                    sortOption={sortOption}
                    onSortChange={setSortOption}
                  />
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-[#110d09] p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-champagne/75">Luxury Service</p>
                <div className="mt-5 space-y-4 text-sm text-ivory/75">
                  <p>Complimentary styling advice with every order.</p>
                  <p>Express delivery in elegant signature packaging.</p>
                </div>
              </div>
            </aside>

            <div className="space-y-8">
              <div className="flex flex-col gap-4 rounded-[2rem] border border-champagne/15 bg-[#120f0c] p-8 shadow-soft sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-champagne">Shop</p>
                  <h1 className="mt-3 text-3xl font-serif text-ivory sm:text-4xl">Explore our most luminous pieces</h1>
                </div>
                <p className="text-sm text-ivory/70">{filteredProducts.length} products found</p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-2">
                {visibleProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                {Array.from({ length: pageCount }, (_, index) => index + 1).map((pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => setPage(pageNumber)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      pageNumber === page ? 'bg-gold text-black' : 'bg-white/5 text-white/70 hover:bg-white/10'
                    }`}
                  >
                    {pageNumber}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shop;
