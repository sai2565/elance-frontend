import { getProviders, signIn } from 'next-auth/client'
import Signup from '../../components/auth/Signup'
export default function SignUp({ providers }) {
  return (
    <div>
      <Signup
        providers={providers}>
      </Signup>
    </div>
  )
}

export async function getServerSideProps(context){
  const providers = await getProviders()
  return {
    props: { providers }
  }
}