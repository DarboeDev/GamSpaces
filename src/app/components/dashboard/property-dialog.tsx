import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { PropertyForm } from "./property-form";
import { getUserData } from "../../lib/cookies";
// import { useAuth } from "@clerk/nextjs";
import { User } from "../../types";

const propertySchema = z.object({
  userId: z.any(),
  title: z.string().min(1, "Title is required"),
  action: z.enum(["buy", "rent"]),
  price: z.number().min(1, "Price is required"),
  type: z.enum(["land", "house", "apartment"]),
  description: z.string().min(10, "Description must be at least 10 characters"),
  bedrooms: z.number().min(0),
  bathrooms: z.number().min(0),
  square_feet: z.object({
    total: z.number().min(1, "Square feet is required"),
    covered: z.number().optional(),
  }),
  available: z.string().min(1, "Availability date is required"),
  address: z.string().min(1, "Address is required"),
  images: z.array(z.string()).min(1, "At least one image is required"),
  coordinates: z.object({
    gplusCode: z.string(),
  }),
});

export type PropertyFormValues = z.infer<typeof propertySchema>;

interface PropertyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PropertyDialog({ open, onOpenChange }: PropertyDialogProps) {
  const [loading, setLoading] = useState(false);
  // const { userId, isLoaded } = useAuth();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const checkAndFetchUser = async () => {
      const userData = await getUserData();
      setUser(JSON.parse(userData));
      console.log(JSON.parse(userData));
    };
    checkAndFetchUser();
  }, []);

  const form = useForm<PropertyFormValues>({
    resolver: zodResolver(propertySchema),
    defaultValues: {
      userId: user?.id,
      action: "buy",
      type: "house",
      bedrooms: 0,
      bathrooms: 0,
      square_feet: {
        total: 0,
      },
      images: [],
      coordinates: {
        gplusCode: "",
      },
    },
  });

  async function onSubmit(data: PropertyFormValues) {
    setLoading(true);
    try {
      // Add your API call here
      console.log(data);
      onOpenChange(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Property</DialogTitle>
        </DialogHeader>
        <PropertyForm form={form} onSubmit={onSubmit} loading={loading} />
      </DialogContent>
    </Dialog>
  );
}
