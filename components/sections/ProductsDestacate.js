import React from 'react';
import { SimpleGrid } from "@chakra-ui/core";
import { Box, Heading, Flex, Text, Button, Input, useDisclosure, IconButton, Image  } from "@chakra-ui/core";
import styled from '@emotion/styled';

const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 10px;
`;

const ProductsFonts = styled.p`
    text-align:center;
    font-size: 20px;
    padding-bottom: 10px;
`;

const ProductsDestacate = () => {
    return ( 
        <>
        <ProductsFonts>NEW ARRIVALS</ProductsFonts>
        <ProductsGrid> 
            <div class="item">
                <img src="/images/default-1.jpeg" />
            </div>
            <div class="item">
                <img src="/images/default-1.jpeg" />
            </div>
            <div class="item">
                <img src="/images/default-1.jpeg" />
            </div>
            <div class="item">
                <img src="/images/default-1.jpeg" />
            </div>
        </ProductsGrid>
        </>
    );
}
 
export default ProductsDestacate;