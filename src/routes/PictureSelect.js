import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Item } from '_rc-menu@7.5.3@rc-menu';

// @connect((state) => ({
//   loginA: state.login,
// }))

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pictures: [
        {
          id: '1',
          name: 'foo',
          url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
        },
        {
          id: '2',
          name: 'foo',
          url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
        },
        {
          id: '3',
          name: 'foo',
          url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
        },
      ],

    }
  }
  childChange=(item)=>{
    this.props.fromChild(item)
  }
  allSelect=(e)=>{
    this.props.allSelect(e.target.checked, this.state.pictures)
  }
  render() {
    return (
      <div>
        <div>
          <input type="checkbox" onChange={this.allSelect} checked={this.props.value.length === 3} />
          已选中{this.props.value.length}个文件
        </div>
        {
          this.state.pictures.map((item,index) => {
            return (
              <div className={styles.picItem} key={item.id}>
                <label>
                  <input type="checkbox" className={styles.checkbox} checked={this.props.value.includes(item.id)} onChange={() => {this.childChange(item)}} />
                  <img src={item.url} alt="" />
                </label>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default IndexPage;
