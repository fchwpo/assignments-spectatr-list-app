import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { fetchUsers } from '@/utils/api';
import { User } from '@/types/users';
import { useSearch } from '@/hooks/useSearch';
import Navbar from '@/components/Navbar';
import UserList from '@/components/UserList';
import SearchBar from '@/components/Searchbar';
import { filterUsers } from '@/utils/filterUsers';

export default function Home() {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { filteredItems: filteredUsers, handleSearch } = useSearch<User>(users, filterUsers);

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const data = await fetchUsers();
                setUsers(data);
                setIsLoading(false);
            } catch (err) {
                setError('Failed to fetch users. Please try again later.');
                setIsLoading(false);
            }
        };

        loadUsers();
    }, []);


    return (
        <div>
            <Head>
                <title>User List App</title>
                <meta name="description" content="A simple user list application" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8 text-center">User List</h1>
                <SearchBar onSearch={handleSearch} />
                {isLoading ? (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center"
                    >
                        Loading users...
                    </motion.p>
                ) : error ? (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center text-red-500"
                    >
                        {error}
                    </motion.p>
                ) : (
                    <UserList users={filteredUsers} />
                )}
            </main>
        </div>
    );
}
