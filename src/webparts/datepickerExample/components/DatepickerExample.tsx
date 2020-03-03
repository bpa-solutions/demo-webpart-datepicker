import * as React from 'react';
import styles from './DatepickerExample.module.scss';
import { IDatepickerExampleProps } from './IDatepickerExampleProps';
import { IDatepickerExampleState } from './IDatepickerExampleState';
import { DateTimePicker } from '@pnp/spfx-controls-react';

export default class DatepickerExample extends React.Component<IDatepickerExampleProps, IDatepickerExampleState> {

  constructor(props: IDatepickerExampleProps) {
    super(props);

    this.state = {
      logs: []
    };

    this.onChangeHander = this.onChangeHander.bind(this);
  }

  public onChangeHander(date: Date) {
    let message = '';
    if (Object.prototype.toString.call(date) === "[object Date]") {
      if (isNaN(date.getTime())) {
        message = 'onChange triggered, value is invalid';
      } else {
        message = `onChange triggered, value is ${date.toUTCString()}`;
      }
    } else {
      message = 'onChange triggered, value is not a date';
    }
    this.setState(previous => ({ logs: [...previous.logs, message] }));
  }

  public render(): React.ReactElement<IDatepickerExampleProps> {
    return (
      <div className={styles.datepickerExample}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Datepicker Example</span>
              <DateTimePicker onChange={this.onChangeHander} />
              <span>Results</span>
              <ul>
                {this.state.logs.map((log, index) => <li key={index}>{log}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
