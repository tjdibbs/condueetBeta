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
  //stores the index of the objects in the array
  const [id, setId] = useState(null);
  //controls the display of the modal
  const [modal, setModal] = useState(false);

  //search states(stores the value of the input text)
  const [searchedBanks, setSearchedBank] = useState('');

  //search function, maps through the banks name and returns the arrays that match the input search
  const filteredbanks = banklist.filter((bank) => {
    if(searchedBanks === ''){
        return bank;
    }else{
        return bank.name.toLowerCase().includes(searchedBanks)
    }
  })

  //open modal function
  /*
  it also takes the index of the mapped array and stores it in a state
  that is passed to the Modal component as a prop
  */
  const openModal = (index) => {
    setId(index);
    setModal(true)
  }
    
  //closes the modal
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
          {/* modal component takes the handleclose function and id(index) of the object in the array as a prop */}
          { modal && <BankModal handleClose={handleClose} id={id}/> } 
        </section>
    </GeneralLayout>
   
  )
}
