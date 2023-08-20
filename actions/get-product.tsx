import { Product } from '@/types';

const getProduct = async (id: string): Promise<Product | null> => {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`;
  try {
    const res = await fetch(URL);
    let data = await res.json();

    return data.data;
  } catch (err) {
    return null;
  }
};

export default getProduct;
