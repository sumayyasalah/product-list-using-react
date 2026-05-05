import { useMemo, useState } from 'react'
import './App.css'
import products from './data/products'
import FilterBar from './components/FilterBar'
import ProductCard from './components/ProductCard'

const sortOptions = {
  'price-low': (a, b) => a.price - b.price,
  'price-high': (a, b) => b.price - a.price,
  rating: (a, b) => b.rating - a.rating,
}

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortOption, setSortOption] = useState('price-low')

  const categories = useMemo(
    () => ['All', ...new Set(products.map((product) => product.category))],
    [],
  )

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.toLowerCase().trim()

    return products
      .filter((product) =>
        product.name.toLowerCase().includes(normalizedSearch),
      )
      .filter((product) =>
        selectedCategory === 'All' || product.category === selectedCategory,
      )
      .sort(sortOptions[sortOption])
  }, [searchTerm, selectedCategory, sortOption])

  const handleAddToCart = (productName) => {
    console.log(`Added to cart: ${productName}`)
  }

  return (
    <div className="app-shell">
<FilterBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        sortOption={sortOption}
        onSortChange={setSortOption}
      />

      <section className="product-list" id="products">
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAdd={handleAddToCart}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default App
