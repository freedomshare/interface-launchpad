import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center" textAlign="center" bgColor="black">
      <Text margin="auto">
        {new Date().getFullYear()} -{" "}
        <Link href="https://benchmarkprotocol.finance/" isExternal rel="noopener noreferrer">
          BENCHMARK PROTOCOL
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
