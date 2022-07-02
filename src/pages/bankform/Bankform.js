import { useParams, useLocation, useNavigate  } from 'react-router-dom';


//styles
import './BankForm.css';

//bank list
import { banklist } from '../bank/banklist';

//components
import GeneralLayout from '../../components/layout/GeneralLayout';
import { useEffect } from 'react';

export default function BankForm() {
  const { id } = useParams();

    //react dom states
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
      if(!location.state) {
        navigate("/")
      }
    }, [])

  return (
    <GeneralLayout>
        <section className='bankform'>
            <div 
              className="bankform-wrap"
              style={{
                // backgroundColor: `${banklist[id].pColor}`
              }}
            >
                <div className="bankform-logo">
                    <img src={banklist[id].xlogo} style={{
                        border: `2px solid ${banklist[id].sColor}`
                    }} alt="" />
                </div>
                <form className='bankform-form'>
                    <label>
                        {/* <span>Username</span> */}
                        <input
                         type="text" 
                         placeholder='Username'
                         required
                        />
                    </label>
                    <label>
                        {/* <span>Password</span> */}
                        <input
                         type="password" 
                         placeholder='Password'
                         required
                        />
                    </label>
                    <button
                      style={{
                        backgroundColor: `${banklist[id].sColor}`
                      }}
                    >Login</button>
                </form>
            </div>
        </section>
    </GeneralLayout>  
  )
}
