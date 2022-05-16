import { 
	Box, 
	Button, 
	Flex, 
	Heading, 
	Input,
	Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
	ButtonGroup,
} from "@chakra-ui/react";

function Products() {	
	return (
		<Box p='10'>
			<Heading size='lg' color='blackAlpha.900'>Lista de Produtos</Heading>
			<Flex width='80rem' flexWrap='wrap' mt='3' alignItems='center' justifyContent='space-between'>
				<Input width='10rem' placeholder='Título' />
				<Input width='10rem' placeholder='Descrição' />
				<Input width='10rem' placeholder='Image' />
				<Input width='10rem' placeholder='Valor' />
				<Input width='10rem' placeholder='Desconto' />
				<Input width='10rem' placeholder='Time' />
				<Input width='10rem' placeholder='Categoria' />
				<Button bgColor='green.300' size='md' color='white' _hover={{ bgColor: 'green.400' }} _focus={{ border: 'none' }} _active={{ bgColor: 'green.500' }}>
					ADICIONAR
				</Button>
			</Flex>
			<Box p='6'>
			<TableContainer>
				<Table variant='simple'>
					<TableCaption>Produtos cadastrados</TableCaption>
					<Thead>
						<Tr>
							<Th>Título</Th>
							<Th>Descrição</Th>
							<Th>Imagem</Th>
							<Th isNumeric>Valor</Th>
							<Th isNumeric>Desconto</Th>
							<Th>Time</Th>
							<Th>Categoria</Th>
							<Th>Ações</Th>
						</Tr>
					</Thead>
					<Tbody>
						<Tr>
							<Td>Uniforme Cincinnati Bengals</Td>
							<Td>Uniforme Cincinnati Benga...</Td>
							<Td>https://d3ugyf2ht6aenh.cloudfront.net/store...</Td>
							<Td isNumeric>5000</Td>
							<Td isNumeric>10</Td>
							<Td>Bengals</Td>
							<Td>Uniformes</Td>
							<Td>
								<ButtonGroup spacing='6'>
									<Button colorScheme='yellow'>Editar</Button>
									<Button colorScheme='red'>Excluir</Button>
								</ButtonGroup>
							</Td>
						</Tr>
					</Tbody>
				</Table>
			</TableContainer>
			</Box>
		</Box>
	)
}

export default Products;