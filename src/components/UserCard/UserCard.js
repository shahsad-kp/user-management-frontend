import './UserCard.css'

function UserCard({user}) {
    const {username, fullName, profilePicture} = user;
    return (
        <div className={'user-card'}>
            <img src={profilePicture} alt={username}/>
            <div className={'user-info'}>
                <h3>@{username}</h3>
                <p>{fullName}</p>
            </div>
            <div className={'user-actions'}>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    );
}

export default UserCard;