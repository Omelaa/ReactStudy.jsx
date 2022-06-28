import styles from './Post.module.css';

const Post = ({post: {title, body}}) => {
    return (
        <div className={styles.post}>
            <h2>{title}</h2>
            <div>
                <p>
                    {body}
                </p>
            </div>
        </div>
    );
};

export {Post};