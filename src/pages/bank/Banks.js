import { useState } from 'react';

//styles
import './Banks.css'

//images
import search from '../../assets/search.svg'

//bank data
import { banklist } from './banklist';

//components
import BankModal from '../../components/bankmodal/BankModal';
import GeneralLayout from '../../components/layout/GeneralLayout';
import CondueetLogo from '../../components/condueet-logo/CondueetLogo';

export default function Banks() {
  const [id, setId] = useState(null);
  const [modal, setModal] = useState(false);

  //search states
  const [searchedBanks, setSearchedBank] = useState('');

  //search function
  const filteredbanks = banklist.filter((bank) => {
    if(searchedBanks === ''){
        return bank;
    }else{
        return bank.name.toLowerCase().includes(searchedBanks)
    }
  })

  //open modal
  const openModal = (index) => {
    setId(index);
    setModal(true)
  }
    
  //close the modal
  const handleClose = () => {
    setModal(false)
  }

  console.log("filter>>>", searchedBanks)
  return (
    <GeneralLayout>
        <section className='banks'>
            <div className="banks-wrap">
                    <div className="banks-logo"><CondueetLogo /></div>
                    <div className="banks-container">
                        <div className="input_container">
                            <input   
                              type="search" 
                              onChange={(e) => setSearchedBank(e.target.value.toLowerCase())} 
                              placeholder='Search for your bank' 
                            />
                            <img src={search} alt="search" />
                        </div>
                        <h1>Choose your bank</h1>
                        <div className="banks-list_wrap">
                            {filteredbanks.map((bank, index) => (
                                <div onClick={() => openModal(index)} className='banks-list_item' key={bank.id}>
                                    <img src={bank.logo} alt="logo" />
                                    <p>{bank.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
            </div>
            { modal && <BankModal handleClose={handleClose} id={id}/> }
        </section>
    </GeneralLayout>
   
  )
}
