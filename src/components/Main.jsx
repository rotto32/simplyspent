/* eslint-disable react/destructuring-assignment */
import React from 'react';
import AddValue from './AddValue';
import PurchaseSummary from './PurchaseSummary';
import styles from '../styles/main-style.css';

class Main extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      dailyTotal: 45,
      weeklyTotal: 345,
      monthlyTotal: 453,
      dailyPurchases: [
        { date: '1/1/19', cost: 1, description: 'banana' },
        { date: '1/1/19', cost: 2, description: 'coffee' },
      ],
      yearlyTotal: 1000,
      cost: 0,
      desc: '',
    };
    this.calculateTotal = this.calculateTotal.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  componentDidMount() {
    this.calculateTotal(this.state.dailyPurchases);
  }

  calculateTotal(arr) {
    let dTotal = this.state.dailyTotal;
    let wTotal = this.state.weeklyTotal;
    let mTotal = this.state.monthlyTotal;
    let yTotal = this.state.yearlyTotal;

    arr.map((el) => {
      dTotal += el.cost;
    });

    wTotal += dTotal;
    mTotal += dTotal;
    yTotal += dTotal;

    this.setState({
      dailyTotal: dTotal,
      weeklyTotal: wTotal,
      monthlyTotal: mTotal,
      yearlyTotal: yTotal,
    });
  }

  handleFormChange(e) {
    console.log(e.target.value, e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  styleDollarDisplay(num) {
    let strNum = num.toString();
    const strArr = strNum.split('.');
    if (strArr[1] === undefined) {
      strNum += '.00';
    } else if (strArr[1].length === 1) {
      strNum += '0';
    }
    return strNum;
  }

  render() {
    return (
      <div style={styles.main} className="main">
        <div style={styles.title}>
          <h1>SimplySpent</h1>
        </div>
        <div style={styles.totals} className="totals">
          <div className="daily-total">
            <h3>Daily Total</h3>
            <div style={styles.daily}>
              {'$ '}
              {this.styleDollarDisplay(this.state.dailyTotal)}
            </div>
          </div>

          <div className="weekly-total">
            <h3>Weekly Total</h3>
            <div style={styles.weekly}>
              {'$ '}
              {this.styleDollarDisplay(this.state.weeklyTotal)}
            </div>
          </div>

          <div className="monthly-total">
            <h3>Monthly Total</h3>
            <div style={styles.monthly}>
              {'$ '}
              {this.styleDollarDisplay(this.state.monthlyTotal)}
            </div>
          </div>
        </div>
        <AddValue handleFormChange={this.handleFormChange} />
        <PurchaseSummary calculateTotal={this.state.calculateTotal} />
      </div>
    );
  }
}

export default Main;
