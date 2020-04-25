import dappnodeLogo from "img/dappnode.png";
import aragonLogo from "img/aragon.png";
import d4rmLogo from "img/d4rm.png";
import commonsStack from "img/commonsStack.png";
import giveth from "img/giveth.png";
import swarmcity from "img/swarmcity.png";

export const twitterUrl = "https://twitter.com/dapplion";
export const githubUrl = "https://github.com/dapplion";
export const sayHiLink = twitterUrl;

export const recentWorkItems: {
  title: string;
  body: string;
  img: string;
  url: string;
}[] = [
  {
    title: "DAppNode",
    body:
      "Decentralized node and DApp orchestrator based on docker. Architecture building and design.",
    img: dappnodeLogo,
    url: "https://dappnode.io",
  },
  {
    title: "AragonSDK",
    body:
      "Improve the aragon developer experience. Build and mantain tools to interact with DAOs and Aragon Apps.",
    img: aragonLogo,
    url: "https://blog.aragon.one/aragon-buidler-plugin/",
  },
  {
    title: "SwarmCity",
    body:
      "Blockchain based marketplace with a built in reputation system. Mantain and expand its app and API layer.",
    img: swarmcity,
    url: "http://swarm.city/",
  },
  {
    title: "D4RM",
    body:
      "Decentralized forms, for decentralized projects. Inception and development in the EthParis 2019.",
    img: d4rmLogo,
    url: "https://github.com/dapplion/d4rm#d4rm",
  },
  {
    title: "Augmented Token Bounding Curve Design",
    body:
      "Developed an app to experiment and test augmented token bonding curves, part of the Commons Stack.",
    img: commonsStack,
    url: "https://commons-stack.github.io/augmented-tbc-design/",
  },
  {
    title: "Giveth Funds Forwarder",
    body:
      "Intermediate Ethereum smart contract to allow direct donations from DAOs to Giveth milestones via its bridge.",
    img: giveth,
    url:
      "https://github.com/dapplion/giveth-funds-forwarder#giveth-funds-forwarder",
  },
];
