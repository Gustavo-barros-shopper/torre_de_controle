import React from 'react';
import DatePicker from 'react-datepicker';
import {Button, InputGroup, InputGroupAddon} from 'reactstrap';
import styled from 'styled-components';

const StyledDatePicker = styled(DatePicker)`
  width: 100px;
  border-radius: 0;
  border-color: #1ea6ec;
  border-right: 0;
`;

const DatePickerCalendarIcon = styled.div`
  border-radius: 0 0.2rem 0.2rem 0;
  border: solid 1px #1ea6ec;
  border-left: 0;
  padding: 0.25rem 0.5rem;
  color: #1ea6ec;
`;

const DateSelector = ({date, setDate, prevDay, nextDay, ...rest}) => {
    return (
        <InputGroup size="sm" {...rest}>
            <InputGroupAddon addonType="prepend">
                <Button color="secondary" onClick={prevDay}>
                    <i className="fa fa-chevron-left"/>
                </Button>
                <Button color="secondary" onClick={nextDay}>
                    <i className="fa fa-chevron-right"/>
                </Button>
            </InputGroupAddon>
            <StyledDatePicker
                className="form-control form-control-sm"
                selected={date}
                onChange={setDate}
                popperPlacement="auto"
                locale="pt-BR"
                dateFormat="dd/MM/yyyy"
            />
            <InputGroupAddon addonType="append">
                <DatePickerCalendarIcon>
                    <i className="fa fa-calendar-o"/>
                </DatePickerCalendarIcon>
            </InputGroupAddon>
        </InputGroup>
    )
};

export default DateSelector;