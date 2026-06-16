"use client";

import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { redirect, useRouter, } from "next/navigation";


export function DeleteDialog({ destination }) {
  const { _id, destinationName } = destination;
const router = useRouter();
  const handleDelete = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${_id}`,
        {
          method: "DELETE",
        
        }
      );


      const data = await res.json();
      console.log("Deleted:", data);
      router.push('/destinations')
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  return (
    <AlertDialog>
      <AlertDialog.Trigger>
        <Button variant="outline" className="text-rose-500 rounded-none">
          <TrashBin />
          Delete
        </Button>
      </AlertDialog.Trigger>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete destination permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p>
                This will permanently delete{" "}
                <strong>{destinationName}</strong> and all of its data. This
                action cannot be undone.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>

              <Button
                onClick={handleDelete}
                slot="close"
                variant="danger"
              >
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
