import { getProviders, signIn } from 'next-auth/client'
import Login from '../../components/auth/Login'
export default function SignIn({ providers }) {
  return (
    <div>
      <Login
        providers={providers}
      ></Login>
    </div>
  )
}

export async function getServerSideProps(context){
  const providers = await getProviders()
  return {
    props: { providers }
  }
}