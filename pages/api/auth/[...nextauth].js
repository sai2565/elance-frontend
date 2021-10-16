import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),

    CredentialsProvider({
      id: "testEmail",
      async authorize(credentials, req) {
        const res = await fetch("https://elance-be.herokuapp.com/api/v1/users/getUserByEmail", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "email": credentials.email
          })
        });
        const user = await res.json()
        if (res.ok && user) {
          const { fullName, profilePic, email, } = user.user[0]
          const userData = { name: fullName, email, image: profilePic }
          return userData
        }
        return null
      }
    })

    // ...add more providers here
  ],
  pages: {
    signIn: '/auth/signin',
    signUp: '/auth/signup',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/CreateProfile' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  // A database is optional, but required to persist accounts in a database
  //database: process.env.DATABASE_URL,

  callbacks: {
    async signIn(user, account, profile) {
      return true
    }
    ,
    async redirect(url, baseUrl) {
      return baseUrl + '/HomePage'
    },
    async session(session, user) {
      const email = session.user.email;
      const profile = await fetch("https://elance-be.herokuapp.com/api/v1/users/getUserByEmail", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "email": email
        })
      });
      const profile_json = await profile.json();
      session.user.elanceprofile = profile_json;
      return session
    },
    async jwt(token, user, account, profile, isNewUser) {
      return token
    }
  }
})