    import { signInWithPopup } from 'firebase/auth'
    import React from 'react'
    import GoogleButton from 'react-google-button'
    import { auth, provider } from '../firebase.js'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/appSlice.js'

    const Login = () => {
        const dispatch = useDispatch()
        const signInWithGoogle = async() => {
            try {
                const res = await signInWithPopup(auth, provider)
                console.log(res)
                dispatch(setUser({
                    displayName:res.user.displayName,
                    email:res.user.email,
                    photoURL:res.user.photoURL
                }))
            } catch (error) {
                console.log(error)
            }
        }
    return (
        <div className='w-screen h-screen flex justify-center items-center bg-gray-200'>
            <div className='p-8 bg-white flex flex-col gap-4 rounded-md'>
                <h1 className='text-center text-xl font-medium mb-5'>Login</h1>
                <GoogleButton onClick={signInWithGoogle}/>
            </div>
        </div>
    )
    }

    export default Login