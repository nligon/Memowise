import { connect } from 'react-redux';
import Decks from '../components/Decks';

const handleChange = function(event) {
  return {
    type: 'UPDATEINPUT',
    data: event.target.value,
  }
};

const mapStateToProps = ({ decks, searchinput }) => ({ decks, searchinput });

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (event) => {
      dispatch(handleChange(event))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Decks);
