import { reactive } from "vue";

const session = reactive({
    user: null as User | null,
})

interface User {
    id: number;
    name: string;
    email?: string;
    phpto?: string;
    token?: string;
}


export function useSession() {
    return session;
}

export function login() {
    session.user = {
        id: 1,
        name: "John Doe",
    }
}