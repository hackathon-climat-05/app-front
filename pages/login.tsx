import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { env } from 'process'
import { useEffect } from 'react'

const Login: NextPage = () => {
   const router = useRouter();

   const handleCredentialResponse = async (response: any) => {
      const result = await fetch('/api/login', {
         method: "POST",
         body: JSON.stringify(response.credential)
      })
      const data = await result.json();

      if (data?.Location) {
         router.push(data.Location)
      }
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