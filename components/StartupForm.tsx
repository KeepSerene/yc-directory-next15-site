"use client";

import { useActionState, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { formSchema } from "@/lib/validation";
import { createStartup } from "@/lib/actions";
import { z } from "zod";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import MDEditor from "@uiw/react-md-editor";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

export default function StartupForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pitch, setPitch] = useState("");

  const { toast } = useToast();

  const router = useRouter();

  const handleSubmit = async (prevState: any, formData: FormData) => {
    try {
      const formEntries = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        imgUrl: formData.get("imgUrl") as string,
        category: formData.get("category") as string,
        pitch,
      };

      // Validate form inputs
      await formSchema.parseAsync(formEntries);
      console.log(formEntries);

      const result = await createStartup(prevState, formData, pitch);

      if (result.status === "SUCCESS") {
        toast({
          title: "Success",
          description: "Your startup post has been created successfully!",
        });

        router.push(`/startup/${result._id}`);
      }

      return result;
    } catch (err) {
      console.error(err);

      if (err instanceof z.ZodError) {
        const fieldErrors = err.flatten().fieldErrors;
        setErrors(fieldErrors as unknown as Record<string, string>);
        toast({
          title: "Error",
          description: "Please check your inputs and try again!",
          variant: "destructive",
        });

        return { ...prevState, error: "Validation failed!", status: "ERROR" };
      }

      toast({
        title: "Error",
        description: "An unexpected error has occurred!",
        variant: "destructive",
      });

      return {
        ...prevState,
        error: "An unexpected error has occurred!",
        status: "ERROR",
      };
    }
  };

  const [state, formAction, isPending] = useActionState(handleSubmit, {
    error: "",
    status: "INITIAL",
  });

  return (
    <form action={formAction} className="startup-form">
      <div>
        <label htmlFor="title" className="startup-form-label">
          Title
        </label>

        <Input
          id="title"
          name="title"
          placeholder="Startup Title"
          required
          className="startup-form-input"
        />

        {errors.title && <p className="startup-form-error">{errors.title}</p>}
      </div>

      <div>
        <label htmlFor="description" className="startup-form-label">
          Description
        </label>

        <Textarea
          id="description"
          name="description"
          placeholder="Startup Description"
          required
          className="startup-form-textarea"
        />

        {errors.description && (
          <p className="startup-form-error">{errors.description}</p>
        )}
      </div>

      <div>
        <label htmlFor="category" className="startup-form-label">
          category
        </label>

        <Input
          id="category"
          name="category"
          placeholder="Tech, Health, Education, and so on"
          required
          className="startup-form-input"
        />

        {errors.category && (
          <p className="startup-form-error">{errors.category}</p>
        )}
      </div>

      <div>
        <label htmlFor="imgUrl" className="startup-form-label">
          Image URL
        </label>

        <Input
          id="imgUrl"
          name="imgUrl"
          placeholder="Startup Thumbnail URL"
          required
          className="startup-form-input"
        />

        {errors.imgUrl && <p className="startup-form-error">{errors.imgUrl}</p>}
      </div>

      <div data-color-mode="light">
        <label htmlFor="pitch" className="startup-form-label">
          Pitch
        </label>

        <MDEditor
          id="pitch"
          value={pitch}
          onChange={(value) => setPitch(value as string)}
          preview="edit"
          previewOptions={{ disallowedElements: ["style"] }}
          textareaProps={{
            placeholder:
              "Briefly describe your ideas and what problems it solves...",
          }}
          height={300}
          style={{
            borderRadius: "20px",
            marginTop: "0.75rem",
            overflow: "hidden",
          }}
        />

        {errors.pitch && <p className="startup-form-error">{errors.pitch}</p>}
      </div>

      <Button
        type="submit"
        disabled={isPending}
        className="startup-form-btn text-white transition-transform duration-200 hover:scale-[1.01] focus-visible:scale-[1.01]"
      >
        {isPending ? <span>Submitting...</span> : <span>Submit</span>}

        <Send className="size-6 ml-2" />
      </Button>
    </form>
  );
}
