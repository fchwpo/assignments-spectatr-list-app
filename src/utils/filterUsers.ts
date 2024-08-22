import { User } from "@/types/users";

type FilterKeys = keyof User;

export const filterUsers = (
    users: User[],
    searchTerm: string,
    keys: FilterKeys[] = ['name'] // this can be changed to all keys as well
): User[] => {
    const lowercasedTerm = searchTerm.toLowerCase();

    return users.filter(user =>
        keys.some(key =>
            String(user[key]).toLowerCase().includes(lowercasedTerm)
        )
    );
};
