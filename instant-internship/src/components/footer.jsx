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
                   <Text _hover={{textDecoration:'underline',fontSize:'15px',cursor:'pointer'}}>Internships In Mumbai</Text>
                   <Text _hover={{textDecoration:'underline',fontSize:'15px',cursor:'pointer'}}>Internships In Delhi</Text>
                   <Text _hover={{textDecoration:'underline',fontSize:'15px',cursor:'pointer'}}>Internships In Bangalore</Text>
                   <Text _hover={{textDecoration:'underline',fontSize:'15px',cursor:'pointer'}}>Internships In Pune</Text>
                   <Text _hover={{textDecoration:'underline',fontSize:'15px',cursor:'pointer'}}>Internships In Hyderabad</Text>

                </Box>
                <Box textAlign={'left'}>
                <Text>BY PROFILE</Text>
                   <hr/>
                   <Text _hover={{textDecoration:'underline',fontSize:'15px',cursor:'pointer'}}>Marketing Internships</Text>
                   <Text _hover={{textDecoration:'underline',fontSize:'15px',cursor:'pointer'}}>Business Development Internships</Text>
                   <Text _hover={{textDecoration:'underline',fontSize:'15px',cursor:'pointer'}}>Content Writing Internships</Text>
                   <Text _hover={{textDecoration:'underline',fontSize:'15px',cursor:'pointer'}}>Graphic Designing Internships</Text>
                   <Text _hover={{textDecoration:'underline',fontSize:'15px',cursor:'pointer'}}>HR Internships</Text>
                   <Text _hover={{textDecoration:'underline',fontSize:'15px',cursor:'pointer'}}>Engineering Internships</Text>
                </Box>
                <Box textAlign={'left'}>
                <Text>BY TYPE</Text>
                   <hr/>
                   <Text _hover={{textDecoration:'underline',fontSize:'15px',cursor:'pointer'}}>Full Time Internships</Text>
                   <Text _hover={{textDecoration:'underline',fontSize:'15px',cursor:'pointer'}}>Part Time Internships</Text>
                   <Text _hover={{textDecoration:'underline',fontSize:'15px',cursor:'pointer'}}>Work From Home Internships</Text>
                   <Box>
                    <Image _hover={{cursor:'pointer'}} w={'200px'} mt='20px' src={social}/>
                   </Box>
                </Box>
                
            </Box>
            <Box display={'flex'} justifyContent='space-between' width='70%' margin={'auto'}>
                <Text _hover={{textDecoration:'underline',fontSize:'15px',cursor:'pointer'}}>REFUND & CANCELLATION POLICY</Text>
                <Text _hover={{textDecoration:'underline',fontSize:'15px',cursor:'pointer'}}>COURSES</Text>
                <Text _hover={{textDecoration:'underline',fontSize:'15px',cursor:'pointer'}}>TERMS AND CONDITIONS</Text>
                <Text _hover={{textDecoration:'underline',fontSize:'15px',cursor:'pointer'}}>PRIVACY POLICY</Text>
                <Text _hover={{textDecoration:'underline',fontSize:'15px',cursor:'pointer'}}>CONTACT US</Text>
                <Text _hover={{textDecoration:'underline',fontSize:'15px',cursor:'pointer'}}>ABOUT US</Text>
                <Text _hover={{textDecoration:'underline',fontSize:'15px',cursor:'pointer'}}>SITEMAP</Text>
            </Box>
            <hr style={{width:'70%', color:'grey'}}/>
            <Text>© 2015 - 2022 INTERNTHEORY. ALL RIGHTS RESERVED.</Text>
        </Box>
        </>
    )
}