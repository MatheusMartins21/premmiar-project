import { 
	Flex, 
	Box, 
	Image, 
	Heading, 
	Input, 
	Menu, 
	MenuButton,
	Button, 
	MenuList, 
	MenuItem, 
	Link
} from '@chakra-ui/react'
import { Link as LinkRouter } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import { MdKeyboardArrowDown } from 'react-icons/md'

function Header() {
	return (
		<>
		<Flex bg='blue.800' alignItems='center' height='6.5rem' color='white'>
			<LinkRouter to="/">
				<Box p='5'>
					<Flex flexDirection='column' alignItems='center'>
						<Image boxSize='3rem' src={Logo} alt='Logo' />
						<Heading p="1" size='md'>NFL SHOP</Heading>
					</Flex>
				</Box>
			</LinkRouter>
			<Box p='10'>
				<Input
					placeholder='O que você está buscando?' 
					height='3.5rem'
					width='30rem'
					focusBorderColor='white'
					bg='white'
					color='gray.700'
				/>
			</Box>
		</Flex>
		<Flex border='1px' borderColor='blackAlpha.300'>
			<Menu>
				<MenuButton 
					p='6' 
					fontSize='1.2rem'
					fontWeight='normal'
					colorScheme='white' 
					color='black'
					_focus={{ boxShadow: 'none' }}
					as={Button} 
					rightIcon={<MdKeyboardArrowDown />}
				>
					Times
				</MenuButton>
				<MenuList>
					<Link href={`/products/team/bengals`}><MenuItem>Bengals</MenuItem></Link>
					<Link href={`/products/team/chiefs`}><MenuItem>Chiefs</MenuItem></Link>
					<Link href={`/products/team/rams`}><MenuItem>Rams</MenuItem></Link>
					<Link href={`/products/team/dolphins`}><MenuItem>Dolphins</MenuItem></Link>
				</MenuList>
			</Menu>

			<Menu>
				<MenuButton 
					p='6' 
					fontSize='1.2rem'
					fontWeight='normal'
					colorScheme='white' 
					color='black'
					_focus={{ boxShadow: 'none' }}
					as={Button} 
					rightIcon={<MdKeyboardArrowDown />}
				>
					Categorias
				</MenuButton>
				<MenuList>
					<Link href={`/products/category/uniformes`}><MenuItem>Uniformes</MenuItem></Link>
					<Link href={`/products/category/bolas`}><MenuItem>Bolas</MenuItem></Link>
					<Link href={`/products/category/capacetes`}><MenuItem>Capacetes</MenuItem></Link>
				</MenuList>
			</Menu>
		</Flex>
		</>
	)
}

export default Header;