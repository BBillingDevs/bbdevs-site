import React from 'react';
import { Box, Heading, Text, Link, Divider } from '@chakra-ui/react';

const PrivacyPolicy = () => {
    return (
        <Box fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif" p="1em">
            <Heading as="h1" size="xl" mb={4}>
                Privacy Policy
            </Heading>
            <Text mb={6}>
                This privacy policy applies to the Butterflies of Zimbabwe app (hereby referred to as
                "Application") for mobile devices that was created by Bilda Bees Pvt Ltd (hereby referred to
                as "Service Provider") as an Ad Supported service. This service is intended for use "AS IS".
            </Text>

            <Heading as="h2" size="lg" mb={4}>
                What information does the Application obtain and how is it used?
            </Heading>
            <Text mb={6}>
                The Application does not obtain any information when you download and use it. Registration
                is not required to use the Application.
            </Text>

            <Heading as="h2" size="lg" mb={4}>
                Does the Application collect precise real time location information of the device?
            </Heading>
            <Text mb={6}>
                This Application does not collect precise information about the location of your mobile
                device.
            </Text>

            <Heading as="h2" size="lg" mb={4}>
                Do third parties see and/or have access to information obtained by the Application?
            </Heading>
            <Text mb={6}>
                Since the Application does not collect any information, no data is shared with third
                parties.
            </Text>

            <Heading as="h2" size="lg" mb={4}>
                What are my opt-out rights?
            </Heading>
            <Text mb={6}>
                You can stop all collection of information by the Application easily by uninstalling it. You
                may use the standard uninstall processes as may be available as part of your mobile device
                or via the mobile application marketplace or network.
            </Text>

            <Heading as="h2" size="lg" mb={4}>
                Children
            </Heading>
            <Text mb={6}>
                The Application is not used to knowingly solicit data from or market to children under the
                age of 13.
            </Text>
            <Text mb={6}>
                The Service Provider does not knowingly collect personally identifiable information from
                children. The Service Provider encourages all children to never submit any personally
                identifiable information through the Application and/or Services. The Service Provider
                encourages parents and legal guardians to monitor their children's Internet usage and to
                help enforce this Policy by instructing their children never to provide personally
                identifiable information through the Application and/or Services without their permission.
                If you have reason to believe that a child has provided personally identifiable information
                to the Service Provider through the Application and/or Services, please contact the Service
                Provider at{' '}
                <Link href="mailto:admin@bbdevs.com" color="teal.500">
                    admin@bbdevs.com
                </Link>{' '}
                so that they will be able to take the necessary actions. You must also be at least 16 years
                of age to consent to the processing of your personally identifiable information in your
                country (in some countries we may allow your parent or guardian to do so on your behalf).
            </Text>

            <Heading as="h2" size="lg" mb={4}>
                Security
            </Heading>
            <Text mb={6}>
                The Service Provider is concerned about safeguarding the confidentiality of your
                information. However, since the Application does not collect any information, there is no
                risk of your data being accessed by unauthorized individuals.
            </Text>

            <Heading as="h2" size="lg" mb={4}>
                Changes
            </Heading>
            <Text mb={6}>
                This Privacy Policy may be updated from time to time for any reason. The Service Provider
                will notify you of any changes to their Privacy Policy by updating this page with the new
                Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as
                continued use is deemed approval of all changes.
            </Text>
            <Text mb={6}>This privacy policy is effective as of 2024-11-26</Text>

            <Heading as="h2" size="lg" mb={4}>
                Your Consent
            </Heading>
            <Text mb={6}>
                By using the Application, you are consenting to the processing of your information as set
                forth in this Privacy Policy now and as amended by the Service Provider.
            </Text>

            <Heading as="h2" size="lg" mb={4}>
                Contact Us
            </Heading>
            <Text mb={6}>
                If you have any questions regarding privacy while using the Application, or have questions
                about the practices, please contact the Service Provider via email at{' '}
                <Link href="mailto:admin@bbdevs.xyz" color="teal.500">
                    admin@bbdevs.xyz
                </Link>
                .
            </Text>

            <Divider my={6} />


        </Box>
    );
};

export default PrivacyPolicy;
