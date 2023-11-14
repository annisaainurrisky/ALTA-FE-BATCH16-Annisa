import facebook from '../assets/facebook.svg'
import google from '../assets/google.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'

const Footer = () => {
  return (
    <footer className="w-full min-h-[30vh] bg-white">
      <div className="flex flex-col items-center container p-6 h-full gap-2">
        <p className="text-2xl font-bold">Library App</p>
        <p className="text-slate-500">LibraryApp is a social media-based digital library application equipped with an eReader for reading ebooks.</p>
        <div className="flex flex-row gap-2">
          <img src={facebook} alt="facebook" className='w-10' />
          <img src={google} alt="google" className='w-10'/>
          <img src={instagram} alt="instagram" className='w-11' />
          <img src={twitter} alt="twitter" className='w-13' />
        </div>
        <p>Copyright &copy;2023 LibraryApp</p>
      </div>
    </footer>
  );
};

export default Footer;
