import { Flex, Box, Image, Heading, Input, Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import { MdKeyboardArrowDown } from 'react-icons/md'

function Header() {
	return (
		<>
		<Flex bg='blue.900' alignItems='center' height='6.5rem' color='white'>
			<Link to="/">
				<Box p='5'>
					<Flex flexDirection='column' alignItems='center'>
						<Image boxSize='3rem' src={Logo} alt='Logo' />
						<Heading p="1" size='md'>VALORANT SHOP</Heading>
					</Flex>
				</Box>
			</Link>
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
					Armas
				</MenuButton>
				<MenuList>
					<MenuItem>Vandal</MenuItem>
					<MenuItem>Phantom</MenuItem>
					<MenuItem>Bulldog</MenuItem>
					<MenuItem>Sheriff</MenuItem>
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
					Skins
				</MenuButton>
				<MenuList>
					<MenuItem>Sublime</MenuItem>
					<MenuItem>Singularidade</MenuItem>
					<MenuItem>Glitchpop</MenuItem>
					<MenuItem>Saqueador</MenuItem>
				</MenuList>
			</Menu>
		</Flex>
		</>
	)
}

export default Header;