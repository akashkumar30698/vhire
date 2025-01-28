import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { streamTokenProvider } from "../actions/stream.actions";
import { StreamVideoClient } from "@stream-io/video-react-sdk";
import { useUser } from "@clerk/nextjs";


const useMeetingActions = () => {
  const router = useRouter();
  // const client = useStreamVideoClient();
  const { user } = useUser()

  const createInstantMeeting = async () => {


    try {

      if (!process.env.NEXT_PUBLIC_STREAM_API_KEY) {
        throw new Error("No Stream API Key found")
      }

  
      const streamUser = {
        id: user?.id || "", //  (fallback to empty string if undefined)
        name: user?.firstName && user?.lastName ? `${user.firstName} ${user.lastName}` : user?.id, 
        image: user?.imageUrl || "", //(fallback to empty string if undefined)
      };

      const client = new StreamVideoClient({
        apiKey: process.env.NEXT_PUBLIC_STREAM_API_KEY,
        user: streamUser,
        tokenProvider: streamTokenProvider,
      });

      const id = crypto.randomUUID();
      const call = client?.call("default", id);

      await call?.getOrCreate({
        data: {
          starts_at: new Date().toISOString(),
          custom: {
            description: "Instant Meeting",
          },
        },
      });

      router.push(`/meeting/${call.id}`);
      toast.success("Meeting Created");
    } catch (error) {
      console.error(error);
      toast.error("Failed to create meeting");
    }
  };

  const joinMeeting = (callId: string) => {
    //  console.log("client", client)
    //   if (!client)// return toast.error("Failed to join meeting. Please try again.");
    if (callId) {
      router.push(`/meeting/${callId}`)
    }
  };

  return { createInstantMeeting, joinMeeting };
};

export default useMeetingActions;