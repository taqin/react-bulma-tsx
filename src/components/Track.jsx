import React, { Component } from 'react';
import axios from 'axios';

import {
  Box,
  Container,
  Section,
  Columns,
  Tag
} from 'react-bulma-components/full';

export class Track extends Component {
  constructor(props) {
    super(props);
    this.state = {
      track: []
    };
  }

  componentDidMount = () => {
    const media = this.props.match.params.trackId;
    console.log(media);
    axios.get(`http://localhost:3000/api/q/${media}`).then(res => {
      const track = res.data;
      this.setState({ track }); //set as a callback
    });
  };

  render() {
    // const { params } = this.props.match;
    // const { media } = this.props.location.state;

    return (
      <div>
        <Section className="main-listing">
          <Container>
            <Columns>
              <Columns.Column className="is-10 is-offset-1">
                <Box className="content box-listing">
                  <p>{this.state.track.question}</p>
                  <p>{this.state.track.mediaUrl}</p>
                </Box>
              </Columns.Column>
            </Columns>
          </Container>
        </Section>
      </div>
    );
  }
}

export default Track;
