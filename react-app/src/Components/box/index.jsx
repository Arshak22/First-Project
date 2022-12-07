import React, { Component } from "react";
import "./style.css";


// create Function component
// const Boxes =() => {
//     return <div>
//         <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi suscipit mollitia, quod, sit obcaecati autem doloremque consequatur quo qui earum maxime sed provident recusandae aut illum cum quia nemo voluptate.</h1>
//     </div>
// }

// export default Boxes;


class Boxes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 45,
            f: 12
        }
    }

    //  or state = {
    //     number: 45,
    //     f: 12
    // }

    Change = () => {
        this.setState({f: this.state.f + this.state.number});
    }

    render() {
        return <div>
            {console.log(this.state.f)}
            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa dicta adipisci, dignissimos porro possimus dolorem. Repellat eum doloribus nihil ut tenetur error obcaecati dolore minima, natus, aliquam, quam perferendis qui.</h1>
            <p>{this.state.number}</p>
            <button onClick={this.Change}>Change</button>
        </div>
    }
}

export default Boxes;