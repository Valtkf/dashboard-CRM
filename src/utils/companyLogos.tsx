import { StripeIcon } from "@/assets/logo/StripeIcon";
import { GithubIcon } from "@/assets/logo/GithubIcon";
import { AmazonIcon } from "@/assets/logo/AmazonIcon";
import { SteamIcon } from "@/assets/logo/SteamIcon";
import { AdobeIcon } from "@/assets/logo/AdobeIcon";
import { ArcIcon } from "@/assets/logo/ArcIcon";
import { FigmaIcon } from "@/assets/logo/FigmaIcon";
import { SlackIcon } from "@/assets/logo/SlackIcon";
import { OpenSeaIcon } from "@/assets/logo/OpenSeaIcon";
import DefaultLogo from "@/assets/logo/DefaultLogo"; // Assurez-vous que DefaultLogo est bien importé

export const companyLogos: Record<string, React.ComponentType> = {
  "Stripe Inc.": StripeIcon,
  "Github Corp.": GithubIcon,
  Amazon: AmazonIcon,
  Steam: SteamIcon,
  "AdobeLLC.": AdobeIcon,
  "The Browser Company": ArcIcon,
  Figma: FigmaIcon,
  "Slack Inc.": SlackIcon,
  Opensea: OpenSeaIcon,
};
