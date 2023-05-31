import './UserBody.css'

function UserBody() {
    let username = 'Shahsad'
    // TODO: Get username from context

    return (
        <div className={'user-body'}>
            <h1>Welcome {username}</h1>
        </div>
    );
}

export default UserBody;
