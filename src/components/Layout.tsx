import { Stack, HStack, VStack, Box, useTheme } from "@chakra-ui/react"
import { useBreakpointValue } from "@chakra-ui/react"
import Intro from "./Intro"
import AppointmentForm from "./AppointmentForm"
import { themeBorder, themeColors, themeMargins } from "../utils/GlobalTheme"

const Layout = () => {


    const isMobile: boolean = useBreakpointValue({ base: true, sm: true, md: false, lg: false, xl: false }) ?? true;

    return (
        // <Box id='background' bg={'red'} w="full" h="full">
            <HStack id="LayoutStack" spacing={0} w="full" h="full">

                <Box flex={"1 2 auto"} bg={'green'}/>

                <Box w={{ base: "100%", md: "20%" }} minW={{ base: "100%", md: "md" }} h="full" bg={'gray'} border={themeBorder.border} >
                    <Intro/>
                </Box>

                <Box  w={{ base: "100%", md: "20%" }} minW={{ base: "100%", md: "sm" }} h="full" bg={'white'}  borderRight={themeBorder.border}>
                    <AppointmentForm/>
                </Box>

                <Box flex={"1 2 auto"} bg={themeColors.background.normal} />

            </HStack>
        // </Box>
    );
}

export default Layout;