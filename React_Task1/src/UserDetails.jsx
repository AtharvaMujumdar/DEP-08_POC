import React from "react";
import { useParams } from "react-router-dom";

function withParams(Component) {
    return (props) => {
      const params = useParams();
      return <Component {...props} params={params} />;
    };
  }

class UserDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [
        { name: "aaaa", email: "a@gmail.com" },
        { name: "bbbb", email: "b@gmail.com" },
        { name: "cccc", email: "c@gmail.com" },
      ],
    };
  }

  showData = () => {
    const { id } = this.props.params;
    const user = this.state.users[Number(id)];


    return (
      <>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <p>This is additional information for {user.name}</p>
      </>
    );
  };

  render() {
    return <>{this.showData()}</>;
  }
}

export default withParams(UserDetails);