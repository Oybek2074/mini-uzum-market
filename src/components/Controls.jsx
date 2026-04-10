function Controls({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories,
  categoryLabels,
}) {
  return (
    <div className="controls">
      <input
        className="search-input"
        type="text"
        placeholder="Mahsulot qidirish..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        className="category-select"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {categoryLabels[category] || category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Controls;