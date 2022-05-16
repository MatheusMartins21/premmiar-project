import {
	Box,
	Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
	Flex,
	Input,
	Button,
  List,
  ListItem,
  Link,
} from '@chakra-ui/react'

function ProductFilterAccordion() {
  return (
    <Box border='1px' borderRadius='.5rem' borderColor='blackAlpha.300'>
      <Accordion>
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
            <List>
              <ListItem pt={1} pl={4}><Link href={`/products/team/bengals`}>Bengals</Link></ListItem>
              <ListItem pt={1} pl={4}><Link href={`/products/team/chiefs`}>Chiefs</Link></ListItem>
              <ListItem pt={1} pl={4}><Link href={`/products/team/rams`}>Rams</Link></ListItem>
              <ListItem pt={1} pl={4}><Link href={`/products/team/dolphins`}>Dolphins</Link></ListItem>
            </List>
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
            <List>
              <ListItem pt={1} pl={4}><Link href={`/products/category/uniformes`}>Uniformes</Link></ListItem>
              <ListItem pt={1} pl={4}><Link href={`/products/category/bolas`}>Bolas</Link></ListItem>
              <ListItem pt={1} pl={4}><Link href={`/products/category/capacetes`}>Capacetes</Link></ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}

export default ProductFilterAccordion;