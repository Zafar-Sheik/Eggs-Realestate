import {Box, Flex, Spacer, Text} from '@chakra-ui/react';
import {FaBed,FaBath} from 'react-icons/fa'
import {BsGridFill} from 'react-icons/bs'
import {GoVerified} from 'react-icons/go'
import millify from "millify";

import { baseUrl , fetchApi } from "../utils/fetchApi";
import { dataIndexAttribute } from 'react-horizontal-scrolling-menu/dist/types/constants';

const PropertyDetails = () => (
    <Box maxWidth="1000px" margin="auto" padding="4">

    </Box>
);

export async function getServerSideProps({params: {id}}){
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`)

    return{
        props:{
            propertyDetails: data
        }
        
    }
}


