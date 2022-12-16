import { Box,Checkbox,Input,Select,Stack,Text,Image, Grid, Container } from "@chakra-ui/react";
import SelectTags from "./selectTags";
import Slider from "./Slider";


export default function Home(){
    return (
        <>
        <Container mt={'100px'}>
       <Box mt='-60px' p={'20px'} background='url(https://tse2.mm.bing.net/th?id=OIP.E0rMIItyw-MziPfwMpROswHaEe&pid=Api&P=0) center/cover no-repeat'>
        <h1 style={{}}  >Let's Get You <span style={{backgroundColor:'red',color:'white',padding:'0px 10px'}}>Ready</span></h1>
        <Text fontSize={'25px'}>The One Stop to Upgrade Your Resume. Expand Your Skillset. Do An Internship. Get Placed</Text>
        <Box>
           <SelectTags/>
        </Box>
       </Box>
       <Box display={'flex'} w='70%' margin={'auto'} alignItems='center' gap={'150px'} mt="70px">
        <Box textAlign='left' fontSize={'15px'}>
        <h1>PLETHORA OF OPPORTUNITIES<span style={{color:'red'}}> FOR YOU</span></h1>
        <hr style={{marginTop:'50px'}}/>
        <Text fontSize={'20px'}>We are on a mission to connect employers to young talent all over India. With our strong corporate network, it will no longer be a challenge to find the right internship for you</Text>
        </Box>
        <Grid templateColumns='repeat(4, 100px)'  w='500px' h='450px'>
            <Image src='https://assets.interntheory.com/creative/home-logo/logo-1.png' alt='Error'></Image>
            <Image src='https://assets.interntheory.com/creative/home-logo/logo-2.png' alt='Error'></Image>
            <Image src='https://assets.interntheory.com/creative/home-logo/logo-3.png' alt='Error'></Image>
            <Image src='https://assets.interntheory.com/creative/home-logo/logo-4.png' alt='Error'></Image>
            <Image src='https://assets.interntheory.com/creative/home-logo/logo-6.png' alt='Error'></Image>
            <Image src='https://assets.interntheory.com/creative/home-logo/logo-7.png' alt='Error'></Image>
            <Image src='https://assets.interntheory.com/creative/home-logo/logo-8.png' alt='Error'></Image>
            <Image src='https://assets.interntheory.com/creative/home-logo/logo-9.png' alt='Error'></Image>
            <Image src='https://assets.interntheory.com/creative/home-logo/logo-10.png' alt='Error'></Image>
            <Image src='https://assets.interntheory.com/creative/home-logo/logo-11.png' alt='Error'></Image>
            <Image src='https://assets.interntheory.com/creative/home-logo/logo-12.png' alt='Error'></Image>
            <Image src='https://assets.interntheory.com/creative/home-logo/logo-13.png' alt='Error'></Image>
            <Image src='https://assets.interntheory.com/creative/home-logo/logo-14.png' alt='Error'></Image>
            <Image src='https://assets.interntheory.com/creative/home-logo/logo-15.png' alt='Error'></Image>
            <Image src='https://assets.interntheory.com/creative/home-logo/logo-16.png' alt='Error'></Image>
            <Image src='https://assets.interntheory.com/creative/home-logo/logo-17.png' alt='Error'></Image>
            <Image src='https://assets.interntheory.com/creative/home-logo/logo-18.png' alt='Error'></Image>
            <Image src='https://assets.interntheory.com/creative/home-logo/logo-19.png' alt='Error'></Image>
            <Image src='https://assets.interntheory.com/creative/home-logo/logo-20.png' alt='Error'></Image>
            <Image src='https://assets.interntheory.com/creative/home-logo/logo-21.png' alt='Error'></Image>
        </Grid>
       </Box>
       <Box mt={'50px'}>
       <h1>LET’S GET SOME<span style={{color:'red'}}> WORK EXPERIENCE</span></h1>
       <Grid fontSize={'25px'} w={'70%'} m='auto' templateColumns='repeat(4, 1fr)' gap={'10px'} justifyContent='center'>
          
            <Box bgColor={'#e4e2e3'} h={'200px'} display='flex' alignItems={'center'} gap='10px' borderRadius={'10px'} p={'20px'} _hover={{bgColor:'#f5ede6',cursor:'pointer'}}>
            <Box border={'3px solid red'} p='10px' borderRadius={'50%'} bgColor='white'>
           <Image borderRadius={'40%'} w={'100px'} src='https://tse1.mm.bing.net/th?id=OIP.EMgPSmGGnR_sSzTQ49jjMwHaHa&pid=Api&P=0' alt='Error'/>
           </Box> 
           <Text>MARKETING</Text>
           </Box>
           <Box bgColor={'#e4e2e3'} h={'200px'} display='flex' alignItems={'center'} gap='10px' borderRadius={'10px'} p={'20px'}_hover={{bgColor:'#f5ede6',cursor:'pointer'}}>
           <Box border={'3px solid red'} p='10px' borderRadius={'50%'} bgColor='white'>
           <Image borderRadius={'40%'} w={'100px'} src='https://tse3.mm.bing.net/th?id=OIP.71XjYR-lZRozN0JmDfXGtQHaHa&pid=Api&P=0' alt='Error'/>
           </Box> 
           <Text textAlign={'left'}>BUSINESS DEVELOPMENT</Text>
           </Box>
           <Box bgColor={'#e4e2e3'} h={'200px'} display='flex' alignItems={'center'} gap='10px' borderRadius={'10px'} p={'20px'}_hover={{bgColor:'#f5ede6',cursor:'pointer'}}>
           <Box border={'3px solid red'} p='25px' borderRadius={'50%'} bgColor='white'>
           <Image  w={'70px'} h='70px' src='https://tse2.mm.bing.net/th?id=OIP.bhQn-MdHmQwjtDrZQ1gsUQHaMI&pid=Api&P=0' alt='Error'/>
           </Box> 
           <Text textAlign={'left'}>CONTENT WRITING</Text>
           </Box>
           <Box bgColor={'#e4e2e3'} h={'200px'} display='flex' alignItems={'center'} gap='10px' borderRadius={'10px'} p={'20px'}_hover={{bgColor:'#f5ede6',cursor:'pointer'}}>
           <Box border={'3px solid red'} p='10px' borderRadius={'50%'} bgColor='white'>
           <Image borderRadius={'40%'} h='100px' w={'110px'} src='https://tse1.mm.bing.net/th?id=OIP.BSObgFiIueMCFWYngBzjuAHaHy&pid=Api&P=0' alt='Error'/>
           </Box>  
           <Text textAlign={'left'}>GRAPHIC DESIGN</Text>
           </Box>
           <Box bgColor={'#e4e2e3'} h={'200px'} display='flex' alignItems={'center'} gap='10px' borderRadius={'10px'} p={'20px'}_hover={{bgColor:'#f5ede6',cursor:'pointer'}}>
           <Box border={'3px solid red'} p='10px' borderRadius={'50%'} bgColor='white'>
           <Image borderRadius={'40%'} w={'100px'} src='https://tse4.mm.bing.net/th?id=OIP.GsLI48__LzrS0j1BLCQTAgHaHa&pid=Api&P=0' alt='Error'/>
           </Box> 
           <Text>FINANCE</Text>
           </Box>
           <Box bgColor={'#e4e2e3'} h={'200px'} display='flex' alignItems={'center'} gap='10px' borderRadius={'10px'} p={'20px'}_hover={{bgColor:'#f5ede6',cursor:'pointer'}}>
           <Box border={'3px solid red'} p='10px' borderRadius={'50%'} bgColor='white'>
           <Image borderRadius={'40%'} w={'100px'} src='https://tse3.mm.bing.net/th?id=OIP.3EivLrJXbvopazqf_F2oYgHaH1&pid=Api&P=0' alt='Error'/>
           </Box>  
           <Text textAlign={'left'}>HUMAN RESOURCE</Text>
           </Box>
           <Box bgColor={'#e4e2e3'}  h={'200px'} display='flex' alignItems={'center'} gap='10px' borderRadius={'10px'} p={'20px'}_hover={{bgColor:'#f5ede6',cursor:'pointer'}}>
           <Box border={'3px solid red'} p='10px' borderRadius={'50%'} bgColor='white'>
           <Image borderRadius={'40%'} w={'100px'} src='https://tse3.mm.bing.net/th?id=OIP.wbUo1fbMRa2336W_rGcO8wHaHa&pid=Api&P=0' alt='Error'/>
           </Box> 
           <Text>ENGINEERING</Text>
           </Box>
           <Box bgColor={'#e4e2e3'} h={'200px'} display='flex' alignItems={'center'} gap='10px' borderRadius={'10px'} p={'20px'}_hover={{bgColor:'#f5ede6',cursor:'pointer'}}>
           <Box border={'3px solid red'} p='10px' borderRadius={'50%'} bgColor='white'>
           <Image borderRadius={'40%'} w={'100px'} src='https://tse3.mm.bing.net/th?id=OIP.S2UPqdHdN4Vgi93KjW7wdQAAAA&pid=Api&P=0' alt='Error'/>
           </Box>  
           <Text textAlign={'left'}>ALL INTERNSHIPS</Text>
           </Box>
          
       </Grid>
       </Box>
       <Box mt={'50px'} pt='20px' pb={'80px'} bgColor='#eeeeee'>
       <h1>HOW ABOUT<span style={{color:'red'}}> UPSKILLING ?</span></h1>
       <Grid fontSize={'25px'} w={'85%'} m='auto' templateColumns='repeat(3, 1fr)' gap={'20px'} justifyContent='center'>
        <Box background='url(https://tse4.mm.bing.net/th?id=OIP.GGpGQ15p3exUCr-2mF6k3AHaEL&pid=Api&P=0) center/cover no-repeat' borderRadius={'10px'}>
        <h4 style={{textAlign:'left',color:'white',marginTop:'100px',marginLeft:'20px'}} >Learn How To Trade Online.<br/> Become A Certified<br/> <span style={{backgroundColor:'red',color:'white',padding:'0px 10px'}}>STOCK TRADER</span></h4>
        </Box>
        <Box   background='url(https://tse3.mm.bing.net/th?id=OIP.s7N5xsBaykrsnpjEpfgQIwHaEo&pid=Api&P=0) center/cover no-repeat' borderRadius={'10px'}>
        <h4 style={{textAlign:'left',color:'white',marginTop:'100px',marginLeft:'20px'}}>Be Job Ready With Our<br/> <span style={{backgroundColor:'red',color:'white',padding:'0px 10px'}}>DIGITAL MARKETING</span><br/>Online Course!</h4>
        </Box>
        <Box   background='url(https://tse3.mm.bing.net/th?id=OIP.LEAJ_eA8v4eVAbPFsY7tJQHaEQ&pid=Api&P=0) center/cover no-repeat' borderRadius={'10px'}>
        <h4 style={{textAlign:'left',color:'white',marginTop:'100px',marginLeft:'20px'}}>Always Browse Websites?<br/> NOW<br/> <span style={{backgroundColor:'red',color:'white',padding:'0px 10px'}}>MAKE</span><br/>ONE!</h4>
        </Box>
       </Grid>
       </Box>
       <Box display={'flex'} w='60%' margin={'auto'} mt='50px' alignItems={'center'} textAlign='left' gap={'130px'}>
        <Image w='300px' src='https://assets.interntheory.com/creative/chart.png' alt="Error"/>
        <Box>
        <h1 style={{marginBottom:'0px'}}>WE ARE CONSTANTLY<span style={{color:'red'}}> GROWING </span></h1>
        <hr/>
        <Text mt={'0px'}>We are on a mission to help every student in India. Upgrading your CV and getting you a meaningful job remains our sole motive and we are not stopping anytime soon.</Text>
        </Box>
       </Box>
       <Slider/>
       </Container>
        </>
    )
}