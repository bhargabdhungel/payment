
import { useNavigate } from 'react-router-dom';
import myLogo from '../assets/logo.png'
export default function LogoCard(){
  const navigate = useNavigate();
  return (
    <a
      className="flex items-center cursor-pointer"
      onClick={()=>{
        navigate("/");
      }}
    >
      <img
        src={myLogo}
        className="h-10 w-10 rounded-full"
        alt="Payment App"
      />
    </a>
  );
}