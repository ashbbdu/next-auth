import Link from "next/link";
import { Card } from "../ui/card";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md    ">
      <div>
        <h2>{headerLabel}</h2>
        <div>{children}</div>
        <Link href={backButtonHref}>{backButtonLabel}</Link>
      </div>
      {
        showSocial ? <div>YT IN LI</div> : null
      }
    </Card>
  );
};
