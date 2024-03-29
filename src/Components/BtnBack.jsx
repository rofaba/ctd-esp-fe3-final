import { useNavigate } from "react-router"

const BtnBack = () => {
  const navigate = useNavigate();
    
  return (
    <div> 
        <button onClick={() => navigate(-1)} className="btn-back">Volver</button>
    </div>
  )
}
export default BtnBack;