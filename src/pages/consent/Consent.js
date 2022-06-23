import { useNavigate } from 'react-router-dom';

//styles
import './Consent.css';

//images
import privateImg from '../../assets/private.svg';
import securedImg from '../../assets/secured.svg';
import protectedImg from '../../assets/protected.svg';

//components
import GeneralLayout from '../../components/layout/GeneralLayout';
import CondueetLogo from '../../components/condueet-logo/CondueetLogo';

export default function Consent() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/banks');
  }
  return (
    <GeneralLayout>
        <section className="consent">
            <div className="consent-wrap">   
              <div className="consent-check">
              <div className="consent-logo"><CondueetLogo/></div>
                  <h1>Sync your account with Condueet</h1>
                  <div className="consent-check_item">
                    <img src={securedImg} alt="" />
                    <div className="consent-check_item-text">
                      <p>Secured</p>
                      <p>Your information is encrypted using bank grade security.</p>
                      </div>
                  </div>
                  <div className="consent-check_item">
                    <img src={protectedImg} alt="" />
                    <div className="consent-check_item-text">
                      <p>Protected</p>
                      <p>Your credentials will never be made accessible to Condueet.</p>
                      </div>
                  </div>
                  <div className="consent-check_item">
                    <img src={privateImg} alt="" />
                    <div className="consent-check_item-text">
                      <p>Private</p>
                      <p>Condueet doesn’t have access to move your funds.</p>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit}> 
                    <div className="consent-check_item">
                      <input type="checkbox" required />
                      <p>By clicking on the button below you agree to Condueet T&C.</p>
                    </div>
                  <button className='button'>Select Account</button>
                  </form>
              </div>
            </div>
        </section>
    </GeneralLayout>
  )
}
