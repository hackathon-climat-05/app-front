import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { env } from 'process'
import { useEffect } from 'react'

const Oauthcallback: NextPage = () => {
   const router = useRouter();

   const handleOauthResponse = async (code: any) => {
    console.log(code);
      const result = await fetch('/api/register', {
         method: "POST",
         body: JSON.stringify(code)
      })
      const data = await result.json();
      console.log(data);
   }

   useEffect( () => {
    const query = router.query;

    if (query?.code) {
        handleOauthResponse(query.code);
    }
   });

   return (
      <>
      </>
   );
}

export default Oauthcallback