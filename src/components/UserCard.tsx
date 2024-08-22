import { motion } from 'framer-motion';
import { User } from '@/types/users';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
    >
      <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
      <p className="text-gray-600 mb-1">@{user.username}</p>
      <p className="text-gray-600">{user.email}</p>
    </motion.div>
  );
};

export default UserCard;
