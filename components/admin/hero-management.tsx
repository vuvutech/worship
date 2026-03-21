"use client";

import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { createFetch } from "@better-fetch/fetch";
import { Save, Loader2, Video as VideoIcon } from "lucide-react";
import { toast } from "sonner";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const heroSchema = z.object({
  videoId: z.string().min(1, "Video ID is required"),
  startTime: z.number().min(0, "Start time must be a positive number"),
});

type HeroFormValues = z.infer<typeof heroSchema>;

const $fetch = createFetch({
  baseURL: "/api/admin",
});

export function HeroManagement() {
  const [loading, setLoading] = useState(true);

  const form = useForm<HeroFormValues>({
    resolver: zodResolver(heroSchema),
    defaultValues: {
      videoId: "bDk_nNbccnc",
      startTime: 108,
    },
  });

  const fetchHeroSettings = async () => {
    try {
      setLoading(true);
      const { data, error } = await $fetch<any>("/hero");
      if (error) throw error;
      if (data) {
        form.reset({
          videoId: data.videoId,
          startTime: data.startTime,
        });
      }
    } catch (error) {
      toast.error("Failed to load hero settings");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHeroSettings();
  }, []);

  const onSubmit = async (values: HeroFormValues) => {
    try {
      const { error } = await $fetch("/hero", {
        method: "POST",
        body: values,
      });
      if (error) throw error;
      toast.success("Hero settings updated successfully");
      fetchHeroSettings();
    } catch (error) {
      toast.error("Failed to update hero settings");
      console.error(error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-48">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center gap-2">
            <VideoIcon className="h-6 w-6 text-primary" />
            <CardTitle className="text-2xl">Hero Video Settings</CardTitle>
          </div>
          <CardDescription>
            Configure the main background video for your landing page.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FieldGroup>
              <Controller
                control={form.control}
                name="videoId"
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>YouTube Video ID</FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      placeholder="e.g., bDk_nNbccnc"
                      aria-invalid={fieldState.invalid}
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      The alphanumeric ID from the YouTube URL (e.g., watch?v=<strong>bDk_nNbccnc</strong>)
                    </p>
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />

              <Controller
                control={form.control}
                name="startTime"
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Start Time (Seconds)</FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      type="number"
                      value={field.value}
                      onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                      aria-invalid={fieldState.invalid}
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      The exact second the background video should start looping from.
                    </p>
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />
            </FieldGroup>

            <div className="flex justify-end pt-4">
              <Button type="submit" disabled={form.formState.isSubmitting} className="w-full sm:w-auto">
                {form.formState.isSubmitting ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Save className="mr-2 h-4 w-4" />
                )}
                Save Settings
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
