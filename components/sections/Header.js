import React, { createRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Animation from '../ui/cart/Animation';
import Cart from '../../components/ui/cart/Cart';
import { Transition } from 'react-transition-group';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/core";
import { useDisclosure } from "@chakra-ui/core";


const Header = ( { transparent }) => {
  const [ showCart, setShowCart ] = useState(false);
  const [ playAddToCartAnimation, setPlayAddToCartAnimation ] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  console.log(showCart);
  const header = createRef();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  },[])

  const handleScroll = () => {
    window.requestAnimationFrame(animate);
  }

  const animate = () => {
      if (!transparent) {return;}

      if (window.scrollY > 10) {
        header.current.classList.add('invert');
      } else {
        header.current.classList.remove('invert');
      }
  };

  const toggleCart = () => {
      setShowCart(!showCart)
  }

return ( 
    <header className="position-fixed top-0 left-0 right-0 font-weight-semibold no-print">
          <Cart isOpen={showCart} toggle={value => toggleCart(value)} />
         <div
          ref={header}
          className={`d-flex header align-items-center justify-content-between position-relative ${
            transparent ? '' : 'invert'
          }`}
        >
          <div className="d-none d-sm-flex">
          <Link href="/collection">
              <a href="/collection" className="mr-4 font-color-black">Shop</a>
            </Link>
            <Link href="/about">
              <a href="/about" className="font-color-black">
                About 
              </a>
            </Link>
          </div>
          <div className="logo-container">
            <img
              className="w-35 mr-1 d-block d-sm-none"
              src="/images/menu.svg"
              alt="Menu icon"
              onClick={onOpen}
            />
            <Link href="/">
              <a>
                <img
                  src="/images/commerce.svg"
                  className="logo cursor-pointer"
                  alt="Logo"
                />
              </a>
            </Link>
          </div>
          <div className="d-flex">
            <div
              className="position-relative cursor-pointer" 
              onClick={toggleCart}
            >
              <Animation  />
              <div className="cart-count position-absolute font-size-tiny font-weight-bold">
               3
              </div>
            </div>
          </div>
        </div>
          {/* Mobile Menu */}
          <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
              <DrawerBody>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </DrawerBody>
            </DrawerContent>
          </Drawer>    
    </header>
   );
}
 
export default Header;