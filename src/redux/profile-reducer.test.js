import profileReducer, {addPostActionCreator} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: ' 12'},
        {id: 2, message: 'It\'s my first post', likesCount: ' 11'},
        {id: 3, message: 'Blabla', likesCount: ' 11'},
        {id: 4, message: 'Dada', likesCount: ' 11'}
    ]
}

test('length of posts should be equal to 5', () => {

    let action = addPostActionCreator("Extive")

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5);
});

test('The text of a new post should be equal to Extive', () => {

    let action = addPostActionCreator("Extive")

    let newState = profileReducer(state, action);

    expect(newState.posts[4].message).toBe("Extive");
});