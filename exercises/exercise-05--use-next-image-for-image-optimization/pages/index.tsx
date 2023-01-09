// ✍️ import the Image component from 'next/image'
import Image from 'next/image'

// ✍️ import "lazar.png" statically
import bhavana from '../profil.jpg'
const SUBSTACK_IMG="https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F01e086b5-933a-4545-8638-2878c48169e2_1278x643.png"
const Home = () => {
  return (

    <>
      <Image src={bhavana} alt ='bhavana' height={375} width = {250} />
      <Image 
        src ={SUBSTACK_IMG}
        alt = 'substack image'
        height = {250}
        width = {250}
      />
    
    
    </>
    
  )
}

export default Home
