import React from 'react'
import HeaderCommon from '../main/HeaderCommon';
import Box from './Box'
class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      answer: false,
      guess: false
    };
  }

  resetGame = () => {
    let answer = Math.floor(Math.random() * 10);
    let guess = false;
    this.setState({ answer, guess });
  }
  componentDidMount() {
    const { getAllVoucher } = this.props;
    getAllVoucher.getAllVoucherAction();
    this.resetGame();
  }
  chooseGift = (i) => {
    this.setState({ guess: i });
  }
  render() {
    const { listVoucher } = this.props;
    let voucher = 0;
    let winner = "";
    if (listVoucher.length > 0) {
      voucher = Math.floor(Math.random() * listVoucher.length);
      winner = 'Voucher💰:' + listVoucher[voucher].voucher_code;
    }
    let cards_arr = ["Gift", "Gift", "Gift", "Gift", "Gift", "Gift", "Gift", "Gift", "Gift", "Gift"];
    //set winner
    let cards = cards_arr.map((x, i) => {
      if (this.state.guess === i && this.state.answer === i) {
        return <Box key={i} result={winner} />;
      } else if (this.state.guess === i) {
        return <Box key={i} result="You are not winner 😡" />;
      } else {
        // return <Box key={i} result="You are not winner 😡" />;
        return <span className="giftSpan" key={i} onClick={() => this.chooseGift(i)}>{x}</span>;
      }
    });
    return (
      <div >
        <HeaderCommon />
        {cards}
        <div className="divGame">
          <button onClick={() => this.resetGame()}>Reset</button>
        </div>
      </div>
    )
  }
}
export default Game