export default function Shop({ children }) {
  return (
    <section id="shop">
      <h2>Best Clothing for everyone</h2>

      <ul id="products">{children}</ul>
    </section>
  );
}
