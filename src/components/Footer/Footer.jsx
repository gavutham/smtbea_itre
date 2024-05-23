import {
  createStyles,
  Text,
  ActionIcon,
  Group,
  rem,
  TextInput,
  useMantineTheme,
} from "@mantine/core";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import footerGroups from "../../utils/footerGroups";
import footerUsefulLinksItems from "../../utils/footerUsefulLinksItems";
import { useNavigate } from "react-router-dom";
import "./Footer.scss";
import { motion } from "framer-motion";
import { footerVariants } from "../../utils/motion";

const useStyles = createStyles((theme) => ({
  footer: {
    position: "relative",
    height: `calc(100vh - 75px - (${theme.spacing.xl} * 4))`,
    bottom: 0,
    padding: `calc(${theme.spacing.xl} * 2) 8%`,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    [theme.fn.smallerThan("md")]: {
      paddingTop: `68px`,
    },
    [theme.fn.smallerThan("sm")]: {
      padding: `calc(${theme.spacing.xl} * 2) 8%`,
    },
  },

  logo: {
    maxWidth: rem(200),

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  description: {
    marginTop: rem(5),
    marginBottom: rem(20),
    lineHeight: rem(28),

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "24px",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  wrapper: {
    width: rem(160),
  },

  link: {
    display: "block",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(3),
    paddingBottom: rem(3),

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `1.5rem`,
    marginTop: `1rem`,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
    [theme.fn.smallerThan("md")]: {
      marginBottom: `1rem`,
    },
  },

  tabletAddress: {
    display: "none",
    marginTop: `40px`,
    [theme.fn.smallerThan("md")]: {
      display: "block",
    },
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  address: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
    [theme.fn.smallerThan("sm")]: {
      display: "block",
    },
  },

  newsletter: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    width: `650px`,
    marginBottom: rem(40),
    [theme.fn.smallerThan("md")]: {
      width: `100%`,
    },
  },

  newsletterInput: {
    marginTop: "24px",
    width: `450px`,
    [theme.fn.smallerThan("md")]: {
      width: `100%`,
    },
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "auto",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

const Footer = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const theme = useMantineTheme();

  const openEmail = () => {
    window.location.href = "mailto:smtbea2024@gmail.com";
  };

  const groups = footerGroups.map(() => {
    const links = footerUsefulLinksItems.map((link, index) => (
      <>
        <Text
          key={index}
          className={classes.link}
          component="a"
          href={link.link}
          onClick={(event) => {
            event.preventDefault();
            navigate(link.link);
          }}
        >
          {link.label}
        </Text>
      </>
    ));

    return (
      <div className={classes.wrapper} key={footerGroups}>
        <Text className={classes.title}>{footerGroups}</Text>
        {links}
      </div>
    );
  });

  return (
    <>
      <motion.footer
        className={`footer ${classes.footer}`}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.00000000000000000001 }}
        variants={footerVariants}
      >
        <div className={classes.inner}>
          <div className={classes.logo}>
            <Text className={classes.title} id="title">
              SMTBEA - ITRE
            </Text>
            <Text
              size="sm"
              color="dimmed"
              className={`description ${classes.description}`}
            >
              Phone: +91 8939316518
              <br />
              <span onClick={openEmail}>Email: srinivasanm@ssn.edu.in</span>
            </Text>
            <div className={classes.tabletAddress}>
              <Text className={classes.title}>Address</Text>
              <Text size="sm" color="dimmed" className={classes.description}>
                SSN RC, Department of Physcis,
                <br />
                SSNCE, Kalavakkam,
                <br />
                Chennai, 603110,
                <br />
                India
              </Text>
            </div>
          </div>
          <div className={classes.address}>
            <Text className={classes.title}>Address</Text>
            <Text size="sm" color="dimmed" className={classes.description}>
              SSN RC, Department of Physcis,
              <br />
              SSNCE, Kalavakkam,
              <br />
              Chennai, 603110,
              <br />
              India
            </Text>
          </div>
          <div className={classes.groups}>{groups}</div>
        </div>
        <div className={classes.afterFooter}>
          <Text color="dimmed" size="sm">
            © Copyright SMTBEA-ITRE. All rights reserved.
          </Text>

          <Group className={classes.social} position="right">
            <Text
              color="dimmed"
              size="md"
              onClick={() =>
                window.open("https://www.linkedin.com/in/gavutham-kanagaraj/")
              }
            >
              development by{" "}
              <span style={{ textDecoration: "underline", cursor: "pointer" }}>
                Gavutham K
              </span>
            </Text>
          </Group>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
