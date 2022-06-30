import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Privacy.module.css'

const Privacy: NextPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
          <Image src='/logo_greenmile.png' alt='Vercel Logo' width={214} height={38} />
        </div>
        <div className={styles.text}>
            <h3 className={styles.contentTitle}>Please review the user policy below :</h3>
            <p className={styles.content}>
            Privacy Policy <br />
            Last updated: June 29, 2022 <br />
            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
            We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the Privacy Policy Generator.
            Interpretation and Definitions
            Interpretation
            The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            Definitions
            For the purposes of this Privacy Policy:
            Account means a unique account created for You to access our Service or parts of our Service.
            Company (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to greenmile.
            Cookies are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.
            Country refers to: France

            </p>
        </div>
    </div>
  )
}

export default Privacy
