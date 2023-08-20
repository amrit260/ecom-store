import { Size } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  try {
    const res = await fetch(URL);
    let data = await res.json();

    return data.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default getSizes;
