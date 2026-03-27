"use client";

import { useState, useEffect, useMemo } from "react";
import { createFetch } from "@better-fetch/fetch";
import { 
  Loader2, 
  Users, 
  Search, 
  Filter, 
  Mail, 
  Phone, 
  CheckCircle2,
  Clock,
  ArrowRight
} from "lucide-react";
import { toast } from "sonner";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  image: string | null;
  createdAt: string;
  profile?: {
    volunteerAreas: string[];
    phone?: string;
    location?: string;
  } | null;
}

const $fetch = createFetch({
  baseURL: "/api",
});

const VOLUNTEER_AREAS = [
  "Security", "Catering", "Child Care", "Multimedia",
  "Cleaners", "Stage Management", "Ushers", "Greeters",
  "Worship Team", "Medical / First Aid", "Transportation", "Counseling",
];

export function VolunteerManagement() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArea, setSelectedArea] = useState<string>("all");

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const { data, error } = await $fetch<User[]>("/admin/users");
      if (error) throw error;
      // Filter only those who are actually volunteers
      const volunteers = (data || []).filter(u => u.profile?.volunteerAreas && u.profile.volunteerAreas.length > 0);
      setUsers(volunteers);
    } catch (error) {
      toast.error("Failed to load volunteers");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredVolunteers = useMemo(() => {
    return users.filter(v => {
      const matchesSearch = v.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           v.email.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesArea = selectedArea === "all" || v.profile?.volunteerAreas.includes(selectedArea);
      return matchesSearch && matchesArea;
    });
  }, [users, searchQuery, selectedArea]);

  const stats = useMemo(() => {
    return {
      total: users.length,
      byArea: VOLUNTEER_AREAS.map(area => ({
        name: area,
        count: users.filter(u => u.profile?.volunteerAreas.includes(area)).length
      })).sort((a, b) => b.count - a.count)
    };
  }, [users]);

  const getInitials = (name?: string | null) => {
    if (!name) return "V";
    return name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
  };

  return (
    <div className="w-full space-y-8">
      <div>
        <h1 className="text-3xl tracking-tight">Volunteer Management</h1>
        <p className="text-muted-foreground">
          Coordinate and manage our dedicated volunteers across all departments.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-primary/5 border-primary/10 p-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Volunteers</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
            <p className="text-xs text-muted-foreground">Active community members</p>
          </CardContent>
        </Card>
        {stats.byArea.slice(0, 3).map((area, i) => (
          <Card className="p-2" key={area.name}>
             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{area.name}</CardTitle>
              <div className="text-xs font-bold text-muted-foreground">#{i+1}</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{area.count}</div>
              <p className="text-xs text-muted-foreground">Allocated volunteers</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input 
            placeholder="Search by name or email..." 
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Filter className="h-4 w-4 text-muted-foreground hidden sm:block" />
          <Select value={selectedArea} onValueChange={setSelectedArea}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              {VOLUNTEER_AREAS.map(area => (
                <SelectItem key={area} value={area}>{area}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-md border bg-card/50 backdrop-blur-sm">
        <Table className="w-full p-2">
          <TableHeader>
            <TableRow>
              <TableHead>Volunteer</TableHead>
              <TableHead>Departments</TableHead>
              <TableHead>Contact Info</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={4} className="h-24 text-center">
                  <Loader2 className="h-6 w-6 animate-spin mx-auto text-muted-foreground" />
                </TableCell>
              </TableRow>
            ) : filteredVolunteers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="h-24 text-center text-muted-foreground">
                  No volunteers found {selectedArea !== "all" ? `in ${selectedArea}` : ""}.
                </TableCell>
              </TableRow>
            ) : (
              filteredVolunteers.map((volunteer) => (
                <TableRow key={volunteer.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 border shadow-sm">
                        <AvatarImage src={volunteer.image || ""} alt={volunteer.name} />
                        <AvatarFallback className="bg-warning/10 text-warning-foreground text-xs font-bold">
                          {getInitials(volunteer.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="font-semibold">{volunteer.name}</span>
                        <span className="text-[10px] text-muted-foreground italic flex items-center gap-1">
                          <CheckCircle2 className="size-2 text-green-500" /> 
                          Member since {new Date(volunteer.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1 max-w-[300px]">
                      {volunteer.profile?.volunteerAreas.map(area => (
                        <Badge key={area} variant="outline" className="text-[10px] px-1.5 py-0 h-5 bg-background">
                          {area}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1 text-xs">
                       <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group">
                          <Mail className="size-3 group-hover:text-primary" />
                          <span>{volunteer.email}</span>
                       </div>
                       {volunteer.profile?.phone && (
                          <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group">
                             <Phone className="size-3 group-hover:text-primary" />
                             <span>{volunteer.profile.phone}</span>
                          </div>
                       )}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="h-8 gap-1 group">
                      View Profile
                      <ArrowRight className="size-3 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
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
