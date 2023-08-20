import { Billboard } from '@/types';

const getBillboard = async (id: string): Promise<Billboard | null> => {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards/${id}`;
  try {
    const res = await fetch(URL);
    let data = await res.json();

    return data.data;
  } catch (err) {
    return null;
  }
};

export default getBillboard;
