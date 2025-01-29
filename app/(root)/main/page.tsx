"use client";

import ActionCard from "../../components/ActionCard";
import { QUICK_ACTIONS } from "../../constants";
import { useUserRole } from "../../hooks/useUserRole";
import { useState } from "react";
import { api } from "../../../convex/_generated/api";
import { useRouter } from "next/navigation";
import MeetingModal from "../../components/MeetingModal";
import { Loader2Icon } from "lucide-react";
import MeetingCard from "../../components/MeetingCard";
import LoaderUI from "@/app/components/LoaderUI";
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { useContextApi } from "@/app/context/getContext";
import { RoleSelectionDialog } from "@/app/components/RoleSelectionDialog";

export default function DashboardHome() {
  const router = useRouter();

  const { isInterviewer, isLoading } = useUserRole();
  const interviews = useQuery(api.interviews.getMyInterviews);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"start" | "join">();
  const { user } = useUser()
  const { isOpen, setIsOpen } = useContextApi()


  const getUsers = useQuery(api.users.getUserByClerkId, { clerkId: user?.id || "no_user" })

  useEffect(() => {
    // If user doesn't have a role, show the Role Selection dialog
    if (getUsers?.role == "null") {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [getUsers]);


  if (!user) return null

  




  const handleQuickAction = (title: string) => {
    switch (title) {
      case "New Call":
        setModalType("start");
        setShowModal(true);
        break;
      case "Join Interview":
        setModalType("join");
        setShowModal(true);
        break;
      default:
        router.push(`/${title.toLowerCase()}`);
    }
  };

  if (isLoading) return <LoaderUI />;

  return (

    <>
      {/* Show the RoleSelectionDialog only if the user is new and hasn't been shown the dialog */}
      {isOpen && <RoleSelectionDialog />}

      <div className="container max-w-7xl mx-auto p-6">
        {/* WELCOME SECTION */}
        <div className="rounded-lg bg-card p-6 border shadow-sm mb-10">
          <h1 className="text-4xl font-bold  bg-clip-text text-transparent dark:text-white bg-custom">
            Welcome back!
          </h1>
          <p className="text-muted-foreground mt-2">
            {isInterviewer
              ? "Manage your interviews and review candidates effectively"
              : "Access your upcoming interviews and preparations"}
          </p>
        </div>

        {isInterviewer ? (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {QUICK_ACTIONS.map((action) => (
                <ActionCard
                  key={action.title}
                  action={action}
                  onClick={() => handleQuickAction(action.title)}
                />
              ))}
            </div>

            <MeetingModal
              isOpen={showModal}
              onClose={() => setShowModal(false)}
              title={modalType === "join" ? "Join Meeting" : "Start Meeting"}
              isJoinMeeting={modalType === "join"}
            />
          </>
        ) : (
          <>
            <div>
              <h1 className="text-3xl font-bold">Your Interviews</h1>
              <p className="text-muted-foreground mt-1">View and join your scheduled interviews</p>
            </div>

            <div className="mt-8">
              {interviews === undefined ? (
                <div className="flex justify-center py-12">
                  <Loader2Icon className="h-8 w-8 animate-spin text-muted-foreground" />
                </div>
              ) : interviews.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {interviews.map((interview) => (
                    <MeetingCard key={interview._id} interview={interview} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  You have no scheduled interviews at the moment
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>

  );
} 