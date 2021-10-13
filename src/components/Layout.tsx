import { Stack, HStack, VStack, Box, useTheme } from "@chakra-ui/react"
import { useBreakpointValue } from "@chakra-ui/react"
import Intro from "./Intro"
import AppointmentForm from "./AppointmentForm"
import { themeBorder, themeColors, themeMargins } from "../utils/GlobalTheme"

const Layout = () => {


    const isMobile: boolean = useBreakpointValue({ base: true, sm: true, md: false, lg: false, xl: false }) ?? true;

    return (
        <Box id='background' bg={themeColors.background.normal} w="full" h="full" p={isMobile? 0 : 10}>

            <HStack id="layoutStack" spacing={0} w="full" h="full"  >

                <Box flex={"1 2 auto"} bg={themeColors.background.normal} />

                <Box id="intro_frame" display={isMobile ? "none" : "auto"} w={{ base: "100%", md: "20%" }} minW={{ base: "100%", md: "md" }} h="full" bg={'white'} border={themeBorder.border} boxShadow="md" rounded="md">
                    <Intro />
                </Box>

                <Box id="appointmentform_frame" w={{ base: "100%", md: "20%" }} minW={{ base: "100%", md: "sm" }} h="full" bg={'white'} borderRight={themeBorder.border} boxShadow="md" rounded="md">
                    <AppointmentForm />
                </Box>

                <Box flex={"1 2 auto"} bg={themeColors.background.normal} />

            </HStack>

        </Box>
    );
}

export default Layout;