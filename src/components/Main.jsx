/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styles from '../styles/main-style.css';

class Main extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      currentDate: Date.now(),
      dailyTotal: 0,
      weeklyTotal: 0,
      monthlyTotal: 0,
      yearlyTotal: 0,
    };
  }


  render() {
    return (
      <div className="main">
        <div style={styles.totals} className="totals">
          <div className="daily-total">
            <h3>Daily Total</h3>
            <div style={styles.daily}>
              {'$ '}
              {this.state.dailyTotal}
            </div>
          </div>

          <div className="weekly-total">
            <h3>Weekly Total</h3>
            <div style={styles.weekly}>
              {'$ '}
              {this.state.weeklyTotal}
            </div>
          </div>

          <div className="monthly-total">
            <h3>Monthly Total</h3>
            <div style={styles.monthly}>
              {'$ '}
              {this.state.monthlyTotal}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
