import { abby } from "@lib/ab-testing";
import { Button, Layout, Page, Text } from "@vercel/examples-ui";
import { useRouter } from "next/router";

export default function Marketing() {
  const router = useRouter();

  const removeBucket = () => {
    const resetVariant = abby.getABResetFunction("Marketing");
    resetVariant();
    router.reload();
  };
  const bucket = (router.query.bucket ?? "") as string;

  return (
    <Page>
      <Text variant="h2" className="mb-6">
        Marketing page variant
      </Text>
      <Text className="text-lg mb-4">
        You&apos;re currently on <b>bucket {bucket.toUpperCase()}</b>
      </Text>
      
      <Button type="button" variant="black" onClick={removeBucket}>
        Remove bucket
      </Button>
    </Page>
  );
}

Marketing.Layout = Layout;
