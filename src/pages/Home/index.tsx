import {
	Grid,
	GridItem,
	Box,
	Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
	Flex,
	Image,
	Text,
	Input,
	Button
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Home() {
	return (
		<>
		<Grid 
			p='10'
			templateColumns='repeat(4, 1fr)'
			gap={4}
		>
			<GridItem colSpan={1}>
				<Box border='1px' borderRadius='.5rem' borderColor='blackAlpha.300'>
					<Accordion>
						<AccordionItem borderRadius='.5rem' border='0'>
							<h2>
								<AccordionButton _focus={{ boxShadow: 'none' }}>
									<Box flex='1' textAlign='left'>
										Ordenação
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								Lorem
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem>
							<h2>
								<AccordionButton _focus={{ boxShadow: 'none' }}>
									<Box flex='1' textAlign='left'>
										Valor
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								<Flex justifyContent='space-between'>
									<Input width='8rem' placeholder='Mínimo' />
									<Input width='8rem' placeholder='Máximo' />
								</Flex>
								<Flex pt='.5rem'>
									<Button width='100%' bgColor='green.300' color='white' _hover={{ bgColor: 'green.400' }} _focus={{ border: 'none' }} _active={{ bgColor: 'green.500' }} >
										APLICAR VALOR
									</Button>
								</Flex>
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem>
							<h2>
								<AccordionButton _focus={{ boxShadow: 'none' }}>
									<Box flex='1' textAlign='left'>
										Times
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								Lorem
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem>
							<h2>
								<AccordionButton _focus={{ boxShadow: 'none' }}>
									<Box flex='1' textAlign='left'>
										Categorias
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								Lorem
							</AccordionPanel>
						</AccordionItem>
					</Accordion>
				</Box>
			</GridItem>
			<GridItem colSpan={3}>
				<Box>
					<Flex flexWrap='wrap'>
						<Box _hover={{ borderColor: 'blue.900', border: '2px' }} border='1px' borderRadius='.5rem' borderColor='blackAlpha.300' width='18rem' height='20rem' ml='4' mr='4' mb='8'>
							<Link to="/products/3a7a4922-2ad7-4adc-a68d-c808b24782ae">
							<Box p='5' height='10rem'>
								<Image height='100' display='block' mr='auto' ml='auto' src='https://d3ugyf2ht6aenh.cloudfront.net/stores/862/279/products/thumb-3161-07ca21906c145bc09115712480190573-1024-1024.jpg' />
								<Box mt='5' p='5'>
									<Text textAlign='left' color='blackAlpha.700' fontSize='md'>Uniforme Cincinnati Bengals</Text>
								</Box>
							</Box>
							<Box p='12' height='10rem'>
								<Text textAlign='left' color='blackAlpha.700' fontSize='xl'>De 5000 pontos</Text>
								<Text textAlign='left' color='gray.500' fontSize='2xl'>Por 4000 pontos </Text>
							</Box>
							</Link>
						</Box>
					</Flex>
				</Box>
			</GridItem>
		</Grid>
		</>
	)
}

export default Home;