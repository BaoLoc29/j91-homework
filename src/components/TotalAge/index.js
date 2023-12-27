const TotalAge = ({users}) => {
    const sumAge = () => {
        return users.reduce((TotalAge, user) => TotalAge + user.age, 0);
    }
    return (
        <div className="total-age">
            <h3>Total Age: {sumAge()}</h3>
        </div>
    )
}
export default TotalAge;