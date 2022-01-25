import { Button, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import { DollarSign, Award } from 'react-feather';


const Header = () => {
  return (
    <Flex as="header" width="full" justifyContent="space-between"  align="center" p={5} bg="black">
        <Flex >
        <Link href="/">
        <Image
        src="/logos/benchmark.png"
        h="8"
        />
        </Link>
        </Flex>
        <Flex justify="space-around" align="center" justifyContent="space-around"  w="50%"  m="auto">
        <Button bg="#00c15c" rounded="sm" size="md">
            Dashboard
          </Button>
          <Button bg="#00c15c" rounded="sm" size="md">
            About
          </Button>
          <Button bg="#00c15c" rounded="sm" size="md">
            FAQ
          </Button>
          <Button bg="#00c15c" rounded="sm" size="md">
            BEND & Governance
          </Button>
          <Button bg="#00c15c" rounded="sm" size="md">
            Litepaper
          </Button>
        </Flex>
        <Flex justify="space-around" w="15%">
          <Button variant="outline" _hover={{bg:"#00c15c", boxShadow:" #00c15c 0px 0px 25px"}} rightIcon={<Award size="20"/>} borderColor="#00c15c" rounded="sm" size="lg">
            Earn
          </Button>
          <Button variant="outline" _hover={{bg:"#00c15c", boxShadow:" #00c15c 0px 0px 25px"}} rightIcon={<DollarSign size="20"/>} borderColor="#00c15c" rounded="sm" size="lg">
            Buy
          </Button>
        </Flex>
    </Flex>
  );
};

export default Header;
