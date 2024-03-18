import { Button } from "@mui/material";

export default function StyledButton(props) {
  return (
    <Button
      {...props}
      type="normal"
      style={{
        backgroundColor: "#FF645A",
        color: "white",
        textTransform: "capitalize",
      }}
    >
      {props.text}
    </Button>
  );
}
