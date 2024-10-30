import  ContactList  from './components/ContactList'
import './App.css'
import { useState } from "react";
import ContactRow from './components/ContactRow';


function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
    return (
      <>
        {selectedContactId ? (
          <>
         <div>Selected Contact View</div>
         
         <a href="/">Back</a>
  
         </>
       ) : (
         <ContactList setSelectedContactId={setSelectedContactId}/>
        )}
    
      </>
    );
  }

 

export default App
