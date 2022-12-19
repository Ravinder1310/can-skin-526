import { Box, Container,Image,Text } from "@chakra-ui/react"
import ShareIcon from '@mui/icons-material/Share';


export default function Graphic(){
 
    let data = [
        {
            img: "https://assets.interntheory.com/creative/logo.png",
            title: "Develop Your Skillset",
            program: "Online Skill Development Programs",
            t2: "Taught by Industry Experts Internship",
            t3: "Certified Courses",
            t4: "Guaranteed Internship Opportunities",
            salary: "Learn Industry-Demanded Skills",
            duration: "4-6 Weeks",
            logo: "https://www.interntheory.com/courses?utm_source=internshipslist&utm_medium=webpage",
            apply: "Upgrade Skills"
          },
          {
            img: "https://assets.interntheory.com/uploads/company/logos/c4b5507cf76626e428794195ca4ad5999913a027.jpg",
            title: "Graphic Intern",
            program: "Listed Fans",
            t2: "Full Time Internship",
            t3: "Graphic Designing",
            t4: "Delhi",
            salary: "15000 per month",
            duration: "1 week",
            logo: "https://www.interntheory.com/internship/marketing-internship-at-laugh-out-loud-ventures-mcc6w",
            apply: "View And Apply"
          }
    ]

    return (
        <>
        <Container w='80%' margin={'auto'} mt={'50px'} fontFamily={'sans-serif'}>
            <Box display={'flex'} justifyContent='space-between'>
                <Image boxShadow=' rgba(0, 0, 0, 0.24) 0px 3px 8px' w={'400px'} h='500px' src= 'https://assets.interntheory.com/creative/Internship_left_course_add_02.png' alt='Error' />
                <Box textAlign='left' w={'60%'} boxShadow=' rgba(0, 0, 0, 0.24) 0px 3px 8px' p='10px 20px'>
                    <Text fontSize={'25px'}>Marketing Internships</Text>
                    {
                       data.map(({img,title,program,t2,t3,t4,salary,duration,logo,apply})=>(
                        <Box>
                          <Box display={'flex'} textAlign='left' alignItems={'center'} justifyContent='space-between' mb={'30px'}>
                             
                             <Box display={'flex'} justifyContent={'space-between'} w={'100%'} alignItems='center'>
                            <Box display={'flex'} justifyContent='space-between' alignItems={'center'}>
                             <Image src={img} w='110px' h={'60px'} alt='Error'/>
                                <Box ml={'20px'}>
                                    <Text fontSize={'20px'}>{title}</Text>
                                    <Text fontSize={'16px'}>{program}</Text>
                                    <Text fontSize={'14px'} color='grey'>{t2}</Text>
                                    <Text fontSize={'14px'} color='grey'>{t3}</Text>
                                    <Text fontSize={'14px'} color='grey'>{t4}</Text>
                                    
                                    <Text>Salary:- {salary}</Text>
                                </Box>
                                </Box>
                                <Box>
                                    <Text color={'grey'}>{duration}</Text>
                                    <Box ml={'25px'} _hover={{cursor:'pointer'}}>
                                    <ShareIcon/>
                                    </Box>
                                    <Text color={'blue'} fontSize='15px' _hover={{cursor:'pointer'}}>{apply}</Text>
                                </Box>
                             </Box>
                          </Box>
                          <hr style={{marginTop:'-20px', border:'1px dotted grey'}}/>
                          </Box>
                        ))
                    }
                    <Text textAlign={'center'}>End of search results.</Text>
                </Box>
                
            </Box>
        </Container>
        </>
    )
}