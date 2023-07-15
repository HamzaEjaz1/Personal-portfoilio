import Image from 'next/image'
import {BsMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle  , AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'
import profile from '../public/profile.png'
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'

import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'
import { FaFacebook , FaTwitter ,FaInstagram ,FaLinkedin, FaVoicemail, FaPhone } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'


export default function Home() {
 
  return (
  
 
 
 <main>
 <section className='min-h-screen px-10 md:px-20 lg:px-40'>
 <nav className='px-10 py-10 flex justify-between'>
 <h2 className='text-xl'>Hamza Ejaz</h2>
 <ul className='flex items-center'>
 <li><BsMoonStarsFill className='text-2xl cursor-pointer'/></li>
 <li><a href='#' className='bg-gradient-to-r from-cyan-500 to-teal-500 px-4 rounded py-2 ml-8 text-white'>Resume</a></li>
 </ul>
 </nav>
 <div className='text-center pt-10 px-10'>
<h2 className='text-5xl md:text-6xl py-2 text-teal-600 font-medium'>Hamza Ejaz</h2>
<h3 className='text-2xl md:text-3xl py-2'>Developer and Designer</h3>
<p className='text-md py-5 leading-8 md:text-xl text-gray-800 max-w-lg mx-auto '>Freelancer providing services  for programming and design content needs. Join me down below let's get cracking!</p>



 </div>
 <div className='text-5xl flex justify-center gap-5 py-2 text-gray-600'>
 <AiFillInstagram/>
 <AiFillTwitterCircle/>

 <AiFillLinkedin/>

 </div>
 
<div className='relative bg-gradient-to-b  mx-auto from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
<Image src={profile} layout='fill' objectFit='cover'/>
</div>


 </section>
 

<section className='mx-10'>
<div className='mx-10'>
<h3 className='text-3xl pt-16  '>Services I offer</h3>
<p className='text-md py-2 leading-8 text-gray-800'>
Since the beginning of my journey as a freelance design developer , I 've done remote work for
<span className='text-teal-500'> agencies </span>consulte
for 
<span className='text-teal-500'> startups </span> and callaborated with talanted people to create digital product for both bussiness and consumer use.

</p>
<p className='text-md py-2 leading-8 text-gray-800'>
I offer from a wide range of services including brands and programming and teaching</p>

</div>

<div className='lg:flex gap-10'>
<div className='text-cneter shadow-lg p-10 rounded-xl my-10'>
<Image src={design} width={100} height={100} className='mx-auto' />
<h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs </h3>
<p className='text-sm font-thin'>Creating elegant design suited for your needs following core design.</p>

<h4 className='text-lg'>Design tool I use</h4>
<p>Photoshop</p>
<p>illustrator</p>
<p>Figma</p>
</div>


<div className='text-cneter shadow-lg p-10 rounded-xl my-10'>
<Image src={consulting} width={100} height={100} className='mx-auto' />
<h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs </h3>
<p className='text-sm font-thin'>Creating elegant design suited for your needs following core design.</p>

<h4 className='text-lg'>Design tool I use</h4>
<p>Photoshop</p>
<p>illustrator</p>
<p>Figma</p>
</div>


<div className='text-cneter shadow-lg p-10 rounded-xl my-10'>
<Image src={code} width={100} height={100} className='mx-auto' />
<h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs </h3>
<p className='text-sm font-thin'>Creating elegant design suited for your needs following core design.</p>

<h4 className='text-lg'>Design tool I use</h4>
<p>Photoshop</p>
<p>illustrator</p>
<p>Figma</p>
</div>










</div>

</section>

<section className='mx-10'>
<div className='mx-10'>
<h3 className='text-3xl pt-16  '>Portfolio</h3>
<p className='text-md py-2 leading-8 text-gray-800'>
Since the beginning of my journey as a freelance design developer , I 've done remote work for
<span className='text-teal-500'> agencies </span>consulte
for 
<span className='text-teal-500'> startups </span> and callaborated with talanted people to create digital product for both bussiness and consumer use.

</p>
<p className='text-md py-2 leading-8 text-gray-800'>
I offer from a wide range of services including brands and programming and teaching.</p>

</div>

<div className='flex flex-col gap-10 py-10 lg:flex-row  md:flex-wrap'>
<div className='basis-1/3 flex-1'>
<Image src={web1} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive'/>
</div>
<div className='basis-1/3 flex-1'>
<Image src={web2} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive'/>
</div>
<div className='basis-1/3 flex-1'>
<Image src={web3} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive'/>
</div>
<div className='basis-1/3 flex-1'>
<Image src={web4} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive'/>
</div>
<div className='basis-1/3 flex-1'>
<Image src={web5} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive'/>
</div>
<div className='basis-1/3 flex-1'>
<Image src={web6} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive'/>
</div>

</div>

</section> 

<section>
<div className='bg-gray-100 max-w-full py-5 min-h-[100vh]' id="contactus">
<h1 className='text-center text-3xl pt-10'>Contact us </h1>
<hr className='w-1/12 mx-auto border-t-[4px]  border-0 font-bold mb-5 border-red-500 '/>
<p className='text-center md:px-36 sm:px-25 py-5'>Do you have any questions? or want to share any idea? reach out and we'll see how we can assist.</p>

<div className="md:flex justify-between   md:px-36  sm:block ">
<div className='mails  w-1/2  mr-10'>
<div className='bg-red flex w-full '>
<div className='bg-white px-5 py-3  '><FaFacebook className='text-orange-600 text-[82px] border-dotted border-2 border-orange-400 rounded-full py-5'/><p className='text-gray-500 text-center mt-2'>Facebook</p>
</div>
<div className='bg-white px-5 py-3  '><FaLinkedin className='text-orange-600 text-[82px] border-dotted border-2 border-orange-400 rounded-full py-5'/><p className='text-gray-500 text-center mt-2'>Linkedin</p>
</div>
<div className='bg-white px-5 py-3  '><FaTwitter className='text-orange-600 text-[82px] border-dotted border-2 border-orange-400 rounded-full py-5'/><p className='text-gray-500 text-center mt-2'>Twitter</p>
</div>
<div className='bg-white px-5 py-3  '><FaInstagram className='text-orange-600 text-[82px] border-dotted border-2 border-orange-400 rounded-full py-5'/><p className='text-gray-500 text-center mt-2'>Instagram</p>
</div>

</div>
<div className='flex justify-between my-7  '>
<div  className='bg-white px-12  md:w-1/2 sm:w-full mr-3  text-center py-20 '><a href='mailto:hamzaejaz0771@gmail.com'>
<AiOutlineMail className='text-orange-600 w-full text-[82px] text-center border-dotted border-2 border-orange-400 rounded-full py-5'/><p className='text-gray-500 text-center mt-2'>Email</p>
<p className='text-sm font-thin'>hamzaejaz0771@gmail.com</p>
</a>

</div>
<div  className='bg-white px-12  md:w-1/2 sm:w-full mr-3  text-center py-20 '><a href='tel:+9203118203633'>
<FaPhone className='text-orange-600 w-full text-[82px] text-center border-dotted border-2 border-orange-400 rounded-full py-5'/><p className='text-gray-500 text-center mt-2'>Phone</p>
<p className='text-sm font-thin'>+9203118203633</p>
</a>

</div>

</div>
</div>


<div className='forms bg-white md:w-1/2 sm:w-full ml-5 px-8 py-10'>
<div className='flex justify-between items-center'>
<form >
<label className="w-full ">Name</label>
<input type="text" name="user_name" className="w-full px-5 py-2 my-2 bg-transparent border-2 rounded border-gray-300" />
<label className="w-full">Your Email</label>
<input type="email" name="user_email" className="w-full px-5 py-2 my-2 bg-transparent border-2 rounded border-gray-300" />
<label className="w-full">Message</label>
<textarea name="message" className="w-full px-4 py-2 resize-none border-2 rounded border-gray-300" rows="5" cols="5" />
<input type="submit" value="Send Message" className="w-full px-5 py-2 my-2 bg-orange-600 text-white" />
</form>
</div>
</div>

</div>

</div>

</section>

 
 </main>
  )
}
