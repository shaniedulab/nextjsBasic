'use client'
import styles from './page.module.css'
import Link from 'next/link'
import  {useRouter} from 'next/navigation';

export default function Home() {
  const router=useRouter();
  return (
    <main className={styles.main}>
      <h1>Home page</h1>
      <Link href='/login'>Go To Login Page</Link>
      <button onClick={()=>{router.push("/login")}}>Go To Login Page</button>
    </main>
  )
}
