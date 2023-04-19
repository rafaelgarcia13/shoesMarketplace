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

class FakerShoes extends Shoes {
  readonly id = Math.random();
  readonly spacerItem = true;
}

const shoesData = [
  new Shoes({ fakerShoes: true, id: 0 }),
  new Shoes({
    id: 1,
    brandName: 'Nike',
    shoesName: 'Air Jordan',
    price: 300.0,
    image: BlueShoes,
    backgroundColor: 'blue',
  }),
  new Shoes({
    id: 4,
    brandName: 'Nike',
    shoesName: 'Air Jordan',
    price: 300.0,
    image: RedShoes,
    backgroundColor: 'red',
  }),
  new Shoes({
    id: 3,
    brandName: 'Nike',
    shoesName: 'Air Jordan',
    price: 300.0,
    image: LightBlueShoes,
    backgroundColor: 'blue',
  }),
  new Shoes({
    id: 5,
    brandName: 'Nike',
    shoesName: 'Air Jordan',
    price: 300.0,
    image: RedBlackShoes,
    backgroundColor: 'red',
  }),
  new Shoes({
    id: 6,
    brandName: 'Nike',
    shoesName: 'Air Jordan',
    price: 300.0,
    image: SilverShoes,
    backgroundColor: 'silver',
  }),
  new Shoes({
    id: 7,
    brandName: 'Nike',
    shoesName: 'Air Jordan',
    price: 300.0,
    image: WhiteRedShoes,
    backgroundColor: 'red',
  }),
  new Shoes({
    id: 2,
    brandName: 'Nike',
    shoesName: 'Air Jordan',
    price: 300.0,
    image: DarkBlueShoes,
    backgroundColor: 'blue',
  }),
  new Shoes({ fakerShoes: true, id: 0 }),
];

export { shoesData, Shoes, FakerShoes };
