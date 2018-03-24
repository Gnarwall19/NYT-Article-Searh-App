import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbortron from "../../components/Jumbotron";

const NoMatch = () => (
	<Container fluid>
		<Row>
			<Col size="md-12">
				<Jumbortron>
					<h1 className="text-center">404 Page Not Found</h1>
				</Jumbortron>
			</Col>
		</Row>
	</Container>
);

export default NoMatch;