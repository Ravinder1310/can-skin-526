import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Image,Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {

 const data = [
    {
        img:'https://assets.interntheory.com/img/testimonial-image/in2.jpg',
        name:'Siddharth Viyyapu',
        job:'Intern at Gooseberry Homes',
        discription:'"I created my profile because I had before Intern Theory, not come across a consultancy that would execute the responsibility of getting a result for your application irrespective of being failure or success the way they did. They have set the bars really high! Kudos team!"'
    },
    {
        img:'https://assets.interntheory.com/img/testimonial-image/in3.jpg',
        name:'Amani Nagda',
        job:'Intern at Viacom18',
        discription:'"I was on a look out for an internship to spend my summer productively and I stumbled upon Inter Theory. Their team was very kind and kept me updated. I applied for Viacom18 and got through. I thank Intern Theory team for giving me this opportunity."'
    },
    {
        img:'https://assets.interntheory.com/img/testimonial-image/in1.jpg',
        name:'Sshikha Bodwaani',
        job:'Sr. Exec. HR at BookMyShow',
        discription:'"We have been using InternTheory for over a year now and are very happy with the quality of applications that we receive. Their team has been very helpful in screening applications for the various internship requirements we had. It has been a delight working with them."'
    },
    {
        img:'https://assets.interntheory.com/img/testimonial-image/in4.jpg',
        name:'Harshil Bhadra',
        job:'Intern at Porsche',
        discription:'"If you are more than satisfied with a particular product/firm who gives you more than you expect then there’s no need to find a substitute. Its similar with Intern Theory, the best team who makes continuous efforts and always ready to help! Thanks for giving me the best start."'
    }
 ]

  return (
    <>
    <Box>

      <Swiper
        // spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        // justifyContent='center'
        
      >

       {
        data.map(({name,img,job,discription})=>(
           <SwiperSlide>
            <Box 
            borderTopRightRadius={'50px'} 
            borderBottomLeftRadius='50px' 
            w={'60%'} 
            display={'flex'} 
            ml='60px' 
            mr={'60px'} 
            mt="40px" 
            border='1px solid black' 
            p={'10px 10px'} 
            bgColor='white' 
            alignItems='center'
            >

                <Box p={'20px'} w='600px' textAlign={'center'}>
                   <Image m={'auto'}  src={img} alt='Error'/>
                   <Text>{name}</Text>
                   <Text color={'blue'}>{job}</Text>

                </Box>
                <Box bgColor={'grey'} h={'200px'} ml='40px' border='0.1px solid grey' mr={'10px'}></Box>
                <Text fontSize={'20px'}>{discription}</Text>
            </Box>
           </SwiperSlide>
        ))
       }  
      </Swiper>
    </Box>
    </>
  );
}