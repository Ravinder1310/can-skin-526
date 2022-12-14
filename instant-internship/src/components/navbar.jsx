import { HamburgerIcon,Icon } from '@chakra-ui/icons'
import { Button, Image } from '@chakra-ui/react'

export default function Navbar(){
    return (
        <>
        <div style={{border:'1px solid red',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div style={{display:'flex',justifyContent:'space-between'}}>
            <Icon as={HamburgerIcon} boxSize={40} />
            <Image boxSize='200px' src='../images/logo.png' alt='Error' />
            </div>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <Image boxSize='70px'  src='https://tse2.mm.bing.net/th?id=OIP.UaVAH7RRBW8BYQ4T_wBxYgAAAA&pid=Api&P=0' alt='Error'/>
                <Button p='15px' fontSize='20px' bgColor='red' color='white' border='transparent' borderRadius="8px" colorScheme='teal' size='lg'>SIGN IN</Button>
            </div>
        </div>
        </>
    )
}