import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import cx from 'classnames';

const entries = [
  {
    name: 'Home',
    href: '/',
    enabled: true,
  },
  {
    name: 'About',
    href: '/about',
    enabled: true,
  },
  {
    name: 'Contact',
    href: '/contact',
    enabled: false,
  },
];

const { Button, Items, Item } = Menu;

const MenuEntry = (props) => (
  <Item disabled={!props.enabled}>
    {({ active }) => {
      const classNames = cx('w-full', 'p-2', 'rounded-lg', 'mt-2', 'mb-2', {
        'opacity-50': !props.enabled,
        'bg-blue-600': active,
        'text-white': active,
      });

      return (
        <Link href={props.href} passHref>
          <a className={classNames}>{props.name}</a>
        </Link>
      );
    }}
  </Item>
);

export default function Home() {
  return (
    <div className="w-9/12 m-auto pt-16 pb-16">
      <Menu>
        <Button className="bg-purple-500 text-white p-2 pl-4 pr-4 rounded-lg">My Menu</Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0">
          <Items className="flex flex-col w-52 mt-4 p-2 rounded-xl shadow-lg">
            {entries.map((entry) => (
              <MenuEntry key={entry.name} {...entry} />
            ))}
          </Items>
        </Transition>
      </Menu>
    </div>
  );
}
