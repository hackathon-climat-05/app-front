import type { NextPage } from 'next'
import Script from 'next/script'
import { env } from 'process'
import { useEffect } from 'react'

const Login: NextPage = () => {
   const handleCredentialResponse = async (response: any) => {
      console.log(response);
      const request = await fetch('/api/login', {
         method: "POST",
         body: JSON.stringify(response.credential)
      });
   }

   useEffect( () => {
      (window as any).handleCredentialResponse = handleCredentialResponse;
   });
   return (
      <>
         <Script src="https://accounts.google.com/gsi/client" />

         <div id="g_id_onload"
            data-client_id={process.env.GOOGLE_DATA_CLIENT_ID}
            data-callback="handleCredentialResponse"
            data-auto_prompt="false">
         </div>
         <div className="g_id_signin"
            data-type="standard"
            data-size="large"
            data-theme="outline"
            data-text="sign_in_with"
            data-shape="rectangular"
            data-logo_alignment="left">
         </div>
      </>
   );
}

export default Login