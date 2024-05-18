import {
  Text,
  TextInput,
  Title,
  Button,
  Group,
  Box,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import DETAILS from "../../utils/contactDetails";
import "./Contact.scss";
import { motion } from "framer-motion";
import { fadeIn, textVariant2 } from "../../utils/motion";

const Contact = () => {
  const form = useForm({
    initialValues: {
      email: "",
      fullName: "",
      subject: "",
      message: "",
    },
  });

  return (
    <>
      <div className="contacts">
        <div className="lr">
          <div className="right">
            <div className="title">
              <Title>Contact us for more details</Title>
            </div>
            <Box className="box " mx="auto">
              <motion.form
                onSubmit={form.onSubmit(() => window.location.href = "mailto:smtbea2024@gmail.com")}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                variants={fadeIn("right", "tween", 0.2, 0.7)}
              >
                <div className="one">
                  <TextInput
                    className="input"
                    withAsterisk
                    label="Email"
                    placeholder="Your Email"
                    {...form.getInputProps("email")}
                  />
                  <TextInput
                    className="input"
                    width="100%"
                    withAsterisk
                    label="Full name"
                    placeholder="Your Name"
                    {...form.getInputProps("fullName")}
                  />
                </div>
                <TextInput
                  withAsterisk
                  width="100%"
                  label="Subject"
                  placeholder="Subject"
                  {...form.getInputProps("subject")}
                />

                <Textarea
                  className="message"
                  width="100%"
                  height="200px"
                  withAsterisk
                  label="Message"
                  placeholder="Type a message"
                  {...form.getInputProps("message")}
                />
                <Group position="right" mt="md">
                  <Button className="button" type="submit">
                    Send a message
                  </Button>
                </Group>
              </motion.form>
            </Box>
          </div>

          <motion.div
            className="left"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            variants={textVariant2}
          >
            {DETAILS.map((e) => (
              <div key={e} className="details">
                <div className="detailsTitle">
                  {
                    <e.icon
                      className="icon"
                      size={30}
                      onClick={() => (window.location.href = e.link)}
                    />
                  }
                  <Title className="detitle">{e.title}</Title>
                </div>

                <Text className="detailsDescription">{e.description}</Text>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;
