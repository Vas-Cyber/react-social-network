import React from 'react'
import profile from './MyPosts.module.css'
import contentFont from './Post/Post.module.css'
import Post from "./Post/Post"
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={`${profile} ${contentFont}`}>
                <div>
                    <Field name="newPostText" component={Textarea} placeholder={"Post message"}
                           validate={[required, maxLength10]}/>
                </div>
                <button>Add post</button>
                <button>Remove</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

const MyPosts = React.memo((props) => {

    let postsElements =
        [...props.posts]
            .reverse()
            .map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef()

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div>
            <div className={profile.content_font}>
                My posts
            </div>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={`${profile} ${contentFont}`}>
                {postsElements}
            </div>
        </div>
    );
})

export default MyPosts;