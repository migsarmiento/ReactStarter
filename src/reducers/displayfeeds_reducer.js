const initialList = [
    {
        id: 0,
        text: "My first post."
    },

    {
        id: 1,
        text: "This is my second post."
    },

    {
        id: 2,
        text: "My React-Redux App."
    },

    {
        id: 3,
        text: "Basic example of React-Redux"
    }
];

export default function (state=initialList, action) {
    switch(action.type){
        case 'POST_TEXT':
            state.push(action.payload);
            console.log(state);
            return [...state];
            break;
        default:
            return state;
    }
}