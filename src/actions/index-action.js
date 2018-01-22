export const postNewText = (post) => {
    return {
        type: 'POST_TEXT',
        payload: post
    }
};