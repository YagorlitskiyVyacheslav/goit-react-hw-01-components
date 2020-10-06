import React from 'react';
import Container from './statistics.component';
import PropTypes from "prop-types";

const Statistics = ({title, stats}) => {
  const randomColor = () => {
    return (
      "#" +
      (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase()
    );
  };
    return (
      <>
        <h2>Task 2</h2>
        <Container>
          {title && <Container.Title>{title}</Container.Title>}
          <Container.Ul>
            {stats.map((element) => {
              return (
                <Container.Li key={element.id} color={randomColor()}>
                  <Container.Label>{element.label}</Container.Label>
                  <Container.Percentage>
                    {element.percentage}%
                  </Container.Percentage>
                </Container.Li>
              );
            })}
          </Container.Ul>
        </Container>
      </>
    );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired
};
export default Statistics;