import React from 'react';
import { Card } from 'react-bootstrap';

const UserItem = ({ id, name, image, status, species, type, gender }) => {
  console.log(name);
  return (
    <Card className="user">
      <Card.Img variant="top" src={image} className="user__image" alt={id} />
      <Card.Body>
        <Card.Title className="user__name">{name}</Card.Title>
        <Card.Text className="user__details">
          <span>
            <strong>Status:</strong> {status}
          </span>
          <span>
            <strong>Gender:</strong> {gender}
          </span>
          {/* <span>
            <strong>Type:</strong> {type}
          </span> */}
          <span>
            <strong>Species:</strong> {species}
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserItem;
