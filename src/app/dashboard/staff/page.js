"use client";

import { useState } from "react";
import {
  Search,
  Plus,
  MoreHorizontal,
  Stethoscope,
  Users,
  UserCheck,
  Clock3,
  Eye,
  Mail,
  Phone,
  Building2,
  CalendarDays,
  X,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const staffMembers = [
  {
    id: "ST-001",
    name: "Dr. Priya Sharma",
    email: "priya.sharma@citycare.com",
    phone: "+91 98765 43210",
    role: "Doctor",
    department: "General Medicine",
    experience: "8 years",
    status: "Active",
    joined: "12 Jan 2025",
    schedule: "09:00 AM - 02:00 PM",
  },
  {
    id: "ST-002",
    name: "Dr. Amit Verma",
    email: "amit.verma@citycare.com",
    phone: "+91 98123 45678",
    role: "Doctor",
    department: "Dental",
    experience: "6 years",
    status: "Active",
    joined: "18 Feb 2025",
    schedule: "10:00 AM - 04:00 PM",
  },
  {
    id: "ST-003",
    name: "Dr. Rahul Singh",
    email: "rahul.singh@citycare.com",
    phone: "+91 97654 32109",
    role: "Doctor",
    department: "Dermatology",
    experience: "5 years",
    status: "Active",
    joined: "05 Mar 2025",
    schedule: "11:00 AM - 05:00 PM",
  },
  {
    id: "ST-004",
    name: "Dr. Sneha Gupta",
    email: "sneha.gupta@citycare.com",
    phone: "+91 98989 11223",
    role: "Doctor",
    department: "Pediatrics",
    experience: "7 years",
    status: "Inactive",
    joined: "21 Apr 2025",
    schedule: "09:00 AM - 01:00 PM",
  },
  {
    id: "ST-005",
    name: "Anjali Mehta",
    email: "anjali.mehta@citycare.com",
    phone: "+91 99887 66554",
    role: "Receptionist",
    department: "Front Desk",
    experience: "3 years",
    status: "Active",
    joined: "10 May 2025",
    schedule: "09:00 AM - 06:00 PM",
  },
  {
    id: "ST-006",
    name: "Rohit Kumar",
    email: "rohit.kumar@citycare.com",
    phone: "+91 98712 33445",
    role: "Receptionist",
    department: "Front Desk",
    experience: "2 years",
    status: "Active",
    joined: "02 Jun 2025",
    schedule: "10:00 AM - 07:00 PM",
  },
  {
    id: "ST-007",
    name: "Pooja Malhotra",
    email: "pooja.malhotra@citycare.com",
    phone: "+91 98222 44556",
    role: "Receptionist",
    department: "Front Desk",
    experience: "4 years",
    status: "Active",
    joined: "15 Jul 2025",
    schedule: "09:00 AM - 05:00 PM",
  },
];

const navItems = [
  { label: "Overview", href: "/dashboard" },
  { label: "Queue", href: "/dashboard/queue" },
  { label: "Appointments", href: "/dashboard/appointments" },
  { label: "Patients", href: "/dashboard/patients" },
  {
    label: "Doctors & Staff",
    href: "/dashboard/staff",
    active: true,
  },
  { label: "Invitations", href: "/dashboard/invitations" },
  { label: "Reports", href: "/dashboard/reports" },
  { label: "Settings", href: "/dashboard/settings" },
];

export default function StaffPage() {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedMember, setSelectedMember] = useState(null);
  const [showInvite, setShowInvite] = useState(false);

  const filteredMembers = staffMembers.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(search.toLowerCase()) ||
      member.email.toLowerCase().includes(search.toLowerCase()) ||
      member.department.toLowerCase().includes(search.toLowerCase());

    const matchesRole =
      roleFilter === "All" || member.role === roleFilter;

    const matchesStatus =
      statusFilter === "All" || member.status === statusFilter;

    return matchesSearch && matchesRole && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Main */}
      <main className="lg:pl-64">

        <div className="p-5 md:p-8">
          {/* Heading */}
          <div className="flex justify-between mb-7">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">
                Doctors & Staff
              </h1>

              <p className="mt-1 text-sm text-muted-foreground">
                Manage your clinic team, roles and working schedules.
              </p>
            </div>

            <div>
              <button
                onClick={() => setShowInvite(true)}
                className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                <Plus className="h-4 w-4" />
                Invite Member
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="mb-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard
              icon={Stethoscope}
              title="Doctors"
              value="4"
              description="Registered doctors"
            />

            <StatCard
              icon={Users}
              title="Receptionists"
              value="3"
              description="Front desk staff"
            />

            <StatCard
              icon={UserCheck}
              title="Active Members"
              value="6"
              description="Currently active"
            />

            <StatCard
              icon={Clock3}
              title="On Duty Today"
              value="5"
              description="Working today"
            />
          </div>

          {/* Team table */}
          <section className="rounded-2xl border border-border bg-card">
            {/* Toolbar */}
            <div className="flex flex-col gap-4 border-b border-border p-5 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <h2 className="font-semibold">Team Members</h2>

                <p className="mt-1 text-sm text-muted-foreground">
                  {filteredMembers.length} members shown
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                  <input
                    type="text"
                    placeholder="Search staff..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="h-10 w-full rounded-lg border border-input bg-background pl-9 pr-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 sm:w-64"
                  />
                </div>

                {/* Role */}
                <select
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value)}
                  className="h-10 rounded-lg border border-input bg-background px-3 text-sm outline-none focus:border-primary"
                >
                  <option value="All">All Roles</option>
                  <option value="Doctor">Doctor</option>
                  <option value="Receptionist">Receptionist</option>
                </select>

                {/* Status */}
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="h-10 rounded-lg border border-input bg-background px-3 text-sm outline-none focus:border-primary"
                >
                  <option value="All">All Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>

            {/* Desktop table */}
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="px-5 py-3 text-xs font-medium text-muted-foreground">
                      Member
                    </th>

                    <th className="px-5 py-3 text-xs font-medium text-muted-foreground">
                      Role
                    </th>

                    <th className="px-5 py-3 text-xs font-medium text-muted-foreground">
                      Department
                    </th>

                    <th className="px-5 py-3 text-xs font-medium text-muted-foreground">
                      Schedule
                    </th>

                    <th className="px-5 py-3 text-xs font-medium text-muted-foreground">
                      Status
                    </th>

                    <th className="px-5 py-3 text-right text-xs font-medium text-muted-foreground">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredMembers.map((member) => (
                    <tr
                      key={member.id}
                      className="border-b border-border last:border-0 hover:bg-muted/30"
                    >
                      {/* Member */}
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <Avatar
                            name={member.name}
                            role={member.role}
                          />

                          <div>
                            <p className="text-sm font-medium">
                              {member.name}
                            </p>

                            <p className="text-xs text-muted-foreground">
                              {member.email}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Role */}
                      <td className="px-5 py-4">
                        <RoleBadge role={member.role} />
                      </td>

                      {/* Department */}
                      <td className="px-5 py-4">
                        <p className="text-sm">
                          {member.department}
                        </p>
                      </td>

                      {/* Schedule */}
                      <td className="px-5 py-4">
                        <p className="text-sm">
                          {member.schedule}
                        </p>
                      </td>

                      {/* Status */}
                      <td className="px-5 py-4">
                        <StatusBadge status={member.status} />
                      </td>

                      {/* Action */}
                      <td className="px-5 py-4 text-right">
                        <button
                          onClick={() =>
                            setSelectedMember(member)
                          }
                          className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-medium transition hover:bg-muted"
                        >
                          <Eye className="h-3.5 w-3.5" />
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile */}
            <div className="divide-y divide-border md:hidden">
              {filteredMembers.map((member) => (
                <div key={member.id} className="p-5">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar
                        name={member.name}
                        role={member.role}
                      />

                      <div>
                        <p className="text-sm font-medium">
                          {member.name}
                        </p>

                        <p className="text-xs text-muted-foreground">
                          {member.email}
                        </p>
                      </div>
                    </div>

                    <StatusBadge status={member.status} />
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Role
                      </p>

                      <div className="mt-1">
                        <RoleBadge role={member.role} />
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground">
                        Department
                      </p>

                      <p className="mt-1 text-sm">
                        {member.department}
                      </p>
                    </div>

                    <div className="col-span-2">
                      <p className="text-xs text-muted-foreground">
                        Schedule
                      </p>

                      <p className="mt-1 text-sm">
                        {member.schedule}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedMember(member)}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-border py-2 text-sm font-medium hover:bg-muted"
                  >
                    <Eye className="h-4 w-4" />
                    View Member
                  </button>
                </div>
              ))}
            </div>

            {/* Empty state */}
            {filteredMembers.length === 0 && (
              <div className="p-12 text-center">
                <Users className="mx-auto h-8 w-8 text-muted-foreground" />

                <h3 className="mt-3 font-medium">
                  No team members found
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  Try changing your search or filters.
                </p>
              </div>
            )}

            {/* Pagination */}
            <div className="flex items-center justify-between border-t border-border px-5 py-4">
              <p className="text-xs text-muted-foreground">
                Showing 1–7 of 7 members
              </p>

              <div className="flex items-center gap-2">
                <button className="rounded-lg border border-border p-2 hover:bg-muted">
                  <ChevronLeft className="h-4 w-4" />
                </button>

                <span className="text-sm">1</span>

                <button className="rounded-lg border border-border p-2 hover:bg-muted">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </section>

          {/* Bottom sections */}
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {/* Doctors on duty */}
            <section className="rounded-2xl border border-border bg-card p-5">
              <div className="mb-5">
                <h2 className="font-semibold">Doctors on Duty</h2>

                <p className="mt-1 text-sm text-muted-foreground">
                  Doctors currently scheduled for today.
                </p>
              </div>

              <div className="space-y-4">
                {staffMembers
                  .filter(
                    (member) =>
                      member.role === "Doctor" &&
                      member.status === "Active"
                  )
                  .slice(0, 3)
                  .map((doctor) => (
                    <div
                      key={doctor.id}
                      className="flex items-center justify-between rounded-xl border border-border p-3"
                    >
                      <div className="flex items-center gap-3">
                        <Avatar
                          name={doctor.name}
                          role={doctor.role}
                        />

                        <div>
                          <p className="text-sm font-medium">
                            {doctor.name}
                          </p>

                          <p className="text-xs text-muted-foreground">
                            {doctor.department}
                          </p>
                        </div>
                      </div>

                      <span className="rounded-full bg-success/10 px-2.5 py-1 text-xs font-medium text-success">
                        On Duty
                      </span>
                    </div>
                  ))}
              </div>
            </section>

            {/* Team permissions */}
            <section className="rounded-2xl border border-border bg-card p-5">
              <div className="mb-5 flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>

                <div>
                  <h2 className="font-semibold">
                    Role-based Access
                  </h2>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Team members only see features allowed by
                    their role.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <PermissionRow
                  role="Owner"
                  description="Full clinic access"
                />

                <PermissionRow
                  role="Doctor"
                  description="Patients, queue & appointments"
                />

                <PermissionRow
                  role="Receptionist"
                  description="Queue & appointments"
                />
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Member Detail Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-card shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border p-5">
              <div className="flex items-center gap-3">
                <Avatar
                  name={selectedMember.name}
                  role={selectedMember.role}
                />

                <div>
                  <h2 className="font-semibold">
                    {selectedMember.name}
                  </h2>

                  <p className="text-xs text-muted-foreground">
                    {selectedMember.id}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedMember(null)}
                className="rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body */}
            <div className="space-y-6 p-5">
              <div className="flex items-center justify-between">
                <RoleBadge role={selectedMember.role} />
                <StatusBadge status={selectedMember.status} />
              </div>

              <div>
                <h3 className="mb-4 text-sm font-semibold">
                  Member Information
                </h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  <InfoItem
                    icon={Mail}
                    label="Email"
                    value={selectedMember.email}
                  />

                  <InfoItem
                    icon={Phone}
                    label="Phone"
                    value={selectedMember.phone}
                  />

                  <InfoItem
                    icon={Building2}
                    label="Department"
                    value={selectedMember.department}
                  />

                  <InfoItem
                    icon={CalendarDays}
                    label="Joined"
                    value={selectedMember.joined}
                  />
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-sm font-semibold">
                  Work Details
                </h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  <InfoItem
                    icon={Clock3}
                    label="Working Hours"
                    value={selectedMember.schedule}
                  />

                  <InfoItem
                    icon={Stethoscope}
                    label="Experience"
                    value={selectedMember.experience}
                  />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3 border-t border-border p-5">
              <button
                onClick={() => setSelectedMember(null)}
                className="rounded-lg border border-border px-4 py-2.5 text-sm font-medium hover:bg-muted"
              >
                Close
              </button>

              <button className="rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">
                Edit Member
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Invite Modal */}
      {showInvite && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-2xl border border-border bg-card shadow-xl">
            <div className="flex items-center justify-between border-b border-border p-5">
              <div>
                <h2 className="font-semibold">Invite Team Member</h2>

                <p className="mt-1 text-sm text-muted-foreground">
                  Send an invitation to join your clinic.
                </p>
              </div>

              <button
                onClick={() => setShowInvite(false)}
                className="rounded-lg p-2 text-muted-foreground hover:bg-muted"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-5 p-5">
              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="doctor@example.com"
                  className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              {/* Role */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Role
                </label>

                <select className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none focus:border-primary">
                  <option>Doctor</option>
                  <option>Receptionist</option>
                </select>
              </div>

              {/* Info */}
              <div className="rounded-xl bg-primary/5 p-4">
                <div className="flex gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

                  <div>
                    <p className="text-sm font-medium">
                      Secure invitation
                    </p>

                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      The invited member will receive a secure
                      invitation link and join the clinic with
                      the selected role.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 border-t border-border p-5">
              <button
                onClick={() => setShowInvite(false)}
                className="rounded-lg border border-border px-4 py-2.5 text-sm font-medium hover:bg-muted"
              >
                Cancel
              </button>

              <button className="rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">
                Send Invitation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- Components ---------------- */

function StatCard({ icon: Icon, title, value, description }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>

        <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
      </div>

      <p className="mt-5 text-sm text-muted-foreground">
        {title}
      </p>

      <p className="mt-1 text-2xl font-semibold tracking-tight">
        {value}
      </p>

      <p className="mt-1 text-xs text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

function Avatar({ name, role }) {
  const initials = name
    .replace("Dr. ", "")
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

  return (
    <div
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${role === "Doctor"
        ? "bg-primary/10 text-primary"
        : "bg-info/10 text-info"
        }`}
    >
      {initials}
    </div>
  );
}

function RoleBadge({ role }) {
  const doctor = role === "Doctor";

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${doctor
        ? "bg-primary/10 text-primary"
        : "bg-info/10 text-info"
        }`}
    >
      {role}
    </span>
  );
}

function StatusBadge({ status }) {
  const active = status === "Active";

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${active
        ? "bg-success/10 text-success"
        : "bg-muted text-muted-foreground"
        }`}
    >
      {status}
    </span>
  );
}

function InfoItem({ icon: Icon, label, value }) {
  return (
    <div className="rounded-xl border border-border p-3">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </div>

      <p className="mt-2 break-all text-sm font-medium">
        {value}
      </p>
    </div>
  );
}

function PermissionRow({ role, description }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-border p-3">
      <div>
        <p className="text-sm font-medium">{role}</p>

        <p className="mt-0.5 text-xs text-muted-foreground">
          {description}
        </p>
      </div>

      <ShieldCheck className="h-4 w-4 text-success" />
    </div>
  );
}