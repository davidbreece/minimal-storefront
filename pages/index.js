import ProductItem from '../components/ProductItem';
import { useFeatured } from '../hooks/useFeatured';

export default function ProductList() {
  const { error, data, loading } = useFeatured();

  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 2, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  if (loading) return <div>spinner...</div>;

  if (error) return <div>something went wrong</div>;

  if (data) {
    console.log(data);
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {data.collection.products.edges.map((edge) => (
        <ProductItem product={edge.node} key={edge.node.slug}></ProductItem>
      ))}
    </div>
  );
}
