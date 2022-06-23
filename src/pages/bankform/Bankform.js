import { useParams } from 'react-router-dom';

//styles
import './BankForm.css';

//bank list
import { banklist } from '../bank/banklist';

//components
import GeneralLayout from '../../components/layout/GeneralLayout';

export default function BankForm() {
  const { id } = useParams();

  return (
    <GeneralLayout>
        <section className='bankform'>
            <div 
                className="bankform-wrap"
                style={{
                    backgroundColor: `${banklist[id].pColor}`
                }}
            >
                <div className="bankform-logo">
                    <img src={banklist[id].xlogo} alt="" />
                </div>
                <form className='bankform-form'>
                    <label>
                        <span>Username</span>
                        <input
                         type="text" 
                         required
                        />
                    </label>
                    <label>
                        <span>Password</span>
                        <input
                         type="password" 
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
