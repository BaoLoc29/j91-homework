const Home = () => {
    return (
        <div className="home">
            <h2>Home</h2>
        </div>
    )
}
export default Home;


// Client request example.com/students -> server response data (include student list) -> client set state students -> render UI
// CreateReadUpdateDelete -> CRUD
// GET example.com/students -> get student list
// GET example.com/students/1234 -> get student detail with id 1234
// PUT example.com/students/1234 -> edit student with id 1234
// DELETE example.com/students/1234 -> delete student with id 1234
// POST example.com -> create new student