import getBillboard from '@/actions/get-billboards';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/billboard';
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container';

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard('676d8511-f022-4b80-9cd6-bb3446385a1c');
  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className="space-y-10 pb-10">
        {billboard && <Billboard billboard={billboard} />}
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
