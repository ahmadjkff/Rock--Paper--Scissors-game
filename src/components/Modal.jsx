"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import closeIcon from "../../images/icon-close.svg";
import rules from "../../images/image-rules.svg";

export default function Modal() {
  const [open, setOpen] = useState(false); // Set to false initially so the modal is closed by default.

  return (
    <div>
      {/* Button placed outside the Dialog for visibility */}
      <button
        onClick={() => setOpen(true)}
        className="absolute bottom-1 right-3 mb-4 rounded-md border-2 border-HeaderOutline px-8 py-1 font-semibold text-white"
      >
        RULES
      </button>

      <Dialog open={open} onClose={setOpen} className="relative z-50">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white p-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div className="mb-16 flex justify-between">
                <DialogTitle className={"text-2xl font-bold text-DarkText"}>
                  RULES
                </DialogTitle>
                <button type="button" onClick={() => setOpen(false)}>
                  <img src={closeIcon} alt="" />
                </button>
              </div>
              <img className="mx-auto" src={rules} alt="rules" />
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
