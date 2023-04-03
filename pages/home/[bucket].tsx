import { abby } from "@lib/ab-testing";
import { Button, Layout, Page, Text } from "@vercel/examples-ui";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const removeBucket = () => {
    const resetVariant = abby.getABResetFunction("HOME");
    resetVariant();
    router.reload();
  };
  const bucket = (router.query.bucket ?? "") as string;

  return (
    <Page>
      <Text variant="h2" className="mb-6">
        Home page variant
      </Text>
      <Text className="text-lg mb-4">
        You&apos;re currently on <b>bucket {bucket.toUpperCase()}</b>
      </Text>
      <Button variant="black" onClick={removeBucket}>
        Remove bucket
      </Button>
    </Page>
  );
}

Home.Layout = Layout;
