import { Stack, HStack, Text, Box, Input, Spacer, SimpleGrid, VStack, Button, useTheme } from "@chakra-ui/react"
import { themeBorder, themeColors, themeMargins } from "../utils/GlobalTheme"
import useFormStore from '../hooks/useFormStore'

const AppointmentForm = () => {
    
    const petName = useFormStore(state => state.petName);
    const petType = useFormStore(state => state.petType);
    const formText = useFormStore(state => state.formText);
    const setFormText = useFormStore(state => state.setFormText);
    const setPetType = useFormStore(state => state.setPetType);
    const setPetName = useFormStore(state => state.setPetName);
    
    
    return (


        <VStack id={"appointment_form"} align={'flex-start'} p={themeMargins.frame}>
            <Stack direction={'row'} justify={'space-between'}>
                <Button variant={'ghost'} size={'sm'} colorScheme={'orange'}>Zuruck</Button>
                <Spacer/>

                <Button variant={'outline'} size={'sm'} colorScheme={'orange'}>Heute</Button>
            </Stack>


            <Text align={'left'} fontSize={'sm'}>Wie möchtest du mit dem Tierarzt sprechen?</Text>
            <SimpleGrid columns={2} spacing={2} w={"full"}>
                <Button fontSize={'sm'} variant={'outline'} colorScheme={'orange'}>Video per Smartphone</Button>
                <Button fontSize={'sm'} variant={'outline'} colorScheme={'orange'}>Rückruf erhalten</Button>
            </SimpleGrid>
            <Text align={'left'} fontSize={'sm'}>Wie funktioniert Videochat?</Text>


            <Text align={'left'} fontSize={'sm'}>Was für ein Tier hast du?</Text>

            <SimpleGrid columns={2} spacing={2} w={"full"}>
                <Button variant={petType==='dog'?'solid':'outline'} colorScheme={'orange'} onClick={()=>{setPetType('dog')}}>Hund</Button>
                <Button variant={petType==='cat'?'solid':'outline'} colorScheme={'orange'} onClick={()=>{setPetType('cat')}}>Katze</Button>

                <Button variant={petType==='smallPets'?'solid':'outline'} colorScheme={'orange'} onClick={()=>{setPetType('smallPets')}}>Heimtier</Button>
                <Button variant={petType==='horse'?'solid':'outline'} colorScheme={'orange'} onClick={()=>{setPetType('horse')}}>Pferd</Button>
            </SimpleGrid>


            <Text align={'left'} fontSize={'sm'}>Wie heißt dein Tier?</Text>
            <Input placeholder="Max" size="sm" onChange={(event)=>{setPetName(event.target.value)}}/>

            <Text align={'left'} fontSize={'sm'}>Deine Frage an Tierarzt</Text>
            <Text align={'left'} fontSize={'xs'}>{formText?.length}/2000 Zeichnen</Text>
            <Input size="xl" minH={'10em'}  onChange={(event)=>{setFormText(event.target.value)}}/>

            <Text align={'left'} fontSize={'sm'}>Bilder Videos Dokumente</Text>
            <Button variant={'outline'} colorScheme={'orange'} size={'sm'}>Upload</Button>
        </VStack >);
}

export default AppointmentForm;