import { SvgProps } from 'react-native-svg';
import {
  BlueShoes,
  DarkBlueShoes,
  LightBlueShoes,
  RedBlackShoes,
  RedShoes,
  SilverShoes,
  WhiteRedShoes,
} from '@svg';

class Shoes {
  constructor(props: Partial<Shoes>) {
    Object.assign(this, props);
  }

  brandName: string;
  shoesName: string;
  backgroundColor: string;
  price: number;
  id: number;
  image: React.FC<SvgProps>;
  fakerShoes: boolean;
}

const shoesColors = ['#8B96FF', '#FFC088', '#FF5959', '#D6D6D6', '#EA7272', '#5A63FF'];

const shoesData = [
  new Shoes({ fakerShoes: true, id: 0 }),
  new Shoes({
    id: 1,
    brandName: 'Nike',
    shoesName: 'Air Max - 2345',
    price: 450.9,
    image: BlueShoes,
    backgroundColor: shoesColors[0],
  }),
  new Shoes({
    id: 3,
    brandName: 'Nike',
    shoesName: 'Runner Epic',
    price: 356.99,
    image: LightBlueShoes,
    backgroundColor: shoesColors[1],
  }),
  new Shoes({
    id: 4,
    brandName: 'Nike',
    shoesName: 'Air Jordan',
    price: 423.8,
    image: RedBlackShoes,
    backgroundColor: shoesColors[2],
  }),
  new Shoes({
    id: 5,
    brandName: 'Nike',
    shoesName: 'Jump 435',
    price: 500.9,
    image: SilverShoes,
    backgroundColor: shoesColors[3],
  }),
  new Shoes({
    id: 6,
    brandName: 'Nike',
    shoesName: 'Air Max - 9834',
    price: 546.9,
    image: WhiteRedShoes,
    backgroundColor: shoesColors[4],
  }),
  new Shoes({
    id: 7,
    brandName: 'Nike',
    shoesName: 'Runner Epic - 823',
    price: 254.3,
    image: DarkBlueShoes,
    backgroundColor: shoesColors[5],
  }),
  new Shoes({ fakerShoes: true, id: 8 }),
];

export { shoesData, Shoes, shoesColors };
