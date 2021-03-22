import profile from './Post.module.css'


const Post = (props) =>{
    return (
            <div className={profile.content_font}>
              <img src='https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-7-avatar-2754582_120519.png'/>
                {props.message}
                <div>
                    <span>like</span>
                    {props.likesCount}
                </div>
            </div>
    );
}

export default Post;