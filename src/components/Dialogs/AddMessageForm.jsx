import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import profile from "../Profile/MyPosts/MyPosts.module.css";
import contentFont from "../Profile/MyPosts/Post/Post.module.css";

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea"
                       name="newMessageBody"
                       validate={[required, maxLength50]}
                       placeholder='Enter your message'/>
            </div>
            <div className={`${profile} ${contentFont}`}>
                <button>Send Message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"})(AddMessageForm)

export default AddMessageFormRedux