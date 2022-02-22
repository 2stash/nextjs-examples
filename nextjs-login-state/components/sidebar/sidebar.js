import React, {useEffect, useState} from "react"
import Link from "next/link"
import {useDispatch, useSelector} from 'react-redux'
import {authLogin, authLogout} from '../../redux/actions/authActions'

const sidebar = () => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const {login} = useSelector( state => state.login)

  // useEffect(()=> {
  //   setLoading(true)
  //   console.log('useeffect')
  // }, [dispatch])


  const handleStateChange = () => {
    console.log(loading)
    if(login === false){
      console.log('if')
      dispatch(authLogin())
    } else {
      dispatch(authLogout())
    }
  }

  return (
    <div
      className=" h-screen flex flex-col
    bg-white dark:bg-gray-900 shadow-lg text-white w-1/4"
    >
      <div className="flex-col ">
        <div className="flex-col ml-3 mt-2">
          <div className="hover:opacity-70">
            <Link href="/">Home</Link>
          </div>
          <div className="hover:opacity-70">
            <Link href="/pagea">Page A</Link>
          </div>
          <div className="hover:opacity-70">
            <Link href="/pageb">Page B</Link>
          </div>
          <div className="hover:opacity-70">
            <button onClick={handleStateChange}>Change Login State</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default sidebar
