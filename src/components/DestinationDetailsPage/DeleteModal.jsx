"use client";

import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";

export function DeleteModalPage({ destination }) {
  const { _id, destinationName } = destination;
  
  const handleDelete = async () => {
    console.log(_id);
    const res = await fetch(`http://localhost:5000/destination/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    // console.log(data);
    if (data.deletedCount > 0) {
      toast.error("Deleted");
      redirect("/destinations");
    }
  };

  return (
    <AlertDialog>
      <Button className={"rounded-lg"} variant="danger">
        <MdDeleteForever /> Cancel
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete destination permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{destinationName}</strong>{" "}
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete Project
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
