"use client";

import { useCoverImage } from "@/hooks/use-cover-image";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { SingleImageDropzone } from "../upload/single-image";
import { useEdgeStore } from "@/lib/edgestore";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";
import { UploaderProvider, UploadFn } from "../upload/uploader-provider";

export const CoverImageModal = () => {
  const { edgestore } = useEdgeStore();
  const coverImage = useCoverImage();
  const update = useMutation(api.documents.update);
  const params = useParams();

  const onClose = () => {
    coverImage.onClose();
  };

  const uploadFn: UploadFn = async ({ file, onProgressChange, signal }) => {
    const res = await edgestore.publicFiles.upload({
      file,
      onProgressChange,
      signal,
      options: {
        replaceTargetUrl: coverImage.url,
      },
    });

    await update({
      id: params.documentId as Id<"documents">,
      coverImage: res.url,
    });

    onClose();
    return res;
  };

  return (
    <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cover Image</DialogTitle>
        </DialogHeader>
        <UploaderProvider uploadFn={uploadFn} autoUpload>
          <SingleImageDropzone
            className="w-full outline-none"
            height={200}
            dropzoneOptions={{
              maxSize: 1024 * 1024 * 2,
            }}
          />
        </UploaderProvider>
      </DialogContent>
    </Dialog>
  );
};
