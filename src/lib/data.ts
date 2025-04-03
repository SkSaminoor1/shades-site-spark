
export interface Product {
  id: string;
  name: string;
  category: 'sunglasses' | 'spectacles';
  price: number;
  image: string;
  description: string;
  features: string[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Aviator Classic',
    category: 'sunglasses',
    price: 79.99,
    image: '/placeholder.svg',
    description: 'Classic aviator style sunglasses with UV protection and polarized lenses. Perfect for everyday wear.',
    features: ['UV Protection', 'Polarized', 'Metal Frame', 'Includes Case'],
    inStock: true
  },
  {
    id: '2',
    name: 'Wayfarer Style',
    category: 'sunglasses',
    price: 89.99,
    image: '/placeholder.svg',
    description: 'Iconic wayfarer design that never goes out of style. Features dark lenses with full UV protection.',
    features: ['UV400 Protection', 'Acetate Frame', 'Impact Resistant', 'Includes Microfiber Pouch'],
    inStock: true
  },
  {
    id: '3',
    name: 'Round Metal',
    category: 'sunglasses',
    price: 69.99,
    image: '/placeholder.svg',
    description: 'Vintage-inspired round metal sunglasses with gradient lenses. Light and comfortable for all-day wear.',
    features: ['Gradient Lens', 'Metal Frame', 'Adjustable Nose Pads', 'Slim Arms'],
    inStock: true
  },
  {
    id: '4',
    name: 'Modern Rectangle',
    category: 'spectacles',
    price: 129.99,
    image: '/placeholder.svg',
    description: 'Modern rectangular frames in a versatile design. Perfect for both professional and casual settings.',
    features: ['Lightweight', 'Anti-Blue Light', 'Spring Hinges', 'Includes Hard Case'],
    inStock: true
  },
  {
    id: '5',
    name: 'Cat Eye',
    category: 'spectacles',
    price: 119.99,
    image: '/placeholder.svg',
    description: 'Stylish cat-eye frames that add a touch of elegance to any outfit. Available with prescription lenses.',
    features: ['Acetate Frame', 'Anti-Scratch Coating', 'Available in Multiple Colors', 'Includes Cleaning Cloth'],
    inStock: true
  },
  {
    id: '6',
    name: 'Oversized Square',
    category: 'sunglasses',
    price: 99.99,
    image: '/placeholder.svg',
    description: 'Make a statement with these oversized square sunglasses. Features dark tinted lenses and bold frames.',
    features: ['UV Protection', 'Bold Design', 'Acetate Frame', 'Includes Case'],
    inStock: true
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.slice(0, 3);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: 'sunglasses' | 'spectacles'): Product[] => {
  return products.filter(product => product.category === category);
};
