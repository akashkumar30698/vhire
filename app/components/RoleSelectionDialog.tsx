

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useContextApi } from "../context/getContext"




export function RoleSelectionDialog() {
    const [selectedRole, setSelectedRole] = useState<"interviewer" | "candidate" | null>(null)
    const syncUser = useMutation(api.users.syncUser) //More like create user
    const { user } = useUser();
    const { isOpen,setIsOpen } = useContextApi()
    const clerkId = user?.id || ""
    const name = user?.fullName
    const email = user?.primaryEmailAddress?.emailAddress
    const image = user?.imageUrl



    const handleSubmit = async () => {
        if (selectedRole) {

            if (!name || !email || !image) {
                console.log("User credientials missing")
                return
            }

            if (clerkId) {

                await syncUser({
                    clerkId,
                    name,
                    email,
                    image,
                    role: selectedRole, // Setting the role of the user
                })
            }

            setIsOpen(false)

            // onRoleSelect(selectedRole)
        }
    }

    return (
        <Dialog open={isOpen}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Choose Your Role</DialogTitle>
                    <DialogDescription>
                        Please select your role to continue. This will help us personalize your experience.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <RadioGroup
                        value={selectedRole || ""}
                        onValueChange={(value: string) => setSelectedRole(value as "interviewer" | "candidate")}
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="interviewer" id="interviewer" />
                            <Label htmlFor="interviewer">Interviewer</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="candidate" id="candidate" />
                            <Label htmlFor="candidate">Candidate</Label>
                        </div>
                    </RadioGroup>
                </div>
                <DialogFooter>
                    <Button onClick={handleSubmit} disabled={!selectedRole}>
                        Continue
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

