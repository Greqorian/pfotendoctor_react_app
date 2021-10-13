import { Stack, HStack, Text, Box, Input, Spacer, SimpleGrid, VStack, Button, useTheme } from "@chakra-ui/react"
import { themeBorder, themeColors, themeMargins } from "../utils/GlobalTheme"
import useFormStore from '../hooks/useFormStore'

const Intro = () => {

    const petName = useFormStore(state => state.petName);
    const petType = useFormStore(state => state.petType);
    const formText = useFormStore(state => state.formText);


    return (

        <VStack id={"intro"} align={'flex-start'} p={themeMargins.frame}>
            <Box w="full" border={themeBorder.border}>
                <Text>Pfotendoctor Logo</Text>

            </Box>

            <Box w="full" border={themeBorder.border}>
                <Text>Referenzen</Text>

            </Box>

            <Box w="full" border={themeBorder.border}>
                <Text fontSize={'sm'}>Store:</Text>
                <Text fontSize={'sm'}>Pet Name: {petName}</Text>
                <Text fontSize={'sm'}>Pet Type: {petType}</Text>


            </Box>


        </VStack >);
}

export default Intro;