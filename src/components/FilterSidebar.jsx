const FilterSidebar = ({ filters, onFilterChange, sortOption, onSortChange }) => {
  const categories = ['All', 'Rings', 'Necklaces', 'Earrings', 'Bracelets'];
  const materials = ['All', 'Gold', 'White Gold', 'Rose Gold', 'Platinum', 'Gold Plated', 'Pearl', 'Mixed Metal'];

  const controlClass = 'mt-3 w-full rounded-[1.5rem] border border-champagne/15 bg-[#140f0a] px-4 py-3 text-sm text-ivory outline-none shadow-inner';

  return (
    <section className="space-y-6 rounded-[2rem] border border-champagne/15 bg-[#130f0b] p-6 shadow-soft">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-champagne/70">Category</p>
        <select
          value={filters.category}
          onChange={(e) => onFilterChange('category', e.target.value)}
          className={controlClass}
        >
          {categories.map((label) => (
            <option key={label} value={label}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-champagne/70">Price Range</p>
        <select
          value={filters.price}
          onChange={(e) => onFilterChange('price', e.target.value)}
          className={controlClass}
        >
          <option value="All">All</option>
          <option value="0-999">Under $1,000</option>
          <option value="1000-1999">$1,000 - $1,999</option>
          <option value="2000-2999">$2,000 - $2,999</option>
          <option value="3000+">$3,000+</option>
        </select>
      </div>

      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-champagne/70">Material</p>
        <select
          value={filters.material}
          onChange={(e) => onFilterChange('material', e.target.value)}
          className={controlClass}
        >
          {materials.map((label) => (
            <option key={label} value={label}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-champagne/70">Rating</p>
        <select
          value={filters.rating}
          onChange={(e) => onFilterChange('rating', e.target.value)}
          className={controlClass}
        >
          <option value="All">All</option>
          <option value="4+">4 stars & up</option>
          <option value="4.5+">4.5 stars & up</option>
          <option value="5">5 stars</option>
        </select>
      </div>

      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-champagne/70">Sort by</p>
        <select
          value={sortOption}
          onChange={(e) => onSortChange(e.target.value)}
          className={controlClass}
        >
          <option value="latest">Newest</option>
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
          <option value="popular">Popular</option>
        </select>
      </div>
    </section>
  );
};

export default FilterSidebar;
