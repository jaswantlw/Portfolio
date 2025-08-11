import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Circle,
  Flex,
  Heading,
  HStack,
  Image,
  Tag,
  SimpleGrid,
  Spacer,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  IconButton,
  useColorMode,
  useColorModeValue,
  useToast,
  Tooltip,
  Badge,
  Stack,
} from "@chakra-ui/react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { MdWork, MdArrowUpward } from "react-icons/md";
import { SiExpress, SiMongodb } from "react-icons/si";
import {
  FaPython,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import logo from "./../assets/logoJLW.png";
import hero from "./../assets/hero.png";
import projects from "./../assets/projects/projects.json";
import { send } from "@emailjs/browser"; // using EmailJS (you can replace)
import { NavLink } from "react-router-dom";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();

  const bg = useColorModeValue("rgb(245,245,246)", "rgb(20,20,20)");
  const cardBg = useColorModeValue("white", "rgb(30,30,30)");
  const textColor = useColorModeValue("gray.800", "white");

  useEffect(() => {
    // small accessibility improvement: restore scroll position top when mounted
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone ? formData.phone : "Not Provided",
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message sent",
        description: "I'll get back to you soon.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      toast({
        title: "Failed",
        description:
          "Could not send message. Please use the email address in the footer.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return (
    <Box bg={bg} color={textColor} minH="100vh" pb={10}>
      {/* NAVBAR */}
      <Flex
        w="100%"
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 6 }}
        py={4}
        align="center"
      >
        <HStack spacing={4} align="center">
          <NavLink to={"/"}>
            <Image
              src={logo}
              alt="logo"
              boxSize={{ base: "44px", md: "64px" }}
              objectFit="cover"
            />
          </NavLink>
        </HStack>

        <Spacer />

        <HStack spacing={6} display={{ base: "none", md: "flex" }}>
          {["about", "projects", "contact"].map((sec) => (
            <ScrollLink
              key={sec}
              to={sec}
              smooth={true}
              duration={600}
              offset={-80}
            >
              <Button variant="ghost" _hover={{ color: "yellow.400" }}>
                {sec.toUpperCase()}
              </Button>
            </ScrollLink>
          ))}
        </HStack>

        <HStack spacing={2} ml={4}>
          <IconButton
            aria-label="Toggle color"
            icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
            onClick={toggleColorMode}
            variant="ghost"
          />
        </HStack>
      </Flex>

      {/* HERO */}
      <Flex
        w="100%"
        maxW="1200px"
        mx="auto"
        my={6}
        py={8}
        px={{ base: 4, md: 6 }}
        flexDir={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        bg={cardBg}
        rounded="lg"
        boxShadow="sm"
      >
        <Box position="relative" mt={{ base: 6, md: 0 }}>
          <Circle
            size={{ base: "180px", md: "260px" }}
            bgGradient="conic(from 0deg, red.400, yellow.400, green.400, blue.400, red.400)"
            p={1}
            overflow="hidden"
          >
            <Image
              src={hero}
              alt="hero"
              boxSize={{ base: "170px", md: "250px" }}
              objectFit="cover"
              borderRadius="full"
            />
          </Circle>
        </Box>

        <Flex
          flexDir="column"
          align={{ base: "center", md: "flex-start" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Heading size="md" color="gray.500">
            Hello,
          </Heading>
          <Heading as="h1" size="2xl" mt={2}>
            I'm{" "}
            <Text as="span" color="yellow.400">
              Jaswant
            </Text>
          </Heading>
          <Text
            mt={2}
            color="gray.500"
            fontSize={{ base: "md", md: "lg" }}
            maxW={{ md: "520px" }}
          >
            I craft interactive, scalable, and aesthetic web apps using the MERN
            stack — with a side of AI experiments.
          </Text>
        </Flex>

        <Flex
          flexDir={{ base: "column", md: "column" }}
          align={"center"}
          textAlign={"center"}
        >
          {/* Buttons */}
          <HStack
            mt={6}
            spacing={4}
            justify="center"
            display={{ base: "flex", md: "none" }} // Mobile: buttons in one row
          >
            <ScrollLink to="contact" smooth duration={600} offset={-80}>
              <Button leftIcon={<MdWork />} colorScheme="yellow" size="lg">
                Hire Me
              </Button>
            </ScrollLink>

            <ScrollLink to="projects" smooth duration={600} offset={-80}>
              <Button size="lg" variant="outline">
                View My Work
              </Button>
            </ScrollLink>
          </HStack>

          {/* Desktop: buttons stacked */}
          <VStack mt={6} spacing={4} display={{ base: "none", md: "flex" }}>
            <ScrollLink to="contact" smooth duration={600} offset={-80}>
              <Button leftIcon={<MdWork />} colorScheme="yellow" size="lg">
                Hire Me
              </Button>
            </ScrollLink>

            <ScrollLink to="projects" smooth duration={600} offset={-80}>
              <Button size="lg" variant="outline">
                View My Work
              </Button>
            </ScrollLink>
          </VStack>

          {/* Icons */}
          <HStack mt={6} spacing={4} justify="center">
            <IconButton
              as="a"
              href="https://github.com/jaswantlw"
              target="_blank"
              aria-label="GitHub"
              icon={<FaGithub />}
              variant="ghost"
            />
            <IconButton
              as="a"
              href="https://www.linkedin.com/in/jaswantlal/"
              target="_blank"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              variant="ghost"
            />
          </HStack>
        </Flex>
      </Flex>

      {/* ABOUT */}
      <Box
        id="about"
        w="100%"
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 6 }}
        py={8}
      >
        <Heading as="h2" size="xl" mb={6} color="yellow.400">
          About Me
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          <Box bg={cardBg} rounded="lg" p={6} boxShadow="sm">
            <Text color="gray.500" mb={4}>
              I’m a fourth-year BS Computer Science student at FAST NUCES, and I
              love bringing ideas to life on the web.
            </Text>
            <Text color="gray.500" mb={4}>
              I work mainly with the MERN stack and Flask. I explore AI
              occasionally, building recommendation experiments and small
              models.
            </Text>
            <Text color="gray.500">
              I enjoy building useful, beautiful, and scalable experiences.
            </Text>

            <HStack mt={6} spacing={4} wrap="wrap">
              <Badge colorScheme="yellow">Open to work</Badge>
              <Badge>FAST NUCES</Badge>
              <Badge>Based in Pakistan</Badge>
            </HStack>
          </Box>

          <Box bg={cardBg} rounded="lg" p={6} boxShadow="sm">
            <Heading size="md" mb={4}>
              Quick Facts
            </Heading>
            <Stack spacing={3}>
              <HStack justify="space-between">
                <Text>Experience</Text>
                <Text fontWeight="bold">MERN, Flask</Text>
              </HStack>
              <HStack justify="space-between">
                <Text>Education</Text>
                <Text fontWeight="bold">BS CS (4th year)</Text>
              </HStack>
              <HStack justify="space-between">
                <Text>Available</Text>
                <Text fontWeight="bold">Freelance / Intern</Text>
              </HStack>
            </Stack>
          </Box>
        </SimpleGrid>

        {/* Skills */}
        <Heading mt={8} size="lg" color="gray.500">
          Experience With
        </Heading>
        <HStack mt={4} wrap="wrap" gap={{ base: 8, md: 4 }}>
          {[
            {
              Icon: FaPython,
              label: "Python",
              note: "Scripting, ML experiments",
              color: "#3776AB", // Python blue
            },
            {
              Icon: FaJsSquare,
              label: "JavaScript",
              note: "Frontend logic, Node",
              color: "#F7DF1E", // JS yellow
            },
            { Icon: FaHtml5, label: "HTML5", note: "Markup", color: "#E34F26" }, // HTML orange
            {
              Icon: FaCss3Alt,
              label: "CSS3",
              note: "Styling",
              color: "#1572B6",
            }, // CSS blue
            {
              Icon: FaNodeJs,
              label: "Node.js",
              note: "APIs & backend",
              color: "#339933",
            }, // Node green
            {
              Icon: SiExpress,
              label: "Express",
              note: "REST APIs",
              color: "#000000",
            }, // Express black
            {
              Icon: SiMongodb,
              label: "MongoDB",
              note: "NoSQL",
              color: "#47A248",
            }, // Mongo green
            {
              Icon: FaReact,
              label: "React",
              note: "Modern frontend UIs",
              color: "#61DAFB",
            }, // React blue
          ].map(({ Icon, label, note, color }, i) => (
            <Tooltip
              key={i}
              label={`${label} — ${note}`}
              placement="top"
              hasArrow
            >
              <Box
                p={3}
                rounded="md"
                _hover={{ transform: "scale(1.05)" }}
                transition="all 0.2s"
              >
                <Icon size={36} color={color} />
              </Box>
            </Tooltip>
          ))}
        </HStack>
      </Box>

      {/* PROJECTS */}
      <Box
        id="projects"
        w="100%"
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 6 }}
        py={8}
      >
        <Heading as="h2" size="xl" mb={6} color="yellow.400">
          Projects
        </Heading>

        <SimpleGrid minChildWidth="280px" spacing={6}>
          {projects.map((project, idx) => (
            <Box
              key={idx}
              bg={cardBg}
              rounded="lg"
              overflow="hidden"
              boxShadow="sm"
              position="relative"
              _hover={{ transform: "scale(1.05)" }}
              transition={"all 0.3s ease"}
            >
              <Box
                h="200px"
                bg="gray.900"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  objectFit="contain"
                  maxH="100%"
                  maxW="100%"
                />
              </Box>

              <VStack align="start" p={5} spacing={3}>
                <HStack justify="space-between" w="100%">
                  <Heading size="md">{project.title}</Heading>
                  <Badge>{project.type || "Project"}</Badge>
                </HStack>

                <Text color="gray.500" fontSize="sm">
                  {project.description}
                </Text>

                <HStack wrap="wrap">
                  {project.tech?.map((t, i) => (
                    <Tag key={i} size="sm" colorScheme="yellow">
                      {t}
                    </Tag>
                  ))}
                </HStack>

                <HStack>
                  {project.liveLink && (
                    <Button
                      as="a"
                      href={project.liveLink}
                      target="_blank"
                      leftIcon={<FaExternalLinkAlt />}
                      size="sm"
                      colorScheme="yellow"
                    >
                      Live
                    </Button>
                  )}

                  {project.githubLink && (
                    <Button
                      as="a"
                      href={project.githubLink}
                      target="_blank"
                      leftIcon={<FaGithub />}
                      size="sm"
                      variant="outline"
                    >
                      Code
                    </Button>
                  )}
                </HStack>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* CONTACT */}
      <Box
        id="contact"
        w="100%"
        maxW="800px"
        mx="auto"
        px={{ base: 4, md: 6 }}
        py={8}
      >
        <Heading as="h2" size="xl" mb={4} color="yellow.400">
          Contact Me
        </Heading>
        <Text mb={6} color="gray.500">
          I’d love to hear from you! Drop me a message and I’ll reply as soon as
          I can.
        </Text>

        <Box bg={cardBg} p={6} rounded="lg" boxShadow="sm">
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Phone</FormLabel>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Optional phone"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Write your message..."
                />
              </FormControl>

              <Button type="submit" colorScheme="yellow" w="full">
                Send Message
              </Button>
            </VStack>
          </form>
        </Box>
      </Box>

      {/* FOOTER */}
      <Box
        as="footer"
        w="100%"
        py={6}
        mt={10}
        bg={bg}
        color="gray.500"
        textAlign="center"
      >
        <Box maxW="1200px" mx="auto" px={{ base: 4, md: 6 }}>
          <Text fontWeight="bold">Jaswant</Text>
          <Text fontSize="sm" mb={4}>
            Building useful, beautiful, and scalable web experiences.
          </Text>

          <HStack spacing={4} justify="center" mb={4}>
            <IconButton
              as="a"
              href="https://github.com/jaswantlw"
              target="_blank"
              aria-label="GitHub"
              icon={<FaGithub />}
              variant="ghost"
            />
            <IconButton
              as="a"
              href="https://www.linkedin.com/in/jaswantlal/"
              target="_blank"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              variant="ghost"
            />
            <IconButton
              as="a"
              href="mailto:jaswantlal10@gmail.com"
              aria-label="Email"
              icon={<FaEnvelope />}
              variant="ghost"
            />
          </HStack>

          <Button
            onClick={() => scroll.scrollToTop({ duration: 600 })}
            leftIcon={<MdArrowUpward />}
            variant="ghost"
          >
            Back to Top
          </Button>

          <Text fontSize="xs" color="gray.400" mt={4}>
            © {new Date().getFullYear()} Jaswant. All rights reserved.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
