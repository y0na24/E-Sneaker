import { apiService } from './api.service'

import { Comment } from '../lib/models/comment.interface'

export const commentsService = apiService
	.enhanceEndpoints({
		addTagTypes: ['Comments'],
	})
	.injectEndpoints({
		endpoints: builder => ({
			getAllComments: builder.query<Comment[], number>({
				query: () => 'comments',
				providesTags: data => ['Comments'],
				transformResponse(comments: Comment[], meta, arg) {
					return comments.filter(comment => comment.productId === arg)
				},
			}),
			addComment: builder.mutation<Comment, Comment>({
				query: comment => ({
					url: 'comments',
					method: 'POST',
					body: comment,
				}),
				invalidatesTags: ['Comments'],
			}),
			deleteComment: builder.mutation<void, number>({
				query: commentId => ({
					url: `comments/${commentId}`,
					method: 'DELETE',
				}),
				invalidatesTags: ['Comments'],
			}),
		}),
	})

export const {
	useGetAllCommentsQuery,
	useAddCommentMutation,
	useDeleteCommentMutation,
} = commentsService
