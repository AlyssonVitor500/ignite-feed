import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';
import styles from './Posts.module.css';

import { dateRelativeToNow, formateDate } from '../../utils/dateFormat';

import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    content: string;
    type: 'paragraph' | 'link';
}

interface PostProps {
    author: Author;
    content: Content[];
    publishedAt: Date;
}

export const Posts = ({author, content, publishedAt}: PostProps) => {

    const publishedDateFormattedTitle = formateDate(publishedAt);
    const publishedDateRelativeToNow = dateRelativeToNow(publishedAt);
    
    const [ comments, setComments ] = useState([] as string[]);

    const [ newComment, setNewComment ] = useState('')

    function handleSubmitComment(event: FormEvent) {
        event.preventDefault()

        setComments([...comments, newComment]);
        setNewComment('');
    }

    function handleInvalidTextarea(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('O campo deve ser obrigatório.')
    }

    function handleCommentTextChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewComment(event.target.value);
    }

    function deleteComment(commentContentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => comment !== commentContentToDelete);
        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newComment.length === 0; 

    return (
        <article className={styles.posts}>
            <header>
                <div className={styles.userInfoContainer}>   
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.postUserInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormattedTitle} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {
                    content
                        .map((content) => {
                            if (content.type === 'paragraph') return (<p key={content.content}>{content.content}</p>)
                            if (content.type === 'link') return (<p key={content.content}><a href="">{content.content}</a></p>)
                        })
                }
            </div>

            <form className={styles.commentForm} onSubmit={handleSubmitComment}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='Deixe um comentário'
                    value={newComment}
                    onChange={handleCommentTextChange}
                    onInvalid={handleInvalidTextarea}
                    required
                />

                <footer>
                    <button 
                        type="submit"
                        disabled={isNewCommentEmpty}
                    >
                        Publicar
                    </button>
                </footer>

            </form>

            <div className={styles.commentList}>
                {
                    comments.map((comment) => {
                        return (
                            <Comment 
                                content={comment} 
                                key={comment}
                                onDeleteComment={deleteComment}
                            />
                        )
                    })
                }
            </div>

        </article>
    );
}