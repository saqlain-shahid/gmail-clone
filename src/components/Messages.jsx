import React, { useEffect, useState } from 'react'
import Message from './Message'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { setEmails } from '../redux/appSlice'

const Messages = () => {
    const dispatch = useDispatch()
    const {searchText, emails } = useSelector(store => store.appSlice)
    const [tempEmail, setTempEmail] = useState(emails)


    useEffect(()=> {
        const q = query(collection(db, 'emails'), orderBy('createdAt', 'desc'))
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const allEmails = snapshot.docs.map((doc) => ({...doc.data(), id:doc.id}))
            
            dispatch(setEmails(allEmails))
        })
        //cleanup 
        return () => unsubscribe()
    },[])

    useEffect(() => {
        const filteredEmail = emails?.filter((email) => {
            return email?.subject?.toLowerCase().includes(searchText.toLowerCase()) || 
                   email?.to?.toLowerCase().includes(searchText.toLowerCase()) || 
                   email?.message?.toLowerCase().includes(searchText.toLowerCase())
        })
        setTempEmail(filteredEmail)
    },[searchText, emails])
  return (
    <div>
        {
            tempEmail && tempEmail?.map((email,idx) =>  <Message email={email}/>)
        }
    </div>
  )
}

export default Messages