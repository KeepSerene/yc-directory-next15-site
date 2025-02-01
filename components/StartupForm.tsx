"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import MDEditor from "@uiw/react-md-editor";

export default function StartupForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pitch, setPitch] = useState("**Hello, World!**");

  return (
    <form action={() => {}} className="startup-form">
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
          placeholder="Startup Category (Tech, Health, Education, etc.)"
          required
          className="startup-form-input"
        />

        {errors.category && (
          <p className="startup-form-error">{errors.category}</p>
        )}
      </div>

      <div>
        <label htmlFor="link" className="startup-form-label">
          Image URL
        </label>

        <Input
          id="link"
          name="link"
          placeholder="Startup Image URL"
          required
          className="startup-form-input"
        />

        {errors.link && <p className="startup-form-error">{errors.link}</p>}
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
          height={300}
          textareaProps={{
            placeholder:
              "Briefly describe your ideas and what problems it solves",
          }}
          style={{ borderRadius: 20, overflow: "hidden" }}
        />

        {errors.pitch && <p className="startup-form-error">{errors.pitch}</p>}
      </div>
    </form>
  );
}
