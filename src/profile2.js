const profile2 = () => {
    const user = {
        firstName: "Anna",
        lastName: "Kovács"
    };

    //  const firstName = user.firstName;
    //  const lastName = user.lastName;

    const { lastName, firstName } = user;

    return <div>
        <h2>{firstName}</h2>
        <h3>{lastName}</h3>
    </div>
}

function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

export default profile2;