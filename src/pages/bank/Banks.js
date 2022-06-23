import { Link } from 'react-router-dom';

//styles
import './Banks.css'

//images
import search from '../../assets/search.svg'

//bank data
import { banklist } from './banklist';

//components
import GeneralLayout from '../../components/layout/GeneralLayout';
import CondueetLogo from '../../components/condueet-logo/CondueetLogo';

export default function Banks() {
  console.log("banklist>>>", banklist)
  return (
    <GeneralLayout>
        <section className='banks'>
            <div className="banks-wrap">
                    <CondueetLogo />
                    <div className="banks-container">
                        <div className="input_container">
                            <input type="search" placeholder='Search for your bank' />
                            <img src={search} alt="search" />
                        </div>
                        <h1>Choose your bank</h1>
                        <div className="banks-list_wrap">
                            {banklist.map((bank, index) => (
                                <Link to={`/banks/${index}`} className='banks-list_item' key={bank.id}>
                                    <img src={bank.logo} alt="logo" />
                                    <p>{bank.name}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
            </div>
        </section>
    </GeneralLayout>
   
  )
}
