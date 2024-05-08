import { Box, Container, Grid, GridItem, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FaGamepad } from "react-icons/fa";

const Index = () => {
  const projects = [
    {
      name: "Space Invader Clone",
      description: "A recreation of the classic Space Invader game using JavaScript.",
      icon: "https://images.unsplash.com/photo-1553644417-7acf71f4af2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHw4LWJpdCUyMHNwYWNlJTIwaW52YWRlcnxlbnwwfHx8fDE3MTUxOTg0OTN8MA&ixlib=rb-4.0.3&q=80&w=1080",
      link: "#",
    },
    {
      name: "Pixel Art Drawer",
      description: "A web-based tool to create pixel art, built with React and Canvas API.",
      icon: "https://images.unsplash.com/photo-1580195319388-1bea55742a42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHw4LWJpdCUyMHBpeGVsJTIwYXJ0fGVufDB8fHx8MTcxNTE5ODQ5NHww&ixlib=rb-4.0.3&q=80&w=1080",
      link: "#",
    },
    {
      name: "Retro Snake Game",
      description: "The nostalgic snake game developed with modern web technologies.",
      icon: "https://images.unsplash.com/photo-1594652634010-275456c808d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHw4LWJpdCUyMHNuYWtlJTIwZ2FtZXxlbnwwfHx8fDE3MTUxOTg0OTR8MA&ixlib=rb-4.0.3&q=80&w=1080",
      link: "#",
    },
    {
      name: "Tetris Clone",
      description: "A responsive Tetris game clone made with TypeScript.",
      icon: "https://images.unsplash.com/photo-1646708198974-4c4893e8a2d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHw4LWJpdCUyMHRldHJpc3xlbnwwfHx8fDE3MTUxOTg0OTV8MA&ixlib=rb-4.0.3&q=80&w=1080",
      link: "#",
    },
  ];

  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
          <FaGamepad /> Retro Dev Portfolio
        </Heading>
        <Text fontSize="lg" color="gray.400">
          Welcome to my personal programming project portfolio, inspired by the charm and simplicity of 1980s arcade games.
        </Text>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          {projects.map((project, index) => (
            <GridItem key={index} w="100%" bg="gray.700" p={4} borderRadius="lg">
              <VStack>
                <Image src={project.icon} boxSize="100px" />
                <Heading as="h3" size="md" color="white">
                  {project.name}
                </Heading>
                <Text color="gray.300">{project.description}</Text>
                <Link href={project.link} color="blue.200" isExternal>
                  View Project
                </Link>
              </VStack>
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </Container>
  );
};

export default Index;
