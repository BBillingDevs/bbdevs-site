// Home.jsx
import { useState } from "react";
import {
    Box,
    Heading,
    Text,
    Button,
    Input,
    Textarea,
    FormControl,
    FormLabel,
    HStack,
    Container,
    useDisclosure,
    IconButton,
    Image,
    Collapse,
    VStack,
    Icon,
    Flex,
} from "@chakra-ui/react";
import {
    FaMobileAlt,
    FaApple,
    FaAndroid,
    FaReact,
    FaGlobe,
} from "react-icons/fa";
import {ReactTyped} from "react-typed";
import bbdevsLogo from "./assets/logo.png";
import { SiFirebase, SiFlutter, SiVite, SiWordpress } from "react-icons/si";
import Slider from "react-slick";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import emailjs from "emailjs-com";
import zimgin from "./assets/zimgin.png";
import cranesafaris from "./assets/cranesafaris.png";
import thf from "./assets/thf.png";
import ruzawi from "./assets/ruzawi.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import ReCAPTCHA from "react-google-recaptcha";

function Home() {
    const { isOpen, onToggle } = useDisclosure();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [recaptchaToken, setRecaptchaToken] = useState(null); // Track reCAPTCHA token state
    const [isSubmitting, setIsSubmitting] = useState(false); // Handle form submission state

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!recaptchaToken) {
            alert("Please verify that you are not a robot.");
            return;
        }

        setIsSubmitting(true);

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID, // Using env variables
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Using env variables
                e.target,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY, // Using env variables
                },
            )
            .then(
                (result) => {
                    alert("Message sent successfully!");
                },
                (error) => {
                    alert("Failed to send the message, please try again.");
                },
            )
            .finally(() => {
                setIsSubmitting(false);
                setRecaptchaToken(null); // Reset reCAPTCHA after form submission
                e.target.reset(); // Reset form fields
            });
    };

    const handleRecaptchaChange = (token) => {
        setRecaptchaToken(token); // Update reCAPTCHA token state
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3, // Adjust this based on how many logos you want to show at once
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768, // For tablets and small screens
                settings: {
                    dots: true,
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480, // For mobile screens
                settings: {
                    dots: true,
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <>
            {/* Navigation Bar */}
            <Box as="nav" bg="teal.900" p={4} w="100vw">
                <VStack justifyContent="space-between" alignItems="center">
                    {/* Hamburger Icon (Visible only on mobile) */}
                    <IconButton
                        aria-label="Open Menu"
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        display={{ base: "block", md: "none" }}
                        onClick={onToggle}
                        color="gray.100" // Better contrast for the icon
                    />
                    {/* Nav Links (Visible only on larger screens) */}
                    <HStack
                        spacing={14}
                        alignItems="center"
                        display={{ base: "none", md: "flex" }}
                    >
                        <Button as="a" href="#home" variant="link" color="gray.100">
                            Home
                        </Button>
                        <Button as="a" href="#about" variant="link" color="gray.100">
                            About Us
                        </Button>
                        <Button as="a" href="#clients" variant="link" color="gray.100">
                            Our Clients
                        </Button>
                        <Button as="a" href="#contact" variant="link" color="gray.100">
                            Contact Us
                        </Button>
                    </HStack>
                </VStack>

                {/* Mobile Menu (Visible only on mobile) */}
                <Collapse in={isOpen} animateOpacity>
                    <VStack bg="gray.200" p={4} spacing={6} alignItems="center">
                        <Button as="a" href="#home" variant="link" onClick={onToggle}>
                            Home
                        </Button>
                        <Button as="a" href="#about" variant="link" onClick={onToggle}>
                            About Us
                        </Button>
                        <Button as="a" href="#clients" variant="link" onClick={onToggle}>
                            Our Clients
                        </Button>
                        <Button as="a" href="#contact" variant="link" onClick={onToggle}>
                            Contact Us
                        </Button>
                    </VStack>
                </Collapse>
            </Box>

            <Container maxW="100vw" px="0">
                {/* Header Section */}
                <Box
                    as="header"
                    id="home"
                    minH="100vh" // Full height
                    width="100%" // Full width
                    position="relative" // For relative positioning
                    bg="gray.50" // Background color
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    px={8}
                >
                    <Box
                        position="absolute"
                        top="0"
                        left="0"
                        width="100%" // Full width
                        height="100%" // Full height
                        sx={{
                            backgroundImage: "url(circuit-board.svg)",
                            backgroundSize: "500px 500px",
                            backgroundRepeat: "repeat",
                            opacity: "0.05",
                        }}
                    />
                    {/* Your content here */}
                    <Flex
                        direction={{ base: "column", md: "row" }} // Column on mobile, row on larger screens
                        align="center"
                        justify="space-between"
                        width="100%"
                        maxW="1200px" // Limits content width
                    >
                        {/* Logo on the Left */}
                        <Box
                            flex="1"
                            mb={{ base: 8, md: 0 }}
                            textAlign={{ base: "center", md: "left" }}
                            position="relative" // For positioning effects
                        >
                            <Image
                                src={bbdevsLogo}
                                alt="BBDevs Logo"
                                w={{ base: "150px", md: "500px" }}
                            />
                        </Box>

                        {/* Text and Animated Heading on the Right */}
                        <VStack
                            flex="2"
                            spacing={6}
                            align={{ base: "center", md: "flex-start" }} // Center on mobile, align left on larger screens
                        >
                            <Heading
                                as="h1"
                                color="teal.700"
                                fontSize={{ base: "4xl", md: "5xl" }}
                            >
                                Welcome to BBDevs
                            </Heading>

                            <Text
                                as="b"
                                fontSize={{ base: "xl", md: "2xl" }}
                                color="gray.700"
                            >
                                <ReactTyped
                                    strings={[
                                        "Empowering businesses through bespoke mobile and web applications.",
                                        "Crafting responsive, high-performance websites that drive results.",
                                        "Delivering seamless, intuitive solutions for Android and iOS platforms.",
                                        "Leveraging cutting-edge technologies to bring your ideas to life.",
                                        "Transforming digital visions into reality with robust, scalable solutions.",
                                        "Innovating with the latest tools to build secure, future-proof applications.",
                                    ]}
                                    typeSpeed={50}
                                    backDelay={2000}
                                    fadeOut={true}
                                    loop
                                />
                            </Text>
                        </VStack>
                    </Flex>
                </Box>{" "}
                <Box as="section" id="about" py={10}>
                    <Container maxW="container.lg">
                        <Heading as="h2" color="teal.700" textAlign="center" mb={6}>
                            About Us
                        </Heading>
                        <Text fontSize="lg" textAlign="center" color="gray.700" mb={4}>
                            We are a Zimbabwean-based company with a decade of experience in
                            delivering high-quality, innovative solutions. Our diverse skill
                            set allows us to tackle a wide range of projects, from mobile and
                            web development to cloud technologies and digital transformation.
                        </Text>
                        <Text fontSize="lg" textAlign="center" color="gray.700">
                            We pride ourselves on adapting to the evolving needs of businesses
                            and consistently delivering results. Our commitment lies in
                            offering the expertise and creativity needed to bring your ideas
                            to life.
                        </Text>
                    </Container>
                </Box>
                {/* Our Services Section */}
                <Box as="section" id="services" py={10}>
                    <Container maxW="container.lg">
                        <Heading as="h2" textAlign="center" mb={6} color="teal.700">
                            Our Services
                        </Heading>
                        <Text textAlign="center" mb={6} fontSize="xl" color="gray.700">
                            We specialize in the development of both mobile and web
                            applications, as well as fully responsive websites. Our expertise
                            spans across platforms, including Android and iOS, utilizing a
                            wide range of cutting-edge technologies to deliver innovative and
                            high-performance solutions.
                        </Text>
                        {/* Services Icons */}
                        <VStack spacing={10} align="center">
                            <HStack spacing={10}>
                                {/* Mobile Development */}
                                <VStack>
                                    <Icon as={FaMobileAlt} w={12} h={12} color="teal.600" />
                                    <Text>Mobile Apps</Text>
                                </VStack>
                                {/* Android */}
                                <VStack>
                                    <Icon as={FaAndroid} w={12} h={12} color="green.500" />
                                    <Text>Android Development</Text>
                                </VStack>
                                {/* Apple */}
                                <VStack>
                                    <Icon as={FaApple} w={12} h={12} color="gray.800" />
                                    <Text>Apple Development</Text>
                                </VStack>
                            </HStack>
                            <HStack spacing={10}>
                                {/* Web Development */}
                                <VStack>
                                    <Icon as={FaGlobe} w={12} h={12} color="teal.600" />
                                    <Text>Web Development</Text>
                                </VStack>
                                {/* React */}
                                <VStack>
                                    <Icon as={FaReact} w={12} h={12} color="blue.500" />
                                    <Text>React</Text>
                                </VStack>
                                {/* Vite */}
                                <VStack>
                                    <Icon as={SiVite} w={12} h={12} color="purple.600" />
                                    <Text>Vite</Text>
                                </VStack>
                                {/* Firebase */}
                                <VStack>
                                    <Icon as={SiFirebase} w={12} h={12} color="orange.400" />
                                    <Text>Firebase</Text>
                                </VStack>
                                {/* Flutter */}
                                <VStack>
                                    <Icon as={SiFlutter} w={12} h={12} color="blue.400" />
                                    <Text>Flutter</Text>
                                </VStack>
                                <VStack>
                                    <Icon as={SiWordpress} w={12} h={12} color="black" />
                                    <Text>Wordpress</Text>
                                </VStack>
                            </HStack>
                        </VStack>
                    </Container>
                </Box>
                {/* Our Clients Section */}
                <Box as="section" id="clients" py={10}>
                    <Container maxW="container.lg">
                        <Heading as="h2" textAlign="center" mb={6} color="teal.700">
                            Our Clients
                        </Heading>
                        {/* Slick Carousel */}
                        <Slider {...sliderSettings}>
                            {/* Carousel Items */}
                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                height="150px"
                            >
                                <a
                                    href="https://ruzawi.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={ruzawi}
                                        draggable="false"
                                        alt="Ruzawi School"
                                        style={{ maxHeight: "100%", maxWidth: "100%" }}
                                    />
                                </a>
                            </Box>
                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                height="150px"
                            >
                                <a
                                    href="https://zimgin.com"
                                    draggable="false"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={zimgin}
                                        alt="Zimbabwe Gin"
                                        style={{ maxHeight: "100%", maxWidth: "100%" }}
                                    />
                                </a>
                            </Box>
                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                height="150px"
                            >
                                <a
                                    href="https://cranesafaris.co.zw"
                                    draggable="false"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={cranesafaris}
                                        alt="Crane Safaris"
                                        style={{ maxHeight: "100%", maxWidth: "100%" }}
                                    />
                                </a>
                            </Box>
                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                height="150px"
                            >
                                <a
                                    href="https://tikkihywoodfoundation.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={thf}
                                        draggable="false"
                                        alt="Tikki Hywood Foundation"
                                        style={{ maxHeight: "100%", maxWidth: "100%" }}
                                    />
                                </a>
                            </Box>
                        </Slider>
                    </Container>
                </Box>
                {/* Contact Us Section */}
                <Box as="section" id="contact" py={10}>
                    <Container maxW="container.lg">
                        <Heading as="h2" color="teal.700" textAlign="center" mb={6}>
                            Contact Us
                        </Heading>
                        <form onSubmit={handleSubmit}>
                            <VStack spacing={4}>
                                <FormControl isRequired>
                                    <FormLabel>Name</FormLabel>
                                    <Input type="text" name="name" onChange={handleChange} />
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>Email</FormLabel>
                                    <Input type="email" name="email" onChange={handleChange} />
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>Message</FormLabel>
                                    <Textarea name="message" onChange={handleChange} />
                                </FormControl>

                                {/* reCAPTCHA Component */}
                                <ReCAPTCHA
                                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} // Your reCAPTCHA site key
                                    onChange={handleRecaptchaChange}
                                />

                                <Button
                                    type="submit"
                                    colorScheme="teal"
                                    size="md"
                                    isDisabled={!recaptchaToken || isSubmitting} // Disable if no token or form is submitting
                                    isLoading={isSubmitting} // Show loading state when submitting
                                >
                                    Send Message
                                </Button>
                            </VStack>
                        </form>
                    </Container>
                </Box>
            </Container>
        </>
    );
}

export default Home;
