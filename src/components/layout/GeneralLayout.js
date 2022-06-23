//styles
import './GeneralLayout.css';

const GeneralLayout = ({ children }) => {
  return (
    <main className='general-layout'>
      {children}
    </main>
  );
};

export default GeneralLayout;
