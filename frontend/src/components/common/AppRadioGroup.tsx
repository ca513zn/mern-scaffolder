import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

export interface AppRadioOption {
  label: string;
  value: string | number;
}

interface AppRadioGroupProps {
  label?: string;
  name: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  options: (string | AppRadioOption)[];
  row?: boolean;
  disabled?: boolean;
}

const AppRadioGroup: React.FC<AppRadioGroupProps> = ({
  label,
  name,
  value,
  onChange,
  options,
  row = false,
  disabled = false,
}) => {
  const normalizeOptions = (): AppRadioOption[] =>
    options.map((opt) =>
      typeof opt === "string" ? { label: opt, value: opt } : opt
    );

  return (
    <FormControl component="fieldset" disabled={disabled}>
      {label && <FormLabel component="legend">{label}</FormLabel>}
      <RadioGroup name={name} value={value} onChange={onChange} row={row}>
        {normalizeOptions().map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default AppRadioGroup;
