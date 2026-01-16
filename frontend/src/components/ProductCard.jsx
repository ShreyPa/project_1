import { Box } from '@chakra-ui/react'

const ProductCard = (product) => {
  return (
    <Box
      shadow='lg'
      rounded='lg'
      overflow='hidden'
      transition='all 0.3s'
      _hover={{transform: 'translateY(-5px)', shadow: 'xl'}}

      >
      <img src={product.image} alt={product.name} style={{width: 'full', height: '48', objectFit: 'cover'}} />

      <Box p = {4}>
        <Heading as = 'h3' size = 'md' mb = {2}>
          {product.name}
        </Heading>

        <Text fontWeight ='bold' fontSize = 'xl' color = {textColor} mb = {4}> ${product.price}</Text>

        <HStack spacing={2}>
          <IconButton icon={<EditIcon />} colorScheme = 'blue'/>
          <IconButton icon = {<DeleteIcon />} onClick={() => handleDelete(product._id)}
          colorScheme ='red'/>
         
        </HStack>
      </Box>
    </Box>
  )
}

export default ProductCard
