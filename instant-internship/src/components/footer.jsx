import { Text,Image } from "@chakra-ui/react"
import { Box, Container } from "@mui/system"
import social from "../images/social.png"


export default function Footer(){
    return (
        <>
        <Box bgcolor={'#446478'} color='white' mb={'-20px'}>
            <Box display='flex' justifyContent={'space-between'} width='70%' margin={'auto'} p='10px'>
                <Box textAlign={'left'}>
                   <Text>BY PLACE</Text>
                   <hr/>
                   <Text>Internships In Mumbai</Text>
                   <Text>Internships In Delhi</Text>
                   <Text>Internships In Bangalore</Text>
                   <Text>Internships In Pune</Text>
                   <Text>Internships In Hyderabad</Text>

                </Box>
                <Box textAlign={'left'}>
                <Text>BY PROFILE</Text>
                   <hr/>
                   <Text>Marketing Internships</Text>
                   <Text>Business Development Internships</Text>
                   <Text>Content Writing Internships</Text>
                   <Text>Graphic Designing Internships</Text>
                   <Text>HR Internships</Text>
                   <Text>Engineering Internships</Text>
                </Box>
                <Box textAlign={'left'}>
                <Text>BY TYPE</Text>
                   <hr/>
                   <Text>Full Time Internships</Text>
                   <Text>Part Time Internships</Text>
                   <Text>Work From Home Internships</Text>
                   <Box>
                    <Image _hover={{cursor:'pointer'}} w={'200px'} mt='20px' src={social}/>
                   </Box>
                </Box>
                
            </Box>
            <Box display={'flex'} justifyContent='space-between' width='70%' margin={'auto'}>
                <Text>REFUND & CANCELLATION POLICY</Text>
                <Text>COURSES</Text>
                <Text>TERMS AND CONDITIONS</Text>
                <Text>PRIVACY POLICY</Text>
                <Text>CONTACT US</Text>
                <Text>ABOUT US</Text>
                <Text>SITEMAP</Text>
            </Box>
            <hr style={{width:'70%', color:'grey'}}/>
            <Text>© 2015 - 2022 INTERNTHEORY. ALL RIGHTS RESERVED.</Text>
        </Box>
        </>
    )
}