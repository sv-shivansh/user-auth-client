import React, {Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getTest } from '../actions/test'
import axios from 'axios'


const Test = ({
    getTest,
})=>{
useEffect(() => {
    getTest()
}, [getTest]);
  const fetchData =async ()=>{
      const data = await axios.get('/api')
      console.log(data);
  } 
return (
        <Fragment>
            <h1>Test</h1>
            <button onClick = {fetchData}> click</button>
        </Fragment>
    )
};

Test.protoTypes = {
    getTest: PropTypes.func.isRequired
};

const mapStateToProps = state =>({
    name: state
})

export default connect(mapStateToProps,{getTest})(Test);