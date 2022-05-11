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
								Lorem
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem>
							<h2>
								<AccordionButton _focus={{ boxShadow: 'none' }}>
									<Box flex='1' textAlign='left'>
										Armas
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
										Skins
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
								<Image width='150' height='60px' display='block' mr='auto' ml='auto' src='https://static.wikia.nocookie.net/valorant/images/a/aa/Prime_Vandal.png' />
								<Box mt='5' p='5'>
									<Text textAlign='left' color='blackAlpha.700' fontSize='md'>Vandal Sublime</Text>
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