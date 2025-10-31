function ProductCard() {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-5 w-72 text-center hover:scale-105 transition-transform">
      <img
        src="https://via.placeholder.com/200"
        alt="Product"
        className="rounded-xl mb-4 mx-auto"
      />
      <h2 className="text-lg font-semibold mb-2">Cool Headphones</h2>
      <p className="text-gray-500 mb-3">High-quality wireless sound</p>
      <p className="text-lg font-bold mb-4">₹999</p>

      <button
        // onClick={alert("cghnjm,")}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
