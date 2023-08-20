import { Category } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  try {
    const res = await fetch(URL);
    let data = await res.json();

    return data.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default getCategories;
