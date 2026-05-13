"use client";

import { authClient } from "@/app/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { RxUpdate } from "react-icons/rx";
import { toast } from "react-toastify";

export function UpdateProfileModal() {
    const router = useRouter()

    const handleUpdateProfile= async (e)=>{
        e.preventDefault();

        const formData = new FormData(e.target);
        const updatedUser = Object.fromEntries(formData.entries())
        // console.log(updatedUser);

        if(updatedUser.name.trim() == ""){
            toast.info("no thing updated")
            return;
        } else if(updatedUser.image.trim() == ""){
            toast.info("no thing updated")
            return;
        }
        
        const res = await authClient.updateUser({
            name: updatedUser.name,
            // email: updatedUser.email,
            image: updatedUser.image,
        })
        console.log(res);
        if(res.data){
            router.refresh("/admin")
            toast.success("Update seccess full")
        }
    }

  return (
    <Modal>
      <Button
        variant="ghost"
        className={"w-full rounded-none bg-cyan-400 text-white"}
      >
        Edit Profile
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <RxUpdate />
              <Modal.Heading>Update your Profile</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={handleUpdateProfile} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  {/* <TextField className="w-full" name="email" type="email">
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" />
                  </TextField> */}
                  <TextField className="w-full" name="image" type="text">
                    <Label>Image</Label>
                    <Input placeholder="Enter your imageURI" />
                  </TextField>
                  <Modal.Footer>
                    <Button  type="submit" slot="close">Save</Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
