import React from 'react';
import  { useState, useEffect } from 'react';

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {


    const [contact, setContact] = useState(null);
    useEffect(() => {
    const fetchContact = async () => {
    try {
    const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
    const data = await response.json();
    setContact(data);
    } catch (error) {
    console.error('Error fetching contact:', error);
    }
    };
    fetchContact();
    }, []);
    return (
        
        <div>
        {contact ? (
            <div>
                <h1>{contact.name}</h1>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
                <a href='/' onClick={() => setSelectedContactId(null)}>Back</a>
                </div>
                ) : ( 
                <>
                </>
   
        )}
        </div>
    )
};

    export default SelectedContact;