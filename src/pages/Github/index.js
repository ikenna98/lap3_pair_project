import React from 'react';
import {SearchForm, Results} from '../../components';
import { getResult } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';

function Github() {
  const data = useSelector(state => state.data);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);

  const dispatch = useDispatch();

  const search = username => dispatch(getResult(username));

  const renderResult = () => loading ? <p>Retrieving GitHub data...</p> : <Results result={data}/>

  return (
    <div id='search'>
      < SearchForm getResult={search}/>

      { error ? <p>Oops there's been an error! {error}</p> : renderResult() }

    </div>
  )
}

export default Github
