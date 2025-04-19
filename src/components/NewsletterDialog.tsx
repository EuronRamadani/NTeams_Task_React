import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

interface NewsletterDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NewsletterDialog: React.FC<NewsletterDialogProps> = ({
  open,
  onOpenChange,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center text-brand-colorspurple">
            Thank you for subscribing!
          </DialogTitle>
        </DialogHeader>
        <div className="text-center mt-4">
          <p className="text-typographytypography-grey">
            You've successfully subscribed to our newsletter. Stay tuned for the latest updates!
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};