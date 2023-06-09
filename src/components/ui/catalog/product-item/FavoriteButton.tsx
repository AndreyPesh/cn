import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FC } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import { useAuth } from '@/hooks/useAuth';
import { useProfile } from '@/hooks/useProfile';

import UserService from '@/services/user.service';

const FavoriteButton: FC<{ productId: number }> = ({ productId }) => {
	const { user } = useAuth();

	const { profile } = useProfile();

	const clientQuery = useQueryClient();

	const { mutate } = useMutation(
		['toggle favorite'],
		() => UserService.toggleFavorite(productId),
		{
			onSuccess() {
				clientQuery.invalidateQueries(['get profile']);
			},
		},
	);

	if (!user) return null;

	const isExists = profile?.favorites.some(
		favorite => favorite.id === productId,
	);

	return (
		<div>
			<button onClick={() => mutate()} className='text-primary'>
				{isExists ? <AiFillHeart /> : <AiOutlineHeart />}
			</button>
		</div>
	);
};

export default FavoriteButton;
