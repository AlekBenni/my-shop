import React, {useState} from 'react'
import AuthComponent from './AuthComponent'
import RegComponent from './RegComponent'

function Auth() {

   const [authFlag, setAuthFlag] = useState("auth")

   const flag = (value:string) => {
      setAuthFlag(value)
   }

    return (
        <>
        {authFlag === "auth" &&        
            <AuthComponent flag={flag}/>
        }
        {authFlag === "reg" && 
            <RegComponent flag={flag}/>
        }
        </>
    )
}

export default Auth
