import React from "react";
import {  Table } from "semantic-ui-react";
import {useSelector} from 'react-redux';   
import styles from './EList.module.css'; 

const EList = (props) => {

    const { cards } = useSelector((state) => state.cards);    
    
      return (
        <Table className={styles.tabla} singleLine>
          <Table.Header>
            <Table.Row>
            <Table.HeaderCell>Najdrazi film</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {cards.map(cards => {
              return (
                <Table.Row key={cards.id}> 
                <Table.Cell styles="font-size 14px">{cards.Title}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    );
  }

  export default EList; 