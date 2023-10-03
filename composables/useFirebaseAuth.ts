import { createUserWithEmailAndPassword, User } from 'firebase/auth'

export default function() {
    const { $auth } = useNuxtApp()

    const user = useState < User | null > ("fb_user", () => null)

    const registerUser = async(email: string, password: string): Promise < boolean | User | unknown > => {
        try {
            const userCreds = await createUserWithEmailAndPassword($auth, email, password)
            if (userCreds) {
                user.value = userCreds.user
                return user.value
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                // handle error
            }
            return error.message
        }
        return false
    }

    return {
        user,
        registerUser
    }
}
// @todo -> add message info return, create login page, store acccessToken