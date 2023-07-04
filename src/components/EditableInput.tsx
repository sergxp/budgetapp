import { set } from "@automapper/core";
import { Box, SxProps } from "@mui/system";
import {
  ChangeEvent,
  ChangeEventHandler,
  InputHTMLAttributes,
  useEffect,
  useState,
} from "react";

export const EditableInput: React.FC<{
  value: string;
  updateValue: (value: string) => void;
  sx?: SxProps;
}> = (props) => {
  const [editing, setEditing] = useState(false);
  const [hovering, setHovering] = useState(false);

  const [value, setValue] = useState(props.value);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as string);
  };

  const handleFocus = () => {
    setEditing(true);
  };

  const handleBlur = (e: InputHTMLAttributes<HTMLInputElement>) => {
    props.updateValue(value);
    setEditing(false);
  };

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={props.sx}
    >
      {editing ? (
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{ width: "100%" }}
        />
      ) : (
        <div
          onClick={handleFocus}
          style={{
            border: hovering ? "1px solid blue" : "none",
            width: "100%",
          }}
        >
          {value}
        </div>
      )}
    </Box>
  );
};
