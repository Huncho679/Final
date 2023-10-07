import { Text } from "@chakra-ui/react";

export default function Message({ children, color, fontWeight }) {
  return (
    <Text
      fontSize="24px"
      color={color ? `${color}` : "#111"}
      fontWeight={fontWeight ? `${fontWeight}` : "500"}
    >
      {children}
    </Text>
  );
}
