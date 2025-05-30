import { Button } from "@/components/ui/button";
import { Google } from "./ui/google";
import { signIn } from "@/lib/auth"
const GoogleSignIn = () => {
  return (
    <form
      action={async () => {
        "use server";
          await signIn("google")
      }}
    >
      <Button className="w-full" variant="outline">
        <Google/>
        Continue with google
      </Button>
    </form>
  );
};

export {  GoogleSignIn };
