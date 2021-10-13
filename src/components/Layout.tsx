import { Stack, HStack, Box, useDisclosure, Spacer, Flex, Button } from "@chakra-ui/react"
import { useBreakpointValue } from "@chakra-ui/react"

const Layout = () => {

    const isMobile: boolean = useBreakpointValue({ base: true, sm: true, md: true, lg: false, xl: false }) ?? true;

    return (
        <Stack id="LayoutMobileNavigation" direction={{ base: "column" }} spacing={0} w="full" h="full" overflow={"hidden"}>



        </Stack>
    );
}

export default Layout;