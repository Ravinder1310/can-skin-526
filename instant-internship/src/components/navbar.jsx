import { HamburgerIcon,Icon } from '@chakra-ui/icons'
import { Box, Button, DrawerCloseButton, Image, Input,Text } from '@chakra-ui/react'
import logo from "../images/logo.png"

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
  } from '@chakra-ui/react'
import { useState,useRef } from 'react'


export default function Navbar(){
    const { isOpen, onOpen, onClose } = useDisclosure()


    function Sidebar() {
        
        const btnRef = useRef()
      
        return (
          <>
           <Box p={'30px'}>
            <Drawer
              isOpen={isOpen}
              placement='left'
              onClose={onClose}
              finalFocusRef={btnRef}
              
            >
              <DrawerOverlay />
              <DrawerContent>
              <Box w={'350px'} h='100%' bgColor={'white'} textAlign={'center'} p='10px' border='transparent' boxShadow=' rgba(0, 0, 0, 0.24) 0px 3px 8px'>
                <Box display={'flex'} justifyContent='space-between' mb={'30px'}>
                <Image  w={'180px'} h='70px' src={logo} alt='Error'/>
                <DrawerCloseButton p={'10px'} h='40px' mt={'10px'} mr='10px'/>
                </Box>
                
                <DrawerBody>
                   <Box display={'flex'} gap='70px'  fontSize='25px' alignItems={'center'} p='0px 10px' _hover={{cursor:'grab',bgColor:'grey'}}>
                  <Image w={'40px'} h='40px' src='https://tse1.mm.bing.net/th?id=OIP.vi_vr3buwUjESDFF1_8B2gHaG7&pid=Api&P=0' alt='Error'/>
                  <Text>Home</Text>
                  </Box> 
                  <Box display={'flex'} gap='60px'  fontSize='25px' alignItems={'center'} p='0px 0px' _hover={{cursor:'grab',bgColor:'grey'}}>
                  <Image w={'60px'} h='60px' src='https://tse1.mm.bing.net/th?id=OIP.gCZFQJqi9yETUHKZAdvnlwHaHa&pid=Api&P=0' alt='Error'/>
                  <Text>InternShips</Text>
                  </Box>
                  <Box display={'flex'} gap='70px'  fontSize='25px' alignItems={'center'} p='0px 10px' _hover={{cursor:'grab',bgColor:'grey'}}>
                  <Image w={'40px'} h='40px' src='https://tse4.mm.bing.net/th?id=OIP.IjMhbHfQSR89IqKLTCuicgHaHa&pid=Api&P=0' alt='Error'/>
                  <Text>Jobs</Text>
                  </Box>
                  <Box display={'flex'} gap='70px' fontSize='25px' alignItems={'center'} p='0px 10px' _hover={{cursor:'grab',bgColor:'grey'}}>
                  <Image w={'40px'} h='40px' src='https://tse2.mm.bing.net/th?id=OIP.z0MMFL62fOps3RYojHNqZQHaH1&pid=Api&P=0' alt='Error'/>
                  <Text>Post Internships</Text>
                  </Box>
                  <Box display={'flex'} gap='70px' fontSize='25px' alignItems={'center'} p='0px 10px' _hover={{cursor:'grab',bgColor:'grey'}}>
                  <Image w={'40px'} h='40px' src='https://tse1.mm.bing.net/th?id=OIP.TRFhfhFm4HJg6tRAsak2uQHaHa&pid=Api&P=0' alt='Error'/>
                  <Text>Courses</Text>
                  </Box>
                  <Box display={'flex'} gap='70px' fontSize='25px' alignItems={'center'} p='0px 10px' _hover={{cursor:'grab',bgColor:'grey'}}>
                  <Image w={'40px'} h='40px' src='https://tse2.mm.bing.net/th?id=OIP.5-UFIbfFZAcpkT9nT68pHgHaHa&pid=Api&P=0' alt='Error'/>
                  <Text>Contact Us</Text>
                  </Box>
                  <hr style={{ border:'1px solid grey'}}/>
                  <Box display={'flex'} gap='70px' fontSize='25px' alignItems={'center'} p='0px 10px' _hover={{cursor:'grab',bgColor:'grey'}}>
                  <Image w={'40px'} h='40px' src='https://tse4.mm.bing.net/th?id=OIP.ULzdDypzVM09uJ7Z5J4pegHaHw&pid=Api&P=0' alt='Error'/>
                  <Text>Register</Text>
                  </Box>
                  <Box display={'flex'} gap='70px' fontSize='25px' alignItems={'center'} p='0px 10px'_hover={{cursor:'grab',bgColor:'grey'}}>
                  <Image w={'40px'} h='40px' src='https://tse1.mm.bing.net/th?id=OIP.LG6UqvINZmEBMrUzrhADJAHaHa&pid=Api&P=0' alt='Error'/>
                  <Text>Login</Text>
                  </Box>
                </DrawerBody>
                </Box>
              </DrawerContent>
            </Drawer>
            </Box>
          </>
        )
      }

    return (
        <>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'10px 30px'}}>
            <div style={{display:'flex',justifyContent:'space-between',gap:'40px',alignItems:'center'}}>
           
            <Icon as={HamburgerIcon} boxSize={40} onClick={onOpen} _hover={{cursor:'grab'}}/>
            
            
            <Image w={'180px'} h='70px' _hover={{cursor:'grab'}} src={logo} alt='Error' />
            </div>
            <div style={{display:'flex',justifyContent:'space-between',gap:'30px'}}>
                <Image boxSize='50px' src='https://tse2.mm.bing.net/th?id=OIP.UaVAH7RRBW8BYQ4T_wBxYgAAAA&pid=Api&P=0' alt='Error'/>
                <Button p='10px 25px' fontSize='20px' bgColor='red' color='white' border='transparent' borderRadius="8px" colorScheme='teal' size='lg'>SIGN IN</Button>
            </div>
        </div>
        <Sidebar/>
        </>
    )
}