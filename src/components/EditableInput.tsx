import { Box, SxProps } from "@mui/system";
import { ChangeEventHandler, InputHTMLAttributes, useState } from "react";

export const EditableInput: React.FC<{
  value: string;
  setValue: (value: string) => void;
  sx?: SxProps;
}> = (props) => {
  const [editing, setEditing] = useState(false);
  const [hovering, setHovering] = useState(false);

  const handleChange = (e: InputHTMLAttributes<HTMLInputElement>) => {
    props.setValue(e.value as string);
  };

  const handleFocus = () => {
    setEditing(true);
  };

  const handleBlur = () => {
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
          value={props.value}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      ) : (
        <div
          onClick={handleFocus}
          style={{
            border: hovering ? "1px solid blue" : "none",
          }}
        >
          {props.value}
        </div>
      )}
    </Box>
  );
};
