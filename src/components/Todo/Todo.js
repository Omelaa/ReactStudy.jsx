const Todo = ({todo: {id, title, completed}}) => {
    return (
        <div style={{display: 'flex', gridGap: '15px', alignItems: "center"}}>
            <h3>{id}. {title}</h3>
            <span style={completed ? {backgroundColor: 'green', padding: "5px"} : {
                backgroundColor: 'red',
                padding: "5px"
            }}>
            </span>
        </div>
    );
};

export {Todo};