import { Dispatch, SetStateAction, useState } from "react";
import { Heart, LoaderCircle } from "lucide-react";
import { Puppy } from "../types";
import { toggleLikedByStatus } from "../queries";

export function LikeToggle({ puppy }: { puppy: Puppy }) {
  const [pending, setPending] = useState(false);
  return (
    <button
      className="group"
      onClick={async () => {
        setPending(true);
        const updatedPuupy = await toggleLikedByStatus(puppy.id);
        console.log(updatedPuupy);
        setPending(false);
      }}
    >
      {pending ? (
        <LoaderCircle className="animate-spin stroke-slate-300" />
      ) : (
        <Heart
          className={
            puppy.likedBy.includes(1)
              ? "fill-pink-500 stroke-none"
              : "stroke-slate-200 group-hover:stroke-slate-300"
          }
        />
      )}
    </button>
  );
}
