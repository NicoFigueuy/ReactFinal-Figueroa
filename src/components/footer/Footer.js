import tikTok from "../../img/tikTok.png"
import facebookIcon from "../../img/facebookIcon.png"
import instagramIcon from "../../img/instagramIcon.png"
import laCocinaLogo from "../../img/logo la cocina.png"

function Footer() {
  return (
    
      <footer className="flex justify-around bg-rose-400 mt-16 h-48">
        <div className="w-4/12 self-center">
          <img src={laCocinaLogo} alt="logo la cocina" className=" self-center w-3/4 ml-16"/>
        </div>
        <div className=" flex justify-center w-4/12">
          <p className=" self-center font-semibold text-center text-white w-3/4 items-center">
            Todos los derechos reservados &copy; 2023 Tu Sitio Web. Términos y condiciones de uso.
            </p>
        </div>
        <div className="flex justify-end w-4/12 mr-16">
          <img  src={tikTok} alt="tic tok logo" className=" self-center w-1/12  cursor-pointer hover:scale-110" />
          <img src={facebookIcon} alt="facebook logo" className=" self-center w-1/12 cursor-pointer hover:scale-110" />
          <img src={instagramIcon} alt="instagram logo" className=" self-center  w-1/12 cursor-pointer hover:scale-110" />
        </div>
        
      
      </footer>
    
  )
}

export default Footer