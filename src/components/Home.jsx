import React, { Component } from 'react'
import axios from 'axios';

import { Card, Content, Table } from 'react-bulma-components/full';

export class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      tracks: []
    };
  }

  componentDidMount = () => {

    axios
      .get('https://api.exchangeratesapi.io/latest?base=USD')
      .then(res => {
        const feed = res.data.rates;
        const tracks = Object.entries(feed);
        this.setState({ tracks }); //set as a callback
      });
  }
  
  render() {
    return (
      <div>
        <Card>
          <Card.Content>
            <Content>
              <h1 className="is-size-1 has-text-weight-light is-uppercase">
                Hello Universe Bulma!
              </h1>
              <Table>
                {this.state.tracks.map(item => (
                  <tr>
                    <td>
                      <h6 className="title is-6"><span>{item[0]}</span> - {item[1]}</h6>
                    </td>
                  </tr>
                ))}
              </Table>
            </Content>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default Home;