"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ImageSlider } from "@/components/ui/image-slider";

type ImageSliderDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  projectTitle: string;
  initialIndex?: number;
};

export function ImageSliderDialog({
  isOpen,
  onClose,
  images,
  projectTitle,
  initialIndex = 0,
}: ImageSliderDialogProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[95vh] overflow-hidden p-0">
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle className="text-left">{projectTitle}</DialogTitle>
        </DialogHeader>
        <div className="px-6 pb-6">
          <ImageSlider
            images={images}
            currentIndex={currentIndex}
            onIndexChange={setCurrentIndex}
            projectTitle={projectTitle}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
