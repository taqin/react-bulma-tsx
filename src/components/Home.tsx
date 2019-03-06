import * as React from 'react';
import * as axios from 'axios';

import {
  Article,
  Box,
  Container,
  Section,
  Columns,
  Tag
} from 'react-bulma-components/full';

export const Home: React.StatelessComponent<{}> = () => {
    return (
      <Section className="main-listing">
        <Container>
          <Columns>
            <Columns.Column className="is-10 is-offset-1">
              <Box className="content box-listing">
                <article id="" className="post">
                  <h1 className="title is-1">Hello, it's me</h1>
                  <p className="subtitle is-3">I was wondering if after all these years you'd like to meet</p>
                  <p className="subtitle is-5">To go over everything</p>
                  <img src="https://via.placeholder.com/468x160?text=Bulma+Typescript+React" alt=""/>
                </article>
              </Box>
            </Columns.Column>
          </Columns>
        </Container>
      </Section>
    );
}
