import Image from 'next/image'
import Pic from '../../public/Images/image-qr-code.png'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <main className='main'>
      <div className="container">
        <div className="card">
          <Image
           src={Pic}
           alt="QR-Code picture"
           className='image'
          />
          <div className='text'>
            <h3><b>Improve your front end skills by building projects</b></h3>
            <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
          </div>
        </div>
      </div>
     </main> 
     <footer className="attribution"><b>
     Challenge by <Link href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</Link>. 
     Coded by <Link href="#">Khushi Wala (Victory)</Link>.</b>
   </footer>
   </>
  )
}
