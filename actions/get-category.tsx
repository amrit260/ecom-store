import { Category } from '@/types';

const getCategory = async (id: string): Promise<Category | null> => {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`;
  try {
    const res = await fetch(URL);
    let data = await res.json();

    return data.data;
  } catch (err) {
    return null;
  }
};

export default getCategory;
