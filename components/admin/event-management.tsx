"use client";

import { useState, useEffect } from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { createFetch } from "@better-fetch/fetch";
import {
  Plus,
  Edit,
  Trash2,
  Loader2,
  Calendar,
  User,
  Megaphone,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ministerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  role: z.string().optional(),
  image: z.string().url("Invalid image URL").optional().or(z.literal("")),
});

const eventSchema = z.object({
  title: z.string().min(1, "Title is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  poster: z.string().url("Invalid poster URL").optional().or(z.literal("")),
  description: z.string().optional(),
  status: z.enum(["draft", "published", "cancelled"]),
  ministers: z.array(ministerSchema).optional(),
  sponsorIds: z.array(z.string()).optional(),
});

type EventFormValues = z.infer<typeof eventSchema>;

interface Minister {
  id: string;
  name: string;
  role: string | null;
  image: string | null;
}

interface Sponsor {
  id: string;
  name: string;
  logo: string | null;
}

interface Event {
  id: string;
  title: string;
  slug: string;
  startDate: string;
  endDate: string;
  poster: string | null;
  description: string | null;
  status: string;
  ministers: Minister[];
  sponsors: Sponsor[];
}

const $fetch = createFetch({
  baseURL: "/api",
});

export function EventManagement() {
  const [events, setEvents] = useState<Event[]>([]);
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);

  const form = useForm<EventFormValues>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: "",
      startDate: "",
      endDate: "",
      poster: "",
      description: "",
      status: "published",
      ministers: [],
      sponsorIds: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "ministers",
  });

  const fetchData = async () => {
    try {
      setLoading(true);
      const [eventsRes, sponsorsRes] = await Promise.all([
        $fetch<Event[]>("/events"),
        $fetch<Sponsor[]>("/sponsors"),
      ]);

      if (eventsRes.error) throw eventsRes.error;
      if (sponsorsRes.error) throw sponsorsRes.error;

      setEvents(eventsRes.data || []);
      setSponsors(sponsorsRes.data || []);
    } catch (error) {
      toast.error("Failed to load data");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmit = async (values: EventFormValues) => {
    try {
      if (editingEvent) {
        const { error } = await $fetch(`/events/${editingEvent.id}`, {
          method: "PATCH",
          body: values,
        });
        if (error) throw error;
        toast.success("Event updated successfully");
      } else {
        const { error } = await $fetch("/events", {
          method: "POST",
          body: values,
        });
        if (error) throw error;
        toast.success("Event created successfully");
      }
      setOpen(false);
      setEditingEvent(null);
      form.reset();
      fetchData();
    } catch (error) {
      toast.error("Failed to save event");
      console.error(error);
    }
  };

  const onDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this event?")) return;

    try {
      const { error } = await $fetch(`/events/${id}`, {
        method: "DELETE",
      });
      if (error) throw error;
      toast.success("Event deleted successfully");
      fetchData();
    } catch (error) {
      toast.error("Failed to delete event");
      console.error(error);
    }
  };

  const handleEdit = (event: Event) => {
    setEditingEvent(event);
    form.reset({
      title: event.title,
      startDate: new Date(event.startDate).toISOString().slice(0, 16),
      endDate: new Date(event.endDate).toISOString().slice(0, 16),
      poster: event.poster || "",
      description: event.description || "",
      status: event.status as any,
      ministers: event.ministers.map((m) => ({
        name: m.name,
        role: m.role || "",
        image: m.image || "",
      })),
      sponsorIds: event.sponsors.map((s) => s.id),
    });
    setOpen(true);
  };

  return (
    <div className='w-full'>
      <div className='flex justify-between items-center mb-8'>
        <div>
          <h1 className='text-3xl font-bold  '>Event Management</h1>
          <p className='text-muted-foreground'>
            Manage your church events, conferences, and special programs.
          </p>
        </div>
        <Dialog
          open={open}
          onOpenChange={(val) => {
            setOpen(val);
            if (!val) {
              setEditingEvent(null);
              form.reset();
            }
          }}
        >
          <DialogTrigger asChild>
            <Button className='flex items-center gap-2'>
              <Plus className='h-4 w-4' /> New Event
            </Button>
          </DialogTrigger>
          <DialogContent className='sm:max-w-[600px] max-h-[90vh] overflow-y-auto'>
            <DialogHeader>
              <DialogTitle>
                {editingEvent ? "Edit Event" : "Add New Event"}
              </DialogTitle>
            </DialogHeader>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='space-y-4'
            >
              <div className='grid grid-cols-1 gap-4'>
                <Controller
                  control={form.control}
                  name='title'
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>Title</FieldLabel>
                      <Input
                        {...field}
                        id={field.name}
                        placeholder='Event Title'
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </div>

              <div className='grid grid-cols-2 gap-4'>
                <Controller
                  control={form.control}
                  name='startDate'
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>Start Date</FieldLabel>
                      <Input
                        {...field}
                        type='datetime-local'
                        id={field.name}
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  control={form.control}
                  name='endDate'
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>End Date</FieldLabel>
                      <Input
                        {...field}
                        type='datetime-local'
                        id={field.name}
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </div>

              <Controller
                control={form.control}
                name='poster'
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Poster URL</FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      placeholder='https://...'
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                control={form.control}
                name='description'
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Description</FieldLabel>
                    <Textarea
                      {...field}
                      id={field.name}
                      placeholder='Tell us more about the event...'
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                control={form.control}
                name='status'
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Status</FieldLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger id={field.name}>
                        <SelectValue placeholder='Select status' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='published'>Published</SelectItem>
                        <SelectItem value='draft'>Draft</SelectItem>
                        <SelectItem value='cancelled'>Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <div className='space-y-4 pt-4'>
                <div className='flex justify-between items-center'>
                  <h3 className='text-sm font-medium'>Ministers</h3>
                  <Button
                    type='button'
                    variant='outline'
                    size='sm'
                    onClick={() => append({ name: "", role: "", image: "" })}
                  >
                    <Plus className='h-4 w-4 mr-2' /> Add Minister
                  </Button>
                </div>
                <div className='space-y-4'>
                  {fields.map((field, index) => (
                    <div
                      key={field.id}
                      className='grid grid-cols-12 gap-2 items-start border p-3 rounded-md relative group'
                    >
                      <div className='col-span-11 grid grid-cols-2 gap-2'>
                        <Controller
                          control={form.control}
                          name={`ministers.${index}.name`}
                          render={({ field }) => (
                            <Input
                              {...field}
                              placeholder='Name'
                            />
                          )}
                        />
                        <Controller
                          control={form.control}
                          name={`ministers.${index}.role`}
                          render={({ field }) => (
                            <Input
                              {...field}
                              placeholder='Role'
                            />
                          )}
                        />
                        <div className='col-span-2'>
                          <Controller
                            control={form.control}
                            name={`ministers.${index}.image`}
                            render={({ field }) => (
                              <Input
                                {...field}
                                placeholder='Image URL'
                              />
                            )}
                          />
                        </div>
                      </div>
                      <Button
                        type='button'
                        variant='ghost'
                        size='icon'
                        className='text-destructive'
                        onClick={() => remove(index)}
                      >
                        <X className='h-4 w-4' />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <DialogFooter className='pt-4 pb-4'>
                <Button
                  type='submit'
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting && (
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                  )}
                  {editingEvent ? "Update Event" : "Create Event"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className='rounded-md border bg-card/50 backdrop-blur-sm'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Status</TableHead>
              <TableHead>Event</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className='hidden md:table-cell text-center'>
                Ministers
              </TableHead>
              <TableHead className='text-right'>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className='h-24 text-center'
                >
                  <Loader2 className='h-6 w-6 animate-spin mx-auto text-muted-foreground' />
                </TableCell>
              </TableRow>
            ) : events.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className='h-24 text-center text-muted-foreground'
                >
                  No events found. Create your first one!
                </TableCell>
              </TableRow>
            ) : (
              events.map((event) => (
                <TableRow key={event.id}>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        event.status === "published"
                          ? "bg-green-500/10 text-green-500"
                          : event.status === "draft"
                            ? "bg-yellow-500/10 text-yellow-500"
                            : "bg-red-500/10 text-red-500"
                      }`}
                    >
                      {event.status.charAt(0).toUpperCase() +
                        event.status.slice(1)}
                    </span>
                  </TableCell>
                  <TableCell className='font-medium'>
                    <div className='flex items-center gap-3'>
                      {event.poster ? (
                        <img
                          src={event.poster}
                          alt={event.title}
                          className='h-10 w-10 rounded object-cover'
                        />
                      ) : (
                        <div className='h-10 w-10 rounded bg-muted flex items-center justify-center'>
                          <Calendar className='h-5 w-5 text-muted-foreground' />
                        </div>
                      )}
                      <div>
                        {event.title}
                        <div className='text-xs text-muted-foreground font-normal'>
                          /{event.slug}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className='text-sm'>
                      {format(new Date(event.startDate), "MMM d, yyyy")}
                    </div>
                    <div className='text-xs text-muted-foreground'>
                      {format(new Date(event.startDate), "HH:mm")}
                    </div>
                  </TableCell>
                  <TableCell className='hidden md:table-cell'>
                    <div className='flex justify-center -space-x-2'>
                      {event.ministers.slice(0, 3).map((m, i) => (
                        <div
                          key={i}
                          className='h-8 w-8 rounded-full border-2 border-background overflow-hidden bg-muted'
                          title={m.name}
                        >
                          {m.image ? (
                            <img
                              src={m.image}
                              alt={m.name}
                              className='h-full w-full object-cover'
                            />
                          ) : (
                            <User className='h-4 w-4 m-1.5 text-muted-foreground' />
                          )}
                        </div>
                      ))}
                      {event.ministers.length > 3 && (
                        <div className='h-8 w-8 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[10px] font-medium'>
                          +{event.ministers.length - 3}
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className='text-right text-muted-foreground'>
                    <div className='flex justify-end gap-2'>
                      <Button
                        variant='ghost'
                        size='icon'
                        onClick={() => handleEdit(event)}
                      >
                        <Edit className='h-4 w-4' />
                      </Button>
                      <Button
                        variant='ghost'
                        size='icon'
                        className='text-destructive hover:text-destructive'
                        onClick={() => onDelete(event.id)}
                      >
                        <Trash2 className='h-4 w-4' />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
