import React from 'react';
import { Grid, Row, Col, Panel, Media, Button } from 'react-bootstrap';

const Users = props => {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={8}>
            <Panel>
              <Panel.Body>
                <Media>
                  <Media.Left>
                    <img width={64} height={64} src={props.avatar_url} alt="thumbnail"></img>
                  </Media.Left>
                  <Media.Body>
                    <Media.Heading>
                        {props.login}
                    </Media.Heading>
                    <p>
                      {props.bio}
                    </p>
                  </Media.Body>
                </Media>
                <Button onClick={props.deleteUser} >Delete</Button>
              </Panel.Body>
            </Panel>
          </Col>
        </Row>
      </Grid>
    )
}

export default Users;