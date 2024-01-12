import { total } from './solution';


test('Calculate total cost for items', () => {
  const items = ["atv", "atv", "atv", "vga"];
  const result = total(items);
  expect(result).toBe(249.00); 
});


test('Calculate total cost with duplicate items', () => {
  const items = ["atv", "ipd", "ipd", "atv", "ipd", "ipd", "ipd"];
  const result = total(items);
  expect(result).toBe(2718.95); 
});


test('Calculate total cost with no items', () => {
  const items: string[] = [];
  const result = total(items);
  expect(result).toBe(0); 
});