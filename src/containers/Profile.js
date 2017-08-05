import React, {Component} from 'react'
import {Container, Name, GameListHeader, GameList, 
        GameRecord, Column, ColumnLabels} from '../styled/Profile'
import Relay from 'react-relay'

export default class Profile extends Component {
  static defaultProps = {
    user: {
      email:"USER_MAIL",
      games:[
        {
          winner: true,
          createdAt: '12/25/2017',
          id :'0001'
        },
        {
          winner: true,
          createdAt: '12/25/2017',
          id :'0001'
        }
      ]
    } 
  }

  get records() {
    return this.props.user.games.map( (game,index) => {
      // let {node: game} = edge
      return (
        <GameRecord key={index} index={index}>
          <Column>
            {(game.winner) ? 'Won!' : "Didn't win"}
          </Column>
          <Column>
            "RoBOT"{/* {game.p1Guess} */}
          </Column>
          <Column>
            Correct {/* {(game.p1GuessCorrect) ? 'Yes' : 'Nope'} */}
          </Column>
          <Column>
            Date{/* {new Date(game.createdAt).toLocaleDateString()} */}
          </Column>
        </GameRecord>
      )
    })
  }

  render() {
    let {email} = this.props.user
    return (
      <Container>
        <Name> {email} </Name>
        <GameList>
          <GameListHeader> MyGames </GameListHeader>
          <ColumnLabels>
            <Column> Outcome </Column>
            <Column> Guess </Column>
            <Column> Guessed Correctly </Column>
            <Column> Date </Column>
          </ColumnLabels>
          {this.records}
        </GameList>
      </Container>
    )
  }
}

// export default Relay.createContainer(
//   Profile, {
//     fragments: {
//       viewer: () => Relay.QL`
//         fragment on Viewer {
//           user {
//             id
//             email
//             p1games (first: 10) {
//               edges {
//                 node {
//                   id
//                   createdAt
//                   winner {
//                     id
//                   }
//                   p1Guess
//                   p1GuessCorrect
//                 }
//               }
//             }
//           }
//         }
//       `,
//     }
//   }
// )
