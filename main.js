// console.log ("test1")
function contactFactory(contactData) {
    let contact = {
      name: "",
      title: "",
      email: ""
    }

    for (let i=0; i < contactData.length; i++) {
       ///add each arry item to contact
       if (i === 0) {
        // contact.name.push(contactData[i]);
        contact.name = contactData[i];
    }
    else if (i === 1) {
        // contact.title.push(contactData[i]);
        contact.title = contactData[i];
    }
    else if (i === 2) {
        // contact.email.push(contactData[i]);
        contact.email = contactData[i];
    }
     }
    //  console.log("test2")
    return contact
  }


  // console.log ("test3")
  function createContact(name, title, email) {
    /// pass name, title, email to contactFactory as an array
    const newContact = contactFactory(name, title, email) 
    console.table(newContact)
  };
createContact(["bob", "management", "bob@email"])
  // createContact ();