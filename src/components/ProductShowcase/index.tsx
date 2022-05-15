import {
	Box,
	Image,
	Text,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

interface IProductShowcase {
  uuid: string;
  title: string;
  image: string;
  amount: number;
  discountVisibility: any;
  calculatedAmount: string;
}

export function ProductShowcase({uuid, title, image, amount, discountVisibility, calculatedAmount}: IProductShowcase) {
  return (
    <Box
      key={uuid}
      _hover={{
      borderColor:
      'blue.900',
      border:
      '2px'
      }}
      border='1px'
      borderRadius='.5rem'
      borderColor='blackAlpha.300'
      width='18rem'
      height='20rem'
      ml='4'
      mr='4'
      mb='8'
    >
      <Link to={`/products/${uuid}`}>
      <Box p='5' height='10rem'>
        <Image height='100' display='block' mr='auto' ml='auto' src={image} />
        <Box mt='5' p='5'>
          <Text textAlign='left' color='blackAlpha.700' fontSize='md'>{title}</Text>
        </Box>
      </Box>
      <Box p='12' height='10rem'>
        <Text visibility={discountVisibility} textAlign='left' color='blackAlpha.700' fontSize='xl'>De {amount} pontos</Text>
        <Text textAlign='left' color='gray.500' fontSize='2xl'>{calculatedAmount} pontos </Text>
      </Box>
      </Link>
    </Box>
  );
}