import  { useState, useEffect } from 'react'; 
import ContactRow from './ContactRow';


export default function ContactList({ setSelectedContactId }) { 
  const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  ];
  const [contacts, setContacts] = useState(dummyContacts);

  const apiUrl = 'https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users'
  
  useEffect(() => {
    const getData = async() => {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setContacts(data);
    }
    getData();
  },[]);
  
  return ( 
        <table>
          <thead>
            <tr>
              <th colSpan="3">Contact List</th>
            </tr>
          </thead>
          <tbody>
            <ContactRow contacts={contacts}/>
            {contacts && (

                   <td>
                     {contacts.map((contact) => (
                       <tr key={contact.id} onClick={() => setSelectedContactId(contact.id)}>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                        <td>{contact.phone}</td>
                         
                       </tr>
                     ))}
                     </td>
                   
                 
          )}
          </tbody>
        </table>
    ); 
}