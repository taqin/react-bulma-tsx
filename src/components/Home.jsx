import React, { Component } from 'react'
import axios from 'axios';


import { Article, Box, Container, Section, Columns, Card, Content, Table, Tag } from 'react-bulma-components/full';

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
        <Section className="main-listing">
          <Container>          
            <Columns>
              <Columns.Column className="is-10 is-offset-1">
                <Box className="content box-listing">
                  {this.state.tracks.map(item => (
                  <article id="" className="post">
                    <Columns className=" is-mobile singleTrack">
                      <Columns.Column className="num is-1-mobile is-mobile">
                        <span className="trackNum">1.</span>
                      </Columns.Column>
                      <Columns.Column className="is-paddingless">
                        <h4 className="trackTitle"><a href="/q/#" className="has-text-black-bis">{item[0]} - {item[1]}</a></h4>
                      </Columns.Column>
                    </Columns>

                    <Columns className="is-mobile">
                      <Columns.Column className="is-half-mobile is-three-fifths-desktop">
                        <Tag>
                          <a href="#"><span class="tag">Tag</span></a>
                        </Tag>
                      </Columns.Column>
                      <Columns.Column className="is-half-mobile is-two-fifths-desktop">
                        <div className="buttons is-pulled-right">
                          <a class="trackUrl button is-small is-primary" href="#">Download MP3</a>
                          <a class="btn-trigger button is-link is-small" onclick="launchModal(this)" data-target="modal">Listen</a>
                        </div>
                      </Columns.Column>
                      
                    </Columns>
                      
                  </article>
                  ))}
                </Box>
              </Columns.Column>
            </Columns>
          </Container>
        </Section>

      </div>
    );
  }
}

export default Home;