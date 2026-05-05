function FilterBar({
  searchTerm,
  onSearchChange,
  categories,
  selectedCategory,
  onCategoryChange,
  sortOption,
  onSortChange,
}) {
  return (
    <section className="filter-bar">
      <div className="filter-row">
        <label className="search-field" htmlFor="search">
          <span className="sr-only">Search products</span>
          <input
            id="search"
            type="search"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search products..."
          />
        </label>
        <div className="sort-field">
          <label htmlFor="sort">Sort by</label>
          <select id="sort" value={sortOption} onChange={(event) => onSortChange(event.target.value)}>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>
      <div className="category-filter">
        <strong>Category</strong>
        <div className="category-list">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={category === selectedCategory ? 'category-button active' : 'category-button'}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FilterBar
