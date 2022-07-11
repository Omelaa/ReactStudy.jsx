const Album = ({album: {id, title}}) => {
    return (
        <div>
            <h3>{id}. {title}</h3>
        </div>
    );
};

export {Album};