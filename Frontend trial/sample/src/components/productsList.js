import Camera from '../images/camera.jpg';
import Headphones from '../images/headphones.jpg';
import Macbook from '../images/macbook.jpeg';
import Phone from '../images/phone.jpg';
import Potato from '../images/potato.jpg';
import Shoes from '../images/shoes.jpg';

const products = [
  {
    id: "1",
    name: "Apple MacBook Pro",
    description: [
      'Apple MacBook Pro is a macOS laptop with a 13.30-inch display that has a resolution of 2560x1600 pixels. It is powered by a Core i5 processor and it comes with 12GB of RAM. The Apple MacBook Pro packs 512GB of SSD storage.',
      'Connectivity options include Wi-Fi 802.11 ac, Bluetooth and it comes with 2 USB ports (2 x USB 3.0), Mic In ports.'
    ],
    stock: 40,
    images: [Macbook],
    variant: ['256GB HDD', '512GB HDD'],
    key: 'HDD',
    cost: [15900, 16900],
    category: ['Electronics', 'Laptops', 'Apple'],
    rating: 1.0
  },
  {
    id: "2",
    name: "Cosmic Byte Headphones",
    description: [
      'Primary kind of gaming headset, perfect for playing games, listening music, etc.',
      'Soft cushion head-pad and ear-pad, as well as adjustable length hinges guarantee hours of gaming comfort'
    ],
    stock: 56,
    images: [Headphones],
    variant: ['Blue', 'Green'],
    key: 'color',
    cost: [1100, 1200],
    category: ['Electronics', 'Headphones', 'Cosmic Byte'],
    rating: 3.8
  },
  {
    id: "3",
    name: "Woodland Men's Sneakers",
    description: [
      'Sole: Thermoplastic Rubber',
      'Closure: Lace Up',
      'Shoe Width: Medium',
      'Material Type: Leather'
    ],
    stock: 33,
    images: [Shoes],
    variant: [7, 8, 10],
    key: 'size',
    cost: [1200],
    category: ['Shoes', 'Men'],
    rating: 4.2
  },
  {
    id: "4",
    name: "Redmi 9",
    description: [
      '13+2MP Rear camera with AI Portrait, AI scene recognition, HDR, Pro mode | 5MP front facing camera',
      '16.58 centimeters (6.53-inch) HD+ multi-touch capacitive touchscreen with 1600 x 720 pixels resolution, 268 ppi pixel density, 20:9 aspect ratio'
    ],
    stock: 3,
    images: [Phone],
    variant: ['Sporty Orange'],
    key: null,
    cost: [9000],
    rating: 4.5
  },
  {
    id: "5",
    name: "Fresh Organic Potato",
    description: [
      '100% purity',
      'Holiness is out of bounds',
      'Ultimate source of power',
      'Best thing ever'
    ],
    stock: 10000,
    images: [Potato],
    variant: [0.5, 1, 2],
    key: 'kg',
    cost: [50, 100, 170],
    rating: 5
  },
  {
    id: "6",
    name: "Cannon DSLR Camera",
    description: [
      'Characterized by versatile imaging specs',
      'Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design'
    ],
    stock: 0,
    images: [Camera],
    variant: [],
    key: undefined,
    cost: [40000],
    rating: 3.9
  }
]

export default products;