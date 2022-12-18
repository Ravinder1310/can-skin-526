import { Box, Container,Image,Text } from "@chakra-ui/react"
import ShareIcon from '@mui/icons-material/Share';



export default function Internship(){

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
          img: "https://assets.interntheory.com/uploads/company/companylogos/62362fbf882221470f099d8d0a119df93ce19831/7e34b7356b30b3696d14fcab94c6e8989a42fd69com.jpg",
          title: "Marketing Ambassador  - Work from Home",
          program: "Laugh Out Loud Ventures",
          t2: "Work From Home Internship",
          t3: "marketing",
          t4: "bangalore,chennai,delhi ,",
          salary: "3000 - 10000 per month",
          duration: "3 weeks left",
          logo: "https://www.interntheory.com/internship/marketing-internship-at-laugh-out-loud-ventures-mcc6w",
          apply: "View And Apply"
        },
        {
          img: "https://assets.interntheory.com/uploads/company/companylogos/ff1f92acc57c59e5fdad716afcdcd16957b5cacb/954070775ec488151cfc622d2328556f7055d075com.jpg",
          title: "Influencer Marketing Interns",
          rogram: "OutCry Entertainment",
          t2: "Full Time Internship",
          t3: "marketing",
          t4: "mumbai",
          salary: "5000 - 15000 per month",
          duration: "5 days left",
          logo: "https://www.interntheory.com/internship/marketing-internship-at-outcry-entertainment-xwocm",
          apply: "View And Apply"
        },
       
        {
          img: "https://assets.interntheory.com/uploads/company/logos/348ebc3e1dc80c206c4ac8af46f90db576813b9d.jpg",
          title: "Social Media Marketing Intern",
          program: "OutCry Entertainment",
          t2: "Full Time Internship",
          t3: "marketing",
          t4: "mumbai",
          salary: "5000 - 15000 per month",
          duration: "5 days left",
          logo: "https://www.interntheory.com/internship/marketing-internship-at-outcry-entertainment-boxhx",
          apply: "View And Apply"
        },
        
        {
          img: "https://assets.interntheory.com/uploads/company/companylogos/c22171e9ccc3eaa1f43a19d86be801e0341c4999/2f0c5644573472744e5586f69fb778f0959edfd7com.jpg",
          title: "Event Marketing & Sales intern",
          program: "OutCry Entertainment",
          t2: "Full Time Internship",
          t3: "marketing",
          t4: "mumbai",
          salary: "5000 - 15000 per month",
          duration: "5 days left",
          logo: "https://www.interntheory.com/internship/marketing-internship-at-outcry-entertainment-gxz8b",
          apply: "View And Apply"
        },
        {
          img: "https://assets.interntheory.com/uploads/company/logos/6efdff45626352708533d4a6021e909ca9c33925.jpg",
          title: "Marketing Ambassador  - Work from Home",
          program: "Laugh Out Loud Ventures",
          t2: "Work From Home Internship",
          t3: "marketing",
          t4: "bangalore,chennai,delhi ,",
          salary: "3000 - 10000 per month",
          duration: "3 weeks left",
          logo: "https://www.interntheory.com/internship/marketing-internship-at-laugh-out-loud-ventures-mcc6w",
          apply: "View And Apply"
        },
        {
          img: "https://assets.interntheory.com/uploads/company/logos/ffbfff5bac8dc226409e82cfa8227fac6006e342.jpg",
          title: "Influencer Marketing Interns",
          rogram: "OutCry Entertainment",
          t2: "Full Time Internship",
          t3: "marketing",
          t4: "mumbai",
          salary: "5000 - 15000 per month",
          duration: "5 days left",
          logo: "https://www.interntheory.com/internship/marketing-internship-at-outcry-entertainment-xwocm",
          apply: "View And Apply"
        },
       
        {
          img: "https://assets.interntheory.com/uploads/company/logos/7b122f8459f847f0ae7c5a6f902a748944675bf9.jpg",
          title: "Social Media Marketing Intern",
          program: "OutCry Entertainment",
          t2: "Full Time Internship",
          t3: "marketing",
          t4: "mumbai",
          salary: "5000 - 15000 per month",
          duration: "5 days left",
          logo: "https://www.interntheory.com/internship/marketing-internship-at-outcry-entertainment-boxhx",
          apply: "View And Apply"
        },
        
        {
          img: "https://assets.interntheory.com/uploads/company/logos/ce621fc8bc71e12c2356f869eb640cdee89ce235.jpg",
          title: "Event Marketing & Sales intern",
          program: "OutCry Entertainment",
          t2: "Full Time Internship",
          t3: "marketing",
          t4: "mumbai",
          salary: "5000 - 15000 per month",
          duration: "5 days left",
          logo: "https://www.interntheory.com/internship/marketing-internship-at-outcry-entertainment-gxz8b",
          apply: "View And Apply"
        }
       ]

    return (
        <>
        <Container w='80%' margin={'auto'} mt={'50px'} fontFamily={'sans-serif'}>
            <Box display={'flex'} justifyContent='space-between'>
                <Image boxShadow=' rgba(0, 0, 0, 0.24) 0px 3px 8px' w={'400px'} h='500px' src= 'https://assets.interntheory.com/creative/Internship_left_course_add_01.png' alt='Error' />
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