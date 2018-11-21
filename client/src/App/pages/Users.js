import React, { Component } from 'react';

class List extends Component {
  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
      
    
  }
  

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('/api/users')
      .then(res => res.json())
      .then(list => this.setState({ list }))
  }

  render() {
    const { list } = this.state;

    return (
      <div className="App">
        <h1>Users List</h1>
        {/* Check to see if any items are found*/}
        {list.length ? (
          <div>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>UserName</th>
                  <th>Email</th>
                  <th>Phone number</th>
                  <th>Github Handle</th>
                  <th>Action</th>
                </tr>
              </thead>

              {/* Render the list of items, ensure that key values match the columns names in the db */}
              <tbody>
                {list.map((item) => {
                  return (
                    <tr key={item.userId}>
                      <td>{item.firstName} </td>
                      <td>{item.lastName}</td>
                      <td>{item.userName}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.githubHandle}</td>
                     
                    </tr>
                  )
                }
                )
                }
              </tbody>
            </table>
          </div>
        ) : (
            <div>
              <h2>No List Items Found</h2>
            </div>
          )
        }
      </div>
    );
  }
}

export default List;