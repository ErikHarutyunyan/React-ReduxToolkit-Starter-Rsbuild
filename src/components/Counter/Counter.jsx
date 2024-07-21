import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  selectCount,
} from '@app/features/counter/counterSlice';

import logoImg from '@assets/img/logo.png';

import {
  AsyncBtn,
  Btn,
  CounterWrapper,
  ImgWrap,
  Row,
  TextBox,
  Value,
} from './Counter.styled';

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <CounterWrapper>
      <ImgWrap>
        <img src={logoImg} alt="logo" />
      </ImgWrap>
      <Row>
        <Btn
          aria-label="Decrement value"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </Btn>
        <Value>{count}</Value>
        <Btn aria-label="Increment value" onClick={() => dispatch(increment())}>
          +
        </Btn>
      </Row>
      <Row>
        <TextBox
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <Btn onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount
        </Btn>
        <AsyncBtn onClick={() => dispatch(incrementAsync(incrementValue))}>
          Add Async
        </AsyncBtn>
        <Btn onClick={() => dispatch(incrementIfOdd(incrementValue))}>
          Add If Odd
        </Btn>
      </Row>
    </CounterWrapper>
  );
};

export default Counter;
