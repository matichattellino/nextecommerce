import React from "react";
import Link from 'next/link';
import styled from '@emotion/styled'
import { Button, Input, useDisclosure  } from "@chakra-ui/core";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/core";

const ShopIcon = styled.div`
    width: 50px;
    height: 55px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const ItemCount = styled.span`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
`

const Icons = styled.div`
      width: 30px;
      height: 30px;
`;

const CartIcon = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();    
    return (
        <>
        <ShopIcon>
        <Icons>
            <img src="/logo/cart.svg" ref={btnRef} onClick={onOpen} />
        </Icons>
            <span className="item-count">1</span>
        </ShopIcon>
        <Drawer
       isOpen={isOpen}
       placement="right"
       onClose={onClose}
       finalFocusRef={btnRef}
     >
       <DrawerOverlay />
       <DrawerContent>
         <DrawerCloseButton />
         <DrawerHeader>Categories</DrawerHeader>

         <DrawerBody>
           <Input placeholder="Type here..." />
         </DrawerBody>

         <DrawerFooter>
           <Button variant="outline" mr={3} onClick={onClose}>
             Cancel
           </Button>
           <Button color="blue">Save</Button>
         </DrawerFooter>
       </DrawerContent>
     </Drawer>
        </>
    )
};

export default CartIcon;