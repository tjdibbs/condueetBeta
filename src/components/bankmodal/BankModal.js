import { Link } from 'react-router-dom';

//styles
import './BankModal.css';

//icons
import close from '../../assets/close.svg';
import internet from '../../assets/internet.svg';

//bank list
import { banklist } from '../../pages/bank/banklist';

export default function BankModal({id, handleClose}) {
  const banktext = <p className='internet-text_two'>Click here to use the credentials you use with your <span>{banklist[id].name}</span> internet banking</p>

  return (
    <div className='bankmodal'>
        <div className="bankmodal-wrap">
            <div className="bankmodal-img"><img src={close} alt="" onClick={handleClose} /></div>
            <p className='bankmodal-text'>Choose a login method</p>
            <div className="bankmodal-loginmethod">
                <Link to={`/banks/${id}`} className="loginmethod-internet">
                    <img src={internet} alt="close button"/>
                    <div className="internet-text">
                        <p>Login with internet banking</p>
                        {banktext}
                        {/* <p>{`Click here to use the credentials you use with your ${banklist[id].name} internet banking`}</p> */}
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

//to={`/banks/${index}`}