import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import PictureSelect from "./PictureSelect"

// @connect((state) => ({
//   loginA: state.login,
// }))

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ['1', '2']
    }
  }
  fromChild=(item)=>{
    console.log(item, '子组件当前item')
    let valueCopy = JSON.parse(JSON.stringify(this.state.value));
    if(valueCopy.indexOf(item.id) >= 0){
      let index=valueCopy.indexOf(item.id)
      valueCopy.splice(index,1)
    } else {
      valueCopy.push(item.id);
    }
    this.setState({
      value: valueCopy
    })
  }
  allSelect=(checked, pictures)=>{
    let value2 = [];
    if (checked) {
      pictures.forEach(item => {
        value2.push(item.id)
      });
    }
    this.setState({
      value: value2
    })
  }
  render() {
    return (
      <div>
        <PictureSelect value={this.state.value} fromChild={this.fromChild} allSelect={this.allSelect}></PictureSelect>
      </div>
    );
  }
}

export default IndexPage;
