import './card-list.styles.css';
import Card from '../card/card.component.jsx';

// props is exactly the same as this.props in classes
// so instead of destructuring const { monster } = props; we can just pass in { monsters } as a CardList parameter directly
const CardList = ({ monsters }) => {


  return (
    <div className='card-list'>
      {
        monsters.map((monster) => {
          return (
            <Card monster={monster} />
          )
        })
      }
    </div>
  )
}

export default CardList;
 