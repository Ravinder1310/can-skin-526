import { Box,Checkbox,Input,Select,Stack,Text,Image, Grid } from "@chakra-ui/react";
import SelectTags from "./selectTags";


export default function Home(){
    return (
        <>
       <Box bgGradient='https://tse2.explicit.bing.net/th?id=OIP.oYQ2ibd7FVbESfu9-iMGWwHaE8&pid=Api&P=0'>
        <h1>Let's Get You <span style={{backgroundColor:'red',color:'white',padding:'0px 10px'}}>Ready</span></h1>
        <Text fontSize={'25px'}>The One Stop to Upgrade Your Resume. Expand Your Skillset. Do An Internship. Get Placed</Text>
        <Box>
           <SelectTags/>
        </Box>
       </Box>
       <Box display={'flex'} w='75%' margin={'auto'} alignItems='center' gap={'150px'} mt="70px">
        <Box textAlign='left' fontSize={'13px'}>
        <h1>PLETHORA OF OPPORTUNITIES<span style={{color:'red'}}> FOR YOU</span></h1>
        <hr style={{marginTop:'50px'}}/>
        <Text fontSize={'25px'}>We are on a mission to connect employers to young talent all over India. With our strong corporate network, it will no longer be a challenge to find the right internship for you</Text>
        </Box>
        <Grid templateColumns='repeat(5, 100px)' gap={'20px'} w='550px' h='450px'>
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
        </>
    )
}