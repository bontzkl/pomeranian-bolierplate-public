import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import React, { useState, useEffect } from 'react';
const Sliders = () => {
  const [loanValue, setLoanValue] = useState(50000);
  const [period, setPeriod] = useState(24);
  const [rate, setRate] = useState();
  const [error, setError] = useState('');
  const STEP_CREDIT_VALUE = 500;
  const MIN_CREDIT_VALUE = 20000;
  const MAX_CREDIT_VALUE = 120000;
  const STEP_CREDIT_DURATION = 2;
  const MAX_CREDIT_DURATION = 48;
  const MIN_CREDIT_DURATION = 6;
  const handleLoanValueChange = (event) => {
    setLoanValue(event.target.value);
  };
  const handlePeriodChange = (event) => {
    setPeriod(event.target.value);
  };
  const calcRates = (loanValue, period) => {
    if (
      loanValue <= MAX_CREDIT_VALUE &&
      loanValue >= MIN_CREDIT_VALUE &&
      period >= MIN_CREDIT_DURATION &&
      period <= MAX_CREDIT_DURATION
    ) {
      setError('');
    } else {
      setError('Value out of range!');
    }
    setRate(Math.ceil(loanValue / period));
  };
  useEffect(() => {
    calcRates(loanValue, period);
  }, [loanValue, period]);

  return (
    <>
      <OutlinedInput
        type="number"
        onChange={handleLoanValueChange}
        value={loanValue}
      />
      <Slider
        aria-label="Wysokość kredytu"
        value={loanValue}
        valueLabelDisplay="auto"
        step={STEP_CREDIT_VALUE}
        marks
        min={MIN_CREDIT_VALUE}
        max={MAX_CREDIT_VALUE}
        onChange={handleLoanValueChange}
      />
      <OutlinedInput
        type="number"
        onChange={handlePeriodChange}
        value={period}
      />
      <Slider
        aria-label="Ilość rat"
        value={period}
        valueLabelDisplay="auto"
        step={STEP_CREDIT_DURATION}
        marks
        min={MIN_CREDIT_DURATION}
        max={MAX_CREDIT_DURATION}
        onChange={handlePeriodChange}
      />
      <div>Wysokość jednej raty: {rate}</div>
      <div>{error ? error : null}</div>
    </>
  );
};
const PageLimitForm = () => {
  const [amount, setAmount] = useState();
  const handleChangeAmount = (event) => {
    setAmount(event.target.value);
  };
  return (
    <FormControl fullWidth>
      Selected: {amount}
      <InputLabel id="pageElementLimit">Number of elemnts on page</InputLabel>
      <Select
        labelId="pageElementLimit"
        label="Age"
        onChange={handleChangeAmount}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};
export function MaterialUI() {
  const [name, setName] = useState();
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleClick = () => {
    alert(name);
  };
  return (
    <Stack spacing={2} direction="row">
      {/* <PageLimitForm />
      <OutlinedInput onChange={handleChange} />
      <Button variant="outlined" onClick={handleClick}>
        Click me!
      </Button> */}
      <Sliders />
    </Stack>
  );
}
