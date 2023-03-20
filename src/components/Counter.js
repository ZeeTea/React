import { Link } from 'react-router-dom'


export default function Post(props) {
    return (
        <div className="post">
            <p>{props.post.body}</p>
            <p>{props.post.dateCreated?.toDate().toString()}</p> 
            <p>Posted By: {props.post.userName}</p>
            {
                (props.hideLink) ?
                <></> :
                <Link to={ `/post/${props.post.id}` }>Read More</Link>
            }
        </div>
    )
}