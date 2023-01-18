export const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch('');
  return response.json();
}